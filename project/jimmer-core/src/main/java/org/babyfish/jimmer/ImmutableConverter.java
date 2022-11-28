package org.babyfish.jimmer;

import org.babyfish.jimmer.impl.converter.ImmutableConverterBuilderImpl;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.TypedProp;

import java.util.Arrays;
import java.util.function.BiConsumer;
import java.util.function.Function;

/**
 * Only for java, kotlin developers should use `KImmutableConverter`
 * @param <T>
 * @param <Static>
 */
public interface ImmutableConverter<T, Static> {

    T convert(Static staticObj);

    static <T, Static> Builder<T, Static> newBuilder(Class<T> immutableType, Class<Static> staticType) {
        return new ImmutableConverterBuilderImpl<>(immutableType, staticType);
    }

    interface Builder<T, Static> {

        default Builder<T, Static> map(TypedProp<T, ?> prop) {
            return map(prop.unwrap(), prop.unwrap().getName(), null);
        }

        default Builder<T, Static> map(ImmutableProp prop) {
            return map(prop, prop.getName(), null);
        }

        default Builder<T, Static> map(TypedProp<T, ?> prop, String staticPropName) {
            return map(prop.unwrap(), staticPropName, null);
        }

        default Builder<T, Static> map(ImmutableProp prop, String staticPropName) {
            return map(prop, staticPropName, null);
        }

        default Builder<T, Static> map(
                TypedProp<T, Static> prop,
                Function<Object, Object> valueConverter
        ) {
            return map(prop.unwrap(), prop.unwrap().getName(), valueConverter);
        }

        default Builder<T, Static> map(
                ImmutableProp prop,
                Function<Object, Object> valueConverter
        ) {
            return map(prop, prop.getName(), valueConverter);
        }

        default Builder<T, Static> map(
                TypedProp<T, ?> prop,
                String staticPropName,
                Function<Object, Object> valueConverter
        ) {
            return map(prop.unwrap(), staticPropName, valueConverter);
        }

        Builder<T, Static> map(
                ImmutableProp prop,
                String staticPropName,
                Function<Object, Object> valueConverter
        );

        default Builder<T, Static> mapList(
                TypedProp.Multiple<T, ?> prop,
                Function<Object, Object> elementConverter
        ) {
            return mapList(prop.unwrap(), prop.unwrap().getName(), elementConverter);
        }

        default Builder<T, Static> mapList(
                ImmutableProp prop,
                Function<Object, Object> elementConverter
        ) {
            return mapList(prop, prop.getName(), elementConverter);
        }

        default Builder<T, Static> mapList(
                TypedProp.Multiple<T, ?> prop,
                String staticPropName,
                Function<Object, Object> elementConverter
        ) {
            return mapList(prop.unwrap(), staticPropName, elementConverter);
        }

        Builder<T, Static> mapList(
                ImmutableProp prop,
                String staticPropName,
                Function<Object, Object> elementConverter
        );

        default Builder<T, Static> unmap(TypedProp<T, ?> ... props) {
            return unmap(Arrays.stream(props).map(TypedProp::unwrap).toArray(ImmutableProp[]::new));
        }

        Builder<T, Static> unmap(ImmutableProp ... props);

        Builder<T, Static> autoMapOtherScalars();

        Builder<T, Static> setDraftModifier(BiConsumer<Draft, Static> modifier);

        ImmutableConverter<T, Static> build();
    }
}
