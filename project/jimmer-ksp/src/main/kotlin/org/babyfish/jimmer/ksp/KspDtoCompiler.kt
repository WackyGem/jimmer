package org.babyfish.jimmer.ksp

import org.babyfish.jimmer.dto.compiler.DtoCompiler
import org.babyfish.jimmer.ksp.meta.ImmutableProp
import org.babyfish.jimmer.ksp.meta.ImmutableType

class KspDtoCompiler(
    private val immutableType: ImmutableType
) : DtoCompiler<ImmutableType, ImmutableProp>(immutableType) {

    override fun getSuperTypes(baseType: ImmutableType): Collection<ImmutableType> =
        baseType.superTypes

    override fun getDeclaredProps(baseType: ImmutableType): Map<String, ImmutableProp> =
        baseType.declaredProperties

    override fun getProps(baseType: ImmutableType): Map<String, ImmutableProp> =
        baseType.properties

    override fun getTargetType(baseProp: ImmutableProp): ImmutableType? =
        baseProp.targetType
}