package org.babyfish.jimmer.ksp.meta

import com.google.devtools.ksp.getDeclaredFunctions
import com.google.devtools.ksp.getDeclaredProperties
import com.google.devtools.ksp.isAbstract
import com.google.devtools.ksp.symbol.*
import com.squareup.kotlinpoet.ClassName
import org.babyfish.jimmer.Formula
import org.babyfish.jimmer.ksp.*
import org.babyfish.jimmer.ksp.generator.DRAFT
import org.babyfish.jimmer.ksp.generator.FETCHER_DSL
import org.babyfish.jimmer.ksp.generator.parseValidationMessages
import org.babyfish.jimmer.meta.ModelException
import org.babyfish.jimmer.sql.Embeddable
import org.babyfish.jimmer.sql.Entity
import org.babyfish.jimmer.sql.Id
import org.babyfish.jimmer.sql.MappedSuperclass
import kotlin.reflect.KClass

class ImmutableType(
    ctx: Context,
    private val classDeclaration: KSClassDeclaration
) {
    val simpleName: String = classDeclaration.simpleName.asString()

    val className: ClassName = classDeclaration.className()

    val draftClassName: ClassName = classDeclaration.className { "$it$DRAFT" }

    val fetcherDslClassName: ClassName = classDeclaration.className { "$it$FETCHER_DSL" }

    fun draftClassName(vararg nestedNames: String) =
        classDeclaration.nestedClassName {
            mutableListOf<String>().apply {
                add("$it$DRAFT")
                for (nestedName in nestedNames) {
                    add(nestedName)
                }
            }
        }

    val sqlAnnotationType: KClass<out Annotation>? = run {
        var annotationType: KClass<out Annotation>? = null
        for (sqlAnnotationType in SQL_ANNOTATION_TYPES) {
            classDeclaration.annotation(sqlAnnotationType)?.let {
                if (annotationType != null) {
                    throw MetaException(
                        "Illegal type \"$this\", it cannot be decorated by both " +
                            "@${annotationType!!.qualifiedName} and ${sqlAnnotationType.qualifiedName}"
                    )
                }
                annotationType = sqlAnnotationType
            }
        }
        annotationType
    }

    val name: String
        get() = classDeclaration.simpleName.asString()

    val qualifiedName: String
        get() = classDeclaration.qualifiedName!!.asString()

    val isEntity: Boolean = classDeclaration.annotation(Entity::class) !== null

    val superType: ImmutableType? =
        classDeclaration
            .superTypes
            .map { it.resolve().declaration }
            .filterIsInstance<KSClassDeclaration>()
            .filter {
                it.classKind == ClassKind.INTERFACE &&
                    ctx.typeAnnotationOf(it) !== null
            }
            .toList()
            .also { 
                if (it.size > 1) {
                    throw MetaException(
                        "Illegal immutable type '${classDeclaration.fullName}', " +
                            "it extends several super immutable types: ${it.map { sp -> sp.fullName }}"
                    )
                }
            }
            .firstOrNull()
            ?.let {
                ctx.typeOf(it)
            }

    val declaredProperties: Map<String, ImmutableProp>

    init {
        val superProps = superType?.properties
        val reorderedPropDeclarations = mutableListOf<KSPropertyDeclaration>()
        for (function in classDeclaration.getDeclaredFunctions()) {
            if (function.isAbstract) {
                throw MetaException("Illegal function '${classDeclaration.fullName}.${function}', only non-abstract function is acceptable")
            }
            for (anno in function.annotations) {
                if (anno.fullName.startsWith("org.babyfish.jimmer.")) {
                    throw MetaException(
                        "Non-abstract function '${function}' cannot be decorated by any jimmer annotations"
                    )
                }
            }
        }
        for (i in 0..1) {
            classDeclaration
                .getDeclaredProperties()
                .forEach { propDeclaration ->
                    if (propDeclaration.isAbstract()) {
                        val isId = propDeclaration.annotations(Id::class).isNotEmpty()
                        superProps?.get(propDeclaration.name)?.let {
                            throw MetaException("'$this${propDeclaration}' overrides '$it', this is not allowed")
                        }
                        if (isId == (i == 0)) {
                            reorderedPropDeclarations += propDeclaration
                        }
                        val formula = propDeclaration.annotation(Formula::class)
                        if (formula !== null) {
                            val sql = formula.get<String>("sql") ?: ""
                            if (sql.isEmpty()) {
                                throw ModelException(
                                    "The property \"" +
                                        this +
                                        "." +
                                        propDeclaration +
                                        "\" is abstract and decorated by @" +
                                        Formula::class.java.name +
                                        ", abstract modifier means simple calculation property based on " +
                                        "SQL expression so that the `sql` of that annotation must be specified"
                                )
                            }
                        }
                    } else {
                        for (anno in propDeclaration.annotations) {
                            if (anno.fullName.startsWith("org.babyfish.jimmer.") && anno.fullName != FORMULA_CLASS_NAME) {
                                throw MetaException(
                                    "'$this${propDeclaration}' is not abstract so that " +
                                        "it cannot be decorated by " +
                                        "any jimmer annotations except @" +
                                        FORMULA_CLASS_NAME
                                )
                            }
                            val formula = propDeclaration.annotation(Formula::class)
                            if (formula !== null) {
                                formula.get<String>("sql")?.takeIf { it.isNotEmpty() } ?.let {
                                    throw ModelException(
                                        "The property \"" +
                                            this +
                                            "." +
                                            propDeclaration +
                                            "\" is non-abstract and decorated by @" +
                                            Formula::class.java.name +
                                            ", non-abstract modifier means simple calculation property based on " +
                                            "kotlin expression so that the `sql` of that annotation cannot be specified"
                                    )
                                }
                                val dependencies = formula.get<List<String>>("dependencies") ?: emptyList()
                                if (dependencies.isEmpty()) {
                                    throw ModelException(
                                        "The property \"" +
                                            this +
                                            "." +
                                            propDeclaration +
                                            "\" is non-abstract and decorated by @" +
                                            Formula::class.java.name +
                                            ", non-abstract modifier means simple calculation property based on " +
                                            "kotlin expression so that the `dependencies` of that annotation must be specified"
                                    )
                                }
                                reorderedPropDeclarations += propDeclaration
                            }
                        }
                    }
                }
        }
        val basePropId = (superProps?.size ?: 0) + 1
        declaredProperties = reorderedPropDeclarations
            .mapIndexed { index, propDeclaration ->
                ImmutableProp(ctx, this, basePropId + index, propDeclaration)
            }
            .associateBy { it.name }
    }

    val properties: Map<String, ImmutableProp> =
        if (superType == null) {
            declaredProperties
        } else {
            val map = mutableMapOf<String, ImmutableProp>()
            for ((name, prop) in superType.properties) {
                if (prop.isId) {
                    map[name] = prop
                }
            }
            for ((name, prop) in declaredProperties) {
                if (prop.isId) {
                    map[name] = prop
                }
            }
            for ((name, prop) in superType.properties) {
                if (!prop.isId) {
                    map[name] = prop
                }
            }
            for ((name, prop) in declaredProperties) {
                if (!prop.isId) {
                    map[name] = prop
                }
            }
            map
        }

    val propsOrderById: List<ImmutableProp> by lazy {
        properties.values.sortedBy { it -> it.id }
    }

    val validationMessages: Map<ClassName, String> =
        parseValidationMessages(classDeclaration)

    override fun toString(): String =
        classDeclaration.fullName

    companion object {

        @JvmStatic
        private val SQL_ANNOTATION_TYPES =
            setOf(Entity::class, MappedSuperclass::class, Embeddable::class)

        @JvmStatic
        private val FORMULA_CLASS_NAME = Formula::class.qualifiedName
    }
}