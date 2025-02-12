package org.babyfish.jimmer.apt.generator;

import com.squareup.javapoet.*;
import org.babyfish.jimmer.apt.GeneratorException;
import org.babyfish.jimmer.apt.Context;
import org.babyfish.jimmer.apt.meta.ImmutableProp;
import org.babyfish.jimmer.apt.meta.ImmutableType;

import javax.annotation.processing.Filer;
import javax.lang.model.element.Modifier;

import java.io.IOException;

import static org.babyfish.jimmer.apt.generator.Constants.PROPS_FOR_CLASS_NAME;
import static org.babyfish.jimmer.apt.generator.Constants.PROP_EXPRESSION_CLASS_NAME;

public class PropsGenerator {

    private final Context context;

    private final ImmutableType type;

    private final Filer filer;

    private TypeSpec.Builder typeBuilder;

    public PropsGenerator(
            Context context,
            ImmutableType type,
            Filer filer
    ) {
        this.context = context;
        this.type = type;
        this.filer = filer;
    }

    public void generate() {
        try {
            JavaFile
                    .builder(
                            type.getPackageName(),
                            generateImpl()
                    )
                    .indent("    ")
                    .build()
                    .writeTo(filer);
        } catch (IOException ex) {
            throw new GeneratorException(
                    String.format(
                            "Cannot generate props class for '%s'",
                            type.getName()
                    ),
                    ex
            );
        }
    }

    private TypeSpec generateImpl() {
        typeBuilder = TypeSpec
                .interfaceBuilder(type.getName() + "Props")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(
                        AnnotationSpec
                                .builder(Constants.GENERATED_BY_CLASS_NAME)
                                .addMember("type", "$T.class", type.getClassName())
                                .build()
                );
        if (type.isEntity() || type.isMappedSuperClass()) {
            typeBuilder.addAnnotation(
                    AnnotationSpec
                            .builder(PROPS_FOR_CLASS_NAME)
                            .addMember("value", "$T.class", type.getClassName())
                            .build()
            );
        }
        if (type.getSuperTypes().isEmpty()) {
            if (type.isEntity() || type.isMappedSuperClass()) {
                typeBuilder.addSuperinterface(Constants.PROPS_CLASS_NAME);
            }
        } else {
            for (ImmutableType superType : type.getSuperTypes()) {
                typeBuilder.addSuperinterface(
                        superType.getPropsClassName()
                );
            }
        }
        try {
            for (ImmutableProp prop : type.getProps().values()) {
                addStaticProp(prop);
            }
            if (type.isEntity() || type.isMappedSuperClass()) {
                for (ImmutableProp prop : type.getDeclaredProps().values()) {
                    if (prop.isDsl(false)) {
                        addProp(prop, false);
                        addProp(prop, true);
                    }
                }
            }
            return typeBuilder.build();
        } finally {
            typeBuilder = null;
        }
    }

    private void addStaticProp(ImmutableProp prop) {
        ClassName rawClassName;
        String action;
        if (prop.isList()) {
            rawClassName = prop.isAssociation(false) ?
                    Constants.REFERENCE_LIST_CLASS_NAME :
                    Constants.SCALAR_LIST_CLASS_NAME;
            action = prop.isAssociation(false) ?
                    "referenceList" :
                    "scalarList";
        } else {
            rawClassName = prop.isAssociation(false) ?
                    Constants.REFERENCE_CLASS_NAME :
                    Constants.SCALAR_CLASS_NAME;
            action = prop.isAssociation(false) ?
                    "reference" :
                    "scalar";
        }
        String fieldName = Strings.upper(prop.getName());
        FieldSpec.Builder builder = FieldSpec
                .builder(
                        ParameterizedTypeName.get(
                                rawClassName,
                                type.getClassName(),
                                prop.getElementTypeName().box()
                        ),
                        fieldName,
                        Modifier.PUBLIC,
                        Modifier.STATIC,
                        Modifier.FINAL
                )
                .initializer(
                        "\n    $T.$L($T.get($T.class).getProp($S))",
                        Constants.TYPED_PROP_CLASS_NAME,
                        action,
                        Constants.RUNTIME_TYPE_CLASS_NAME,
                        type.getClassName(),
                        prop.getName()
                );
        typeBuilder.addField(builder.build());
    }

    private void addProp(
            ImmutableProp prop,
            boolean withJoinType
    ) {
        MethodSpec method = PropsGenerator.property(
                context,
                false,
                prop,
                withJoinType,
                false
        );
        if (method != null) {
            typeBuilder.addMethod(method);
        }
    }

    static MethodSpec property(
            Context context,
            boolean isTableEx,
            ImmutableProp prop,
            boolean withJoinType,
            boolean withImplementation
    ) {
        return property(context, isTableEx, prop, withJoinType, withImplementation, false);
    }

    static MethodSpec property(
            Context context,
            boolean isTableEx,
            ImmutableProp prop,
            boolean withJoinType,
            boolean withImplementation,
            boolean ignoreOverride
    ) {
        if (withJoinType && !prop.isAssociation(true)) {
            return null;
        }
        TypeName returnType = returnTypeName(context, isTableEx, prop);
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getName())
                .addModifiers(Modifier.PUBLIC)
                .returns(returnType);
        if (withImplementation) {
            if (!isTableEx && !ignoreOverride) {
                builder.addAnnotation(Override.class);
            }
        } else {
            builder.addModifiers(Modifier.ABSTRACT);
        }
        if (withJoinType) {
            builder.addParameter(Constants.JOIN_TYPE_CLASS_NAME, "joinType");
        }
        if (withImplementation) {
            if (prop.isAssociation(true)) {
                builder.addStatement("__beforeJoin()");
                if (withJoinType) {
                    builder
                            .beginControlFlow("if (raw != null)")
                            .addStatement("return new $T(raw.joinImplementor($S, joinType))", returnType, prop.getName())
                            .endControlFlow()
                            .addStatement("return new $T(joinOperation($S, joinType))", returnType, prop.getName());
                } else {
                    builder
                            .beginControlFlow("if (raw != null)")
                            .addStatement("return new $T(raw.joinImplementor($S))", returnType, prop.getName())
                            .endControlFlow()
                            .addStatement("return new $T(joinOperation($S))", returnType, prop.getName());
                }
            } else if (prop.isAssociation(false)) {
                builder.addStatement("return new $T(get($S))", returnType, prop.getName());
            } else {
                builder.addStatement("return get($S)", prop.getName());
            }
        }
        return builder.build();
    }

    static TypeName returnTypeName(
            Context context,
            boolean isTableEx,
            ImmutableProp prop
    ) {
        TypeName returnType;
        if (prop.isAssociation(true)) {
            if (prop.isRemote()) {
                returnType = context
                        .getImmutableType(prop.getElementType())
                        .getRemoteTableClassName();
            } else if (isTableEx) {
                returnType = context
                        .getImmutableType(prop.getElementType())
                        .getTableExClassName();
            } else {
                returnType = context
                        .getImmutableType(prop.getElementType())
                        .getTableClassName();
            }
        } else if (prop.isAssociation(false)) {
            ClassName className = (ClassName)prop.getTypeName();
            returnType = ClassName.get(
                    className.packageName(),
                    className.simpleName() + ImmutableType.PROP_EXPRESSION_SUFFIX
            );
        } else {
            if (prop.getTypeName().isPrimitive() && !prop.getTypeName().equals(TypeName.BOOLEAN)) {
                returnType = ParameterizedTypeName.get(
                        Constants.PROP_NUMERIC_EXPRESSION_CLASS_NAME,
                        prop.getTypeName().box()
                );
            } else if (context.isString(prop.getReturnType())) {
                returnType = Constants.PROP_STRING_EXPRESSION_CLASS_NAME;
            } else if (context.isNumber(prop.getReturnType())) {
                returnType = ParameterizedTypeName.get(
                        Constants.PROP_NUMERIC_EXPRESSION_CLASS_NAME,
                        prop.getTypeName().box()
                );
            } else if (context.isComparable(prop.getReturnType())) {
                returnType = ParameterizedTypeName.get(
                        Constants.PROP_COMPARABLE_EXPRESSION_CLASS_NAME,
                        prop.getTypeName().box()
                );
            } else {
                returnType = ParameterizedTypeName.get(
                        PROP_EXPRESSION_CLASS_NAME,
                        prop.getTypeName().box()
                );
            }
        }
        return returnType;
    }
}
