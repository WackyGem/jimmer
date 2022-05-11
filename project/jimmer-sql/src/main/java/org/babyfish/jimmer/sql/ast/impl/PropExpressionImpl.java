package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.sql.Column;
import org.babyfish.jimmer.sql.ast.ComparableExpression;
import org.babyfish.jimmer.sql.ast.NumericExpression;
import org.babyfish.jimmer.sql.ast.PropExpression;
import org.babyfish.jimmer.sql.ast.StringExpression;
import org.babyfish.jimmer.sql.ast.impl.table.TableImplementor;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;

public class PropExpressionImpl<T>
        extends AbstractExpression<T>
        implements PropExpression<T> {

    private TableImplementor<?> table;

    private ImmutableProp prop;

    public static PropExpressionImpl<?> of(TableImplementor<?> table, ImmutableProp prop) {
        Class<?> elementClass = prop.getElementClass();
        if (String.class.isAssignableFrom(elementClass)) {
            return new StrImpl(table, prop);
        }
        if (elementClass.isPrimitive() || Number.class.isAssignableFrom(elementClass)) {
            return new NumImpl(table, prop);
        }
        if (Comparable.class.isAssignableFrom(elementClass)) {
            return new CmpImpl<>(table, prop);
        }
        return new PropExpressionImpl<>(table, prop);
    }

    PropExpressionImpl(TableImplementor<?> table, ImmutableProp prop) {
        if (prop.isAssociation()) {
            throw new IllegalArgumentException("prop '" + prop + "' cannot be association property");
        }
        if (!(prop.getStorage() instanceof Column)) {
            throw new IllegalArgumentException("prop is not selectable");
        }
        this.table = table;
        this.prop = prop;
    }

    public TableImplementor<?> getTable() {
        return table;
    }

    public ImmutableProp getProp() {
        return prop;
    }

    @Override
    public void accept(AstVisitor visitor) {
        visitor.visitTableReference(table, prop);
    }

    @Override
    public void renderTo(SqlBuilder builder) {
        table.renderSelection(prop, builder);
    }

    @Override
    public int precedence() {
        return 0;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Class<T> getType() {
        return (Class<T>) prop.getElementClass();
    }

    private static class StrImpl
            extends PropExpressionImpl<String>
            implements PropExpression.Str, StringExpressionImplementor {

        StrImpl(TableImplementor<?> table, ImmutableProp prop) {
            super(table, prop);
        }

        @Override
        public StringExpression coalesce(String defaultValue) {
            return StringExpressionImplementor.super.coalesce(defaultValue);
        }

        @Override
        public CoalesceBuilder.Str coalesceBuilder() {
            return StringExpressionImplementor.super.coalesceBuilder();
        }

        @Override
        public TableImplementor<?> getTable() {
            return super.getTable();
        }
    }

    private static class NumImpl<N extends Number>
            extends PropExpressionImpl<N>
            implements PropExpression.Num<N>, NumberExpressionImplementor<N> {

        NumImpl(TableImplementor<?> table, ImmutableProp prop) {
            super(table, prop);
        }

        @Override
        public NumericExpression<N> coalesce(N defaultValue) {
            return NumberExpressionImplementor.super.coalesce(defaultValue);
        }

        @Override
        public CoalesceBuilder.Num<N> coalesceBuilder() {
            return NumberExpressionImplementor.super.coalesceBuilder();
        }
    }

    private static class CmpImpl<T extends Comparable<T>>
            extends PropExpressionImpl<T>
            implements PropExpression.Cmp<T>, ComparableExpressionImplementor<T> {

        CmpImpl(TableImplementor<?> table, ImmutableProp prop) {
            super(table, prop);
        }

        @Override
        public ComparableExpression<T> coalesce(T defaultValue) {
            return ComparableExpressionImplementor.super.coalesce(defaultValue);
        }

        @Override
        public CoalesceBuilder.Cmp<T> coalesceBuilder() {
            return ComparableExpressionImplementor.super.coalesceBuilder();
        }
    }
}
