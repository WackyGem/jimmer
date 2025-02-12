package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.StringExpression;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

class UpperExpression extends AbstractExpression<String> implements StringExpressionImplementor {

    private final Expression<String> raw;

    UpperExpression(Expression<String> raw) {
        this.raw = raw;
    }

    @Override
    public int precedence() {
        return 0;
    }

    @Override
    public void accept(@NotNull AstVisitor visitor) {
        ((Ast)raw).accept(visitor);
    }

    @Override
    public void renderTo(@NotNull SqlBuilder builder) {
        builder.sql("upper(");
        ((Ast)raw).renderTo(builder);
        builder.sql(")");
    }

    @Override
    public StringExpression upper() {
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UpperExpression that = (UpperExpression) o;
        return raw.equals(that.raw);
    }

    @Override
    public int hashCode() {
        return Objects.hash(raw);
    }
}
