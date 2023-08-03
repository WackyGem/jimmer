package org.babyfish.jimmer.ksp.generator

import com.google.devtools.ksp.processing.CodeGenerator
import com.google.devtools.ksp.processing.Dependencies
import com.google.devtools.ksp.symbol.KSAnnotation
import com.google.devtools.ksp.symbol.KSFile
import com.google.devtools.ksp.symbol.KSType
import com.squareup.kotlinpoet.*
import com.squareup.kotlinpoet.ParameterizedTypeName.Companion.parameterizedBy
import com.squareup.kotlinpoet.ksp.toAnnotationSpec
import org.babyfish.jimmer.dto.compiler.DtoProp
import org.babyfish.jimmer.dto.compiler.DtoType
import org.babyfish.jimmer.ksp.annotation
import org.babyfish.jimmer.ksp.get
import org.babyfish.jimmer.ksp.meta.*
import org.jetbrains.annotations.NotNull
import org.jetbrains.annotations.Nullable
import java.io.OutputStreamWriter
import java.util.*

class DtoGenerator private constructor(
    private val dtoType: DtoType<ImmutableType, ImmutableProp>,
    private val codeGenerator: CodeGenerator?,
    private val parent: DtoGenerator?,
    private val innerClassName: String?
) {
    private val root: DtoGenerator = parent?.root ?: this

    init {
        if ((codeGenerator === null) == (parent === null)) {
            throw IllegalArgumentException("The nullity values of `codeGenerator` and `parent` cannot be same")
        }
        if ((parent === null) != (innerClassName === null)) {
            throw IllegalArgumentException("The nullity values of `parent` and `innerClassName` must be same")
        }
    }
    private var _typeBuilder: TypeSpec.Builder? = null
    
    constructor(
        dtoType: DtoType<ImmutableType, ImmutableProp>,
        codeGenerator: CodeGenerator?,
    ): this(dtoType, codeGenerator, null, null)

    val typeBuilder: TypeSpec.Builder
        get() = _typeBuilder ?: error("Type builder is not ready")

    private fun getDtoClassName(vararg nestedNames: String): ClassName {
            if (innerClassName !== null) {
                val list: MutableList<String> = ArrayList()
                collectNames(list)
                list.addAll(nestedNames.toList())
                return ClassName(
                    root.packageName(),
                    list[0],
                    *list.subList(1, list.size).toTypedArray()
                )
            }
            return ClassName(
                root.packageName(),
                dtoType.name!!,
                *nestedNames
            )
        }

    private fun packageName() =
        dtoType
            .baseType
            .className
            .packageName
            ?.takeIf { it.isNotEmpty() }
            ?.let { "$it.dto" }
            ?: "dto"

    fun generate(allFiles: List<KSFile>) {
        if (codeGenerator != null) {
            codeGenerator.createNewFile(
                Dependencies(false, *allFiles.toTypedArray()),
                packageName(),
                dtoType.name!!
            ).use {
                val fileSpec = FileSpec
                    .builder(
                        packageName(),
                        dtoType.name!!
                    ).apply {
                        indent("    ")
                        addImports()
                        val builder = TypeSpec
                            .classBuilder(dtoType.name!!)
                            .addModifiers(KModifier.DATA)
                        _typeBuilder = builder
                        try {
                            addMembers(allFiles)
                            addType(builder.build())
                        } finally {
                            _typeBuilder = null
                        }
                    }.build()
                val writer = OutputStreamWriter(it, Charsets.UTF_8)
                fileSpec.writeTo(writer)
                writer.flush()
            }
        } else if (innerClassName !== null && parent !== null) {
            val builder = TypeSpec
                .classBuilder(innerClassName)
                .addModifiers(KModifier.DATA)
            _typeBuilder = builder
            try {
                addMembers(allFiles)
                parent.typeBuilder.addType(builder.build())
            } finally {
                _typeBuilder = null
            }
        }
    }

    private fun FileSpec.Builder.addImports() {
        val packages = sortedSetOf<String>().also {
            collectImports(dtoType, it)
        }
        for (pkg in packages) {
            addImport(pkg, "by")
        }
    }

    private fun collectImports(
        dtoType: DtoType<ImmutableType, ImmutableProp>,
        packages: SortedSet<String>
    ) {
        packages += dtoType.baseType.className.packageName
        for (prop in dtoType.props) {
            val targetType = prop.targetType?.takeIf { dtoType !== it }
            if (targetType !== null) {
                collectImports(targetType, packages)
            } else {
                prop.baseProp.targetType?.className?.packageName?.let {
                    packages += it
                }
            }
        }
    }

    private fun addMembers(allFiles: List<KSFile>) {

        typeBuilder.addSuperinterface(
            (if (dtoType.isInput) INPUT_CLASS_NAME else STATIC_CLASS_NAME).parameterizedBy(
                dtoType.baseType.className
            )
        )

        addMetadata()

        addDefaultConstructor()
        addConverterConstructor()

        addToEntity()

        for (prop in dtoType.props) {
            val targetType = prop.targetType
            if (targetType != null && prop.isNewTarget) {
                DtoGenerator(
                    targetType,
                    null,
                    this,
                    targetSimpleName(prop)
                ).generate(allFiles)
            }
        }
    }

    private fun addMetadata() {
        typeBuilder.addType(
            TypeSpec
                .companionObjectBuilder()
                .apply {
                    addProperty(
                        PropertySpec
                            .builder(
                                "METADATA",
                                STATIC_METADATA_CLASS_NAME.parameterizedBy(
                                    dtoType.baseType.className,
                                    getDtoClassName()
                                )
                            )
                            .addAnnotation(JVM_STATIC_CLASS_NAME)
                            .initializer(
                                CodeBlock
                                    .builder()
                                    .apply {
                                        add("\n")
                                        indent()
                                        add(
                                            "%T<%T, %T>(\n",
                                            STATIC_METADATA_CLASS_NAME,
                                            dtoType.baseType.className, getDtoClassName()
                                        )
                                        indent()
                                        add("%M(%T::class).by", NEW_FETCHER, dtoType.baseType.className)
                                        beginControlFlow("")
                                        for (prop in dtoType.props) {
                                            if (!prop.baseProp.isId) {
                                                if (prop.targetType !== null) {
                                                    if (prop.isNewTarget) {
                                                        add(
                                                            "%N(%T.METADATA.fetcher)",
                                                            prop.baseProp.name,
                                                            propElementName(prop)
                                                        )
                                                        if (prop.isRecursive) {
                                                            beginControlFlow("")
                                                            addStatement("recursive()")
                                                            endControlFlow()
                                                        } else {
                                                            add("\n")
                                                        }
                                                    }
                                                } else {
                                                    addStatement("%N()", prop.baseProp.name)
                                                }
                                            }
                                        }
                                        endControlFlow()
                                        unindent()
                                        add(")")
                                        beginControlFlow("")
                                        addStatement("%T(it)", getDtoClassName())
                                        endControlFlow()
                                        unindent()
                                    }
                                    .build()
                            )
                            .build()
                    )
                }
                .build()
        )
    }

    private fun addDefaultConstructor() {
        val builder = FunSpec.constructorBuilder()
        for (prop in dtoType.props) {
            builder.addParameter(
                ParameterSpec
                    .builder(prop.name, propTypeName(prop))
                    .apply {
                        when {
                            prop.isNullable -> defaultValue("null")
                            prop.baseProp.isList -> defaultValue("emptyList()")
                            prop.baseProp.isPrimitive -> defaultValue(
                                when (prop.baseProp.typeName()) {
                                    BOOLEAN -> "false"
                                    CHAR -> "'\\0'"
                                    else -> "0"
                                }
                            )
                            prop.baseProp.typeName() == STRING ->
                                defaultValue("\"\"")
                        }
                    }
                    .build()
            )
        }
        typeBuilder.primaryConstructor(builder.build())

        for (prop in dtoType.props) {
            typeBuilder.addProperty(
                PropertySpec
                    .builder(prop.name, propTypeName(prop))
                    .initializer(prop.name)
                    .apply {
                        for (anno in prop.baseProp.annotations { isCopyableAnnotation(it) }) {
                            addAnnotation(anno.toAnnotationSpec())
                        }
                    }
                    .build()
            )
        }
    }

    private fun addConverterConstructor() {
        typeBuilder.addFunction(
            FunSpec
                .constructorBuilder()
                .addParameter("base", dtoType.baseType.className)
                .apply {
                    callThisConstructor(dtoType.props.map { prop ->
                        CodeBlock
                            .builder()
                            .indent()
                            .add("\n")
                            .apply {
                                val targetType = prop.targetType
                                when {
                                    targetType !== null ->
                                        if (prop.isNullable) {
                                            beginControlFlow("base.takeIf")
                                            addStatement(
                                                "(it as %T).__isLoaded(%T.byIndex(%T.%L))",
                                                IMMUTABLE_SPI_CLASS_NAME,
                                                PROP_ID_CLASS_NAME,
                                                dtoType.baseType.draftClassName("$"),
                                                prop.baseProp.slotName
                                            )
                                            endControlFlow()
                                            addStatement(
                                                "?.%N?.%N { %T(it) }",
                                                prop.baseProp.name,
                                                if (prop.baseProp.isList) "map" else "let",
                                                propElementName(prop)
                                            )
                                        } else {
                                            add(
                                                "base.%N%L%N { %T(it) }",
                                                prop.baseProp.name,
                                                if (prop.baseProp.isNullable) "?." else ".",
                                                if (prop.baseProp.isList) "map" else "let",
                                                propElementName(prop)
                                            )
                                        }
                                    prop.isIdOnly ->
                                        if (prop.isNullable) {
                                            beginControlFlow("base.takeIf")
                                            addStatement(
                                                "(it as %T).__isLoaded(%T.byIndex(%T.%L))",
                                                IMMUTABLE_SPI_CLASS_NAME,
                                                PROP_ID_CLASS_NAME,
                                                dtoType.baseType.draftClassName("$"),
                                                prop.baseProp.slotName
                                            )
                                            endControlFlow()
                                            addStatement(
                                                "?.%N?.%L",
                                                prop.baseProp.name,
                                                if (prop.baseProp.isList) {
                                                    "map{ it.${prop.baseProp.targetType!!.idProp!!.name} }"
                                                } else {
                                                    prop.baseProp.targetType!!.idProp!!.name
                                                }
                                            )
                                        } else {
                                            add(
                                                "base.%N%L%L",
                                                prop.baseProp.name,
                                                if (prop.baseProp.isNullable) "?." else ".",
                                                if (prop.baseProp.isList) {
                                                    "map{ it.${prop.baseProp.targetType!!.idProp!!.name} }"
                                                } else {
                                                    prop.baseProp.targetType!!.idProp!!.name
                                                }
                                            )
                                        }
                                    else ->
                                        if (prop.isNullable) {
                                            beginControlFlow("base.takeIf")
                                            addStatement(
                                                "(it as %T).__isLoaded(%T.byIndex(%T.%L))",
                                                IMMUTABLE_SPI_CLASS_NAME,
                                                PROP_ID_CLASS_NAME,
                                                dtoType.baseType.draftClassName("$"),
                                                prop.baseProp.slotName
                                            )
                                            endControlFlow()
                                            addStatement("?.%N", prop.baseProp.name)
                                        } else {
                                            add(
                                                "base%L%N",
                                                if (prop.baseProp.isNullable) "?." else ".",
                                                prop.baseProp.name
                                            )
                                        }
                                }
                                if (!prop.isNullable && prop.baseProp.isNullable) {
                                    add(" ?: error(%S)", "\"base.${prop.baseProp.name}\" cannot be null")
                                }
                            }
                            .unindent()
                            .build()
                    })
                }
                .build()
        )
    }

    private fun addToEntity() {
        typeBuilder.addFunction(
            FunSpec
                .builder("toEntity")
                .returns(dtoType.baseType.className)
                .addModifiers(KModifier.OVERRIDE)
                .beginControlFlow(
                    "return %M(%T::class).by",
                    NEW,
                    dtoType.baseType.className
                )
                .apply {
                    addStatement(
                        "val that = this@%L",
                        if (innerClassName !== null && innerClassName.isNotEmpty()) {
                            innerClassName
                        } else {
                            dtoType.name!!
                        }
                    )
                    for (prop in dtoType.props) {
                        if (prop.isNullable && !prop.baseProp.isNullable) {
                            beginControlFlow("if (that.%N !== null)", prop.name)
                            addAssignment(prop)
                            if (prop.baseProp.isList) {
                                nextControlFlow("else")
                                addStatement("%N = emptyList()", prop.baseProp.name)
                            }
                            endControlFlow()
                        } else {
                            addAssignment(prop)
                        }
                    }
                }
                .endControlFlow()
                .build()
        )
    }

    private fun FunSpec.Builder.addAssignment(prop: DtoProp<ImmutableType, ImmutableProp>) {
        val targetType = prop.targetType
        when {
            targetType !== null ->
                if (prop.baseProp.isList) {
                    addStatement(
                        "this.%N = that.%N%Lmap { it.toEntity() }",
                        prop.baseProp.name,
                        prop.name,
                        if (prop.baseProp.isNullable) "?." else "."
                    )
                } else {
                    addStatement(
                        "this.%N = that.%N%LtoEntity()",
                        prop.baseProp.name,
                        prop.name,
                        if (prop.baseProp.isNullable) "?." else "."
                    )
                }
            prop.isIdOnly -> {
                beginControlFlow(
                    "this.%N = that.%N%L%N",
                    prop.baseProp.name,
                    prop.name,
                    if (prop.baseProp.isNullable) "?." else ".",
                    if (prop.baseProp.isNullable) "let" else "map"
                )
                beginControlFlow(
                    "%M(%T::class).by",
                    NEW,
                    prop.baseProp.targetType!!.className,
                )
                addStatement("this.%N = it", prop.baseProp.targetType!!.idProp!!.name)
                endControlFlow()
                endControlFlow()
            }
            else ->
                addStatement("this.%N = that.%N", prop.baseProp.name, prop.name)
        }
    }

    private fun propTypeName(prop: DtoProp<ImmutableType, ImmutableProp>): TypeName {
        val elementTypeName: TypeName = propElementName(prop)
        return if (prop.baseProp.isList) {
            LIST.parameterizedBy(elementTypeName)
        } else {
            elementTypeName
        }.let {
            if (prop.isNullable) {
                it.copy(nullable = true)
            } else {
                it
            }
        }
    }

    private fun propElementName(prop: DtoProp<ImmutableType, ImmutableProp>): TypeName {
        val targetType = prop.targetType
        if (targetType !== null) {
            if (targetType.name === null) {
                val list: MutableList<String> = ArrayList()
                collectNames(list)
                if (prop.isNewTarget) {
                    list.add(targetSimpleName(prop))
                }
                return ClassName(
                    packageName(),
                    list[0],
                    *list.subList(1, list.size).toTypedArray()
                )
            }
            return ClassName(
                packageName(),
                targetType.name!!
            )
        }
        return if (prop.isIdOnly) {
                prop.baseProp.targetType!!.idProp!!.targetTypeName(overrideNullable = false)
            } else {
                prop.baseProp.targetTypeName(overrideNullable = false)
            }
    }

    private fun collectNames(list: MutableList<String>) {
        if (parent == null) {
            list.add(dtoType.name!!)
        } else if (innerClassName !== null){
            parent.collectNames(list)
            list.add(innerClassName)
        }
    }

    companion object {
        @JvmStatic
        private fun targetSimpleName(prop: DtoProp<ImmutableType, ImmutableProp>): String {
            prop.targetType ?: throw IllegalArgumentException("prop is not association")
            return "TargetOf_${prop.name}"
        }

        @JvmStatic
        private val NEW = MemberName("org.babyfish.jimmer.kt", "new")

        @JvmStatic
        private val NEW_FETCHER = MemberName("org.babyfish.jimmer.sql.kt.fetcher", "newFetcher")

        private fun isCopyableAnnotation(annotation: KSAnnotation): Boolean {
            val declaration = annotation.annotationType.resolve().declaration
            val target = declaration.annotation(kotlin.annotation.Target::class)
            if (target !== null) {
                val accept = target
                    .get<List<KSType>>("allowedTargets")
                    ?.any { it.toString().endsWith("FIELD") || it.toString().endsWith("METHOD") } == true
                if (accept) {
                    val qualifiedName = declaration.qualifiedName!!.asString()
                    return qualifiedName != NotNull::class.java.name &&
                        qualifiedName != Nullable::class.java.name &&
                        !qualifiedName.startsWith("org.babyfish.jimmer.")
                }
            }
            return false
        }
    }
}