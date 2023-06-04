package org.babyfish.jimmer.ksp.generator

import com.google.devtools.ksp.symbol.KSAnnotation
import com.squareup.kotlinpoet.ClassName
import com.squareup.kotlinpoet.CodeBlock
import com.squareup.kotlinpoet.ParameterizedTypeName
import com.squareup.kotlinpoet.asClassName
import org.babyfish.jimmer.ksp.fullName
import org.babyfish.jimmer.ksp.get
import org.babyfish.jimmer.ksp.isBuiltInType
import org.babyfish.jimmer.ksp.meta.ImmutableProp
import org.babyfish.jimmer.ksp.meta.MetaException
import java.math.BigDecimal
import java.math.BigInteger
import javax.validation.ValidationException
import kotlin.reflect.KClass

class ValidationGenerator(
    private val prop: ImmutableProp,
    private val parent: CodeBlock.Builder
) {
    private val annoMultiMap: Map<String, List<KSAnnotation>> =
        prop.validationAnnotationMirrorMultiMap

    fun generate() {
        val nullityAnnotations = prop.annotations {
            val shortName = it.shortName.asString()
            shortName == "NotNull" || shortName == "NonNull" ||
                shortName == "Nullable" || shortName == "Null"
        }
        if (nullityAnnotations.isNotEmpty()) {
            throw MetaException(
                prop.propDeclaration,
                "it cannot be decorated by that annotation " +
                    "'@${nullityAnnotations[0].fullName}', " +
                    "kotlin decides the nullity of property by language, not by annotation"
            )
        }
        generateNotEmpty()
        generateNotBlank()
        generateSize()
        generateBound()
        generateEmail()
        generatePattern()
        generateConstraints()
    }

    private fun generateNotEmpty() {
        val notEmpty = annoMultiMap["NotEmpty"]?.get(0) ?: return
        if (!isSimpleType(String::class) && !isSimpleType(List::class)) {
            throw MetaException(
                prop.propDeclaration,
                "it's decorated by the annotation @" +
                    notEmpty.fullName +
                    " but its type is neither string nor list"
            )
        }
        validate(
            "%L.isEmpty()",
            arrayOf(prop.name),
            notEmpty["message"]
        ) { "it cannot be empty" }
    }

    private fun generateNotBlank() {
        val notBlank = annoMultiMap["NotBlank"]?.get(0) ?: return
        if (!isSimpleType(String::class)) {
            throw MetaException(
                prop.propDeclaration,
                "it's decorated by the annotation @" +
                    notBlank.fullName +
                    " but its type is not string"
            )
        }
        validate(
            "%L.trim().isEmpty()",
            arrayOf(prop.name),
            notBlank["message"]
        ) { "it cannot be empty" }
    }

    private fun generateSize() {
        val sizes = annoMultiMap["Size"] ?: emptyList()
        if (sizes.isEmpty()) {
            return
        }
        if (!isSimpleType(String::class) && !isSimpleType(List::class)) {
            throw MetaException(
                prop.propDeclaration,
                "it's decorated by the annotation @" +
                    sizes[0].fullName +
                    " but its type is neither string nor list"
            )
        }
        var min = 0
        var max = Int.MAX_VALUE
        var minMessage: String? = null
        var maxMessage: String? = null
        for (size in sizes) {
            val sizeMin: Int = size["min"]!!
            if (sizeMin > min) {
                min = sizeMin
                minMessage = size["message"]
            }
            val sizeMax: Int = size["max"]!!
            if (sizeMax < max) {
                max = sizeMax
                maxMessage = size["message"]
            }
        }
        if (min > max) {
            throw MetaException(
                prop.propDeclaration,
                "its size validation rules is illegal " +
                    "so that there is not valid length"
            )
        }
        if (min == 0 && max == Int.MAX_VALUE) {
            return
        }
        val sizeProp = if (isSimpleType(String::class)) "length" else "size"
        if (min > 0) {
            val finalValue = min
            validate(
                "%L.%L < %L", arrayOf(prop.name, sizeProp, finalValue),
                minMessage
            ) { "it cannot be less than $finalValue" }
        }
        if (max < Int.MAX_VALUE) {
            val finalValue = max
            validate(
                "%L.%L > %L", arrayOf(prop.name, sizeProp, finalValue),
                maxMessage
            ) { "it cannot be greater than $finalValue" }
        }
    }

    private fun generateBound() {
        val minList = annoMultiMap["Min"] ?: emptyList()
        val maxList = annoMultiMap["Max"] ?: emptyList()
        val positives = annoMultiMap["Positive"] ?: emptyList()
        val positiveOrZeros = annoMultiMap["PositiveOrZero"] ?: emptyList()
        val negatives = annoMultiMap["Negative"] ?: emptyList()
        val negativeOrZeros = annoMultiMap["NegativeOrZero"] ?: emptyList()
        val annotations = listOf(
            minList, maxList,
            positives, positiveOrZeros, 
            negatives, negativeOrZeros
        ).flatten()
        if (annotations.isEmpty()) {
            return
        }
        if (!prop.typeName().isBuiltInType() &&
                !isSimpleType(BigInteger::class) &&
                !isSimpleType(BigDecimal::class)
        ) {
            throw MetaException(
                prop.propDeclaration,
                "it's decorated by the annotation @" +
                    annotations[0].fullName +
                    " but its type is numeric"
            )
        }
        var minValue: Long? = null
        var maxValue: Long? = null
        var message: String? = null
        for (min in minList) {
            val annoValue: Long = min["value"]!!
            if (minValue == null || annoValue > minValue) {
                minValue = annoValue
                message = min["message"]
            }
        }
        for (positive in positives) {
            if (minValue == null || 1L > minValue) {
                minValue = 1L
                message = positive["message"]
            }
        }
        for (positiveOrZero in positiveOrZeros) {
            if (minValue == null || 0L > minValue) {
                minValue = 0L
                message = positiveOrZero["message"]
            }
        }
        for (max in maxList) {
            val annoValue: Long = max["value"]!!
            if (maxValue == null || annoValue < maxValue) {
                maxValue = annoValue
                message = max["message"]
            }
        }
        for (negative in negatives) {
            if (maxValue == null || -1L < maxValue) {
                maxValue = -1L
                message = negative["message"]
            }
        }
        for (negativeOrZero in negativeOrZeros) {
            if (maxValue == null || 0L < maxValue) {
                maxValue = 0L
                message = negativeOrZero["message"]
            }
        }
        if ((minValue != null) && (maxValue != null) && (minValue > maxValue)) {
            throw MetaException(
                prop.propDeclaration,
                "its numeric range validation rules is illegal " +
                    "so that there is not valid number"
            )
        }
        if (minValue != null) {
            validateBound(minValue, "<", message)
        }
        if (maxValue != null) {
            validateBound(maxValue, ">", message)
        }
    }

    private fun generateEmail() {
        val email = annoMultiMap["Email"]?.get(0) ?: return
        if (!isSimpleType(String::class)) {
            throw MetaException(
                prop.propDeclaration,
                "it's decorated by the annotation @" +
                    email.fullName +
                    " but its type is not string"
            )
        }
        validate(
            "!%L.matcher(%L).matches()",
            arrayOf(
                DRAFT_FIELD_EMAIL_PATTERN,
                prop.name
            ),
            email["message"]
        ) { "it is not email address" }
    }

    private fun generatePattern() {
        val patterns = annoMultiMap["Pattern"] ?: return
        if (!isSimpleType(String::class)) {
            throw MetaException(
                prop.propDeclaration,
                "it's decorated by the annotation @" +
                    patterns[0].fullName +
                    " but its type is not string"
            )
        }
        for (i in patterns.indices) {
            validate(
                "!%L.matcher(%L).matches()",
                arrayOf(regexpPatternFieldName(prop, i), prop.name),
                patterns[i]["message"],
            ) {
                ("it does not match the regexp '" +
                    patterns[i].get<String>("regexp")!!.replace("\\", "\\\\") +
                    "'")
            }
        }
    }

    private fun generateConstraints() {
        for (e in prop.validationMessages) {
            parent.addStatement(
                "%L.validate(%L)",
                validatorFieldName(prop, e.key),
                prop.name
            )
        }
    }

    private fun validate(
        condition: String,
        args: Array<Any>,
        errorMessage: String?,
        defaultMessageSupplier: () -> String
    ) {
        if (!prop.isNullable || prop.typeName().isBuiltInType(false)) {
            parent.beginControlFlow("if ($condition)", *args)
        } else {
            parent.beginControlFlow("if (${prop.name} != null && $condition)", *args)
        }
        if (((errorMessage == null) ||
                errorMessage.isEmpty() ||
                errorMessage.startsWith("{javax.validation.constraints."))
        ) {
            parent.apply {
                add("throw %T(\n", ValidationException::class)
                indent()
                add("%S", "Illegal value'")
                add(" +\n")
                add("%L", prop.name)
                add(" +\n")
                add("%S", "'for property '${prop}', ")
                add(" +\n")
                add("%S", defaultMessageSupplier())
                unindent()
                addStatement(")")
            }
        }
        parent.endControlFlow()
    }

    private fun isSimpleType(type: KClass<*>): Boolean {
        val className = when (val typeName = prop.typeName()) {
            is ClassName -> typeName
            is ParameterizedTypeName -> typeName.rawType
            else -> return false
        }.let {
            if (it.isNullable) {
                it.copy(nullable = false)
            } else {
                it
            }
        }
        return className == type.asClassName()
    }

    private fun validateBound(bound: Long, cmp: String, message: String?) {
        val bigNumLiteral = when {
            prop.typeName(overrideNullable = false) == BIG_DECIMAL_CLASS_NAME ->
                when (bound) {
                    0L -> "%T.ZERO"
                    1L -> "%T.ONE"
                    2L -> "%T.TWO"
                    10L -> "%T.TEN"
                    else -> "%T.valueOf($bound)"
                }
            prop.typeName(overrideNullable = false) == BIG_INTEGER_CLASS_NAME ->
                when (bound) {
                    -1L -> "%T.NEGATIVE_ONE"
                    0L -> "%T.ZERO"
                    1L -> "%T.ONE"
                    2L -> "%T.TWO"
                    10L -> "%T.TEN"
                    else -> "%T.valueOf($bound)"
                }
            else ->
                null
        }
        validate(
            if (bigNumLiteral != null) {
                "%L.compareTo($bigNumLiteral) %L 0"
            } else {
                "%L %L %L"
            },
            if (bigNumLiteral != null) {
                arrayOf(prop.name, prop.typeName(overrideNullable = false), cmp)
            }
            else {
                arrayOf(prop.name, cmp, bound)
            },
            message
        ) {
            ("it cannot be " +
                (if ((cmp == "<")) "less than" else "greater than") +
                " " +
                bound)
        }
    }
}
