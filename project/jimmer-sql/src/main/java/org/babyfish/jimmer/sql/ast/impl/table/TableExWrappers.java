package org.babyfish.jimmer.sql.ast.impl.table;

import org.babyfish.jimmer.sql.ast.table.TableEx;
import org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;
import org.babyfish.jimmer.util.OptionalValueCache;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.util.Arrays;

public class TableExWrappers {

    private static final OptionalValueCache<Class<?>, Constructor<?>> CACHE =
            new OptionalValueCache<>(TableExWrappers::createConstructor);

    private TableExWrappers() {}

    @SuppressWarnings("unchecked")
    public static <T extends TableEx<?>> T wrap(TableImplementor<?> table) {
        Class<?> javaClass = table.getImmutableType().getJavaClass();
        Constructor<?> constructor = CACHE.get(javaClass);
        if (constructor == null) {
            throw new IllegalStateException(
                    "No TableEx wrapper class for \"" + table.getImmutableType() +"\""
            );
        }
        try {
            return (T) constructor.newInstance(table);
        } catch (InstantiationException | IllegalAccessException ex) {
            throw new AssertionError(
                    "Internal bug: Can not create instance of " +
                            constructor.getDeclaringClass().getName()
            );
        } catch (InvocationTargetException ex) {
            Throwable target = ex.getTargetException();
            if (target instanceof RuntimeException) {
                throw (RuntimeException)target;
            }
            if (target instanceof Error) {
                throw (Error)target;
            }
            throw new AssertionError(
                    "Internal bug: Can not create instance of " +
                            constructor.getDeclaringClass().getName()
            );
        }
    }

    private static Constructor<?> createConstructor(Class<?> javaClass) {
        Class<?> tableClass;
        try {
            tableClass = Class.forName(javaClass.getName() + "Table");
        } catch (ClassNotFoundException ex) {
            return null;
        }
        if (!AbstractTableWrapper.class.isAssignableFrom(tableClass)) {
            return null;
        }
        Class<?> sqtClass = Arrays.stream(tableClass.getClasses())
                .filter(it -> it.getSimpleName().equals("Ex"))
                .findFirst()
                .orElse(null);
        if (sqtClass == null ||
                !Modifier.isStatic(sqtClass.getModifiers()) ||
                !AbstractTableWrapper.class.isAssignableFrom(sqtClass)) {
            return null;
        }
        try {
            return sqtClass.getConstructor(TableEx.class);
        } catch (NoSuchMethodException ex) {
            return null;
        }
    }
}
