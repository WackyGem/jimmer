package org.babyfish.jimmer.sql.ast.impl.mutation;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.runtime.DraftSpi;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.runtime.Internal;
import org.babyfish.jimmer.sql.ast.PropExpression;
import org.babyfish.jimmer.sql.ast.impl.AstContext;
import org.babyfish.jimmer.sql.ast.impl.query.PaginationContextImpl;
import org.babyfish.jimmer.sql.ast.impl.query.Queries;
import org.babyfish.jimmer.sql.ast.impl.util.EmbeddableObjects;
import org.babyfish.jimmer.sql.meta.ColumnDefinition;
import org.babyfish.jimmer.sql.meta.DatabaseMetadata;
import org.babyfish.jimmer.sql.meta.SingleColumn;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.runtime.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

class ChildTableOperator {

    private final JSqlClient sqlClient;

    private final Connection con;

    private final ImmutableProp parentProp;

    private final ColumnDefinition fkDefinition;

    private final ColumnDefinition pkDefinition;

    private final Reader<Object> pkReader;

    private final boolean pessimisticLockRequired;

    private final MutationCache cache;

    private final MutationTrigger trigger;

    @SuppressWarnings("unchecked")
    public ChildTableOperator(
            JSqlClient sqlClient,
            Connection con,
            ImmutableProp parentProp,
            boolean pessimisticLockRequired,
            MutationCache cache,
            MutationTrigger trigger
    ) {
        this.sqlClient = sqlClient;
        this.con = con;
        this.parentProp = parentProp;
        this.fkDefinition = sqlClient.getDatabaseMetadata().getStorage(parentProp);
        this.pkDefinition = sqlClient.getDatabaseMetadata().getStorage(parentProp.getDeclaringType().getIdProp());
        this.pkReader = (Reader<Object>) sqlClient.getReader(parentProp.getDeclaringType().getIdProp());
        this.pessimisticLockRequired = pessimisticLockRequired;
        if (trigger != null) {
            this.cache = cache;
            this.trigger = trigger;
        } else {
            this.cache = null;
            this.trigger = null;
        }
    }

    public boolean exists(Object parentId, Collection<Object> retainedChildIds) {
        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        SqlBuilder subBuilder = builder.createChildBuilder();
        DatabaseMetadata metadata = sqlClient.getDatabaseMetadata();
        subBuilder
                .sql("select 1 from ")
                .sql(metadata.getTableName(parentProp.getDeclaringType()))
                .sql(" where ")
                .sql(metadata.<ColumnDefinition>getStorage(parentProp))
                .sql(" = ")
                .variable(parentId);
        if (!retainedChildIds.isEmpty()) {
            subBuilder
                    .sql(" and ")
                    .sql(metadata.<ColumnDefinition>getStorage(parentProp.getDeclaringType().getIdProp()))
                    .sql(" not in(");
            String separator = "";
            for (Object retainedChildId : retainedChildIds) {
                subBuilder.sql(separator);
                subBuilder.variable(retainedChildId);
                separator = ", ";
            }
            subBuilder.sql(")");
        }
        Tuple2<String, List<Object>> sqlResult = subBuilder.build(result -> {
            PaginationContextImpl ctx = new PaginationContextImpl(
                    1,
                    0,
                    result.get_1(),
                    result.get_2(),
                    false
            );
            sqlClient.getDialect().paginate(ctx);
            return ctx.build();
        });
        return sqlClient.getExecutor().execute(
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                ExecutionPurpose.MUTATE,
                ExecutorContext.create(sqlClient),
                null,
                stmt -> stmt.executeQuery().next()
        );
    }

    public int setParent(Object parentId, Collection<Object> childIds) {
        if (childIds.isEmpty()) {
            return 0;
        }
        if (trigger != null) {
            return setParentAndPrepareEvents(parentId, childIds);
        }
        return setParentImpl(parentId, childIds);
    }

    private int setParentAndPrepareEvents(Object parentId, Collection<Object> childIds) {
        assert cache != null && trigger != null;
        ImmutableType childType = parentProp.getDeclaringType();
        List<ImmutableSpi> childRows = cache.loadByIds(childType, childIds, con);
        Object currentIdOnly = makeIdOnly(parentProp.getTargetType(), parentId);
        int parentPropId = parentProp.getId();
        List<Object> newChildIds = null;
        for (ImmutableSpi childRow : childRows) {
            Object childId = idOf(childRow);
            Object oldParentId = idOf((ImmutableSpi) childRow.__get(parentPropId));
            Object changedRow = Internal.produce(childType, childRow, (draft) -> {
                ((DraftSpi)draft).__set(parentPropId, currentIdOnly);
            });
            if (Objects.equals(parentId, oldParentId)) {
                if (newChildIds == null) {
                    newChildIds = new ArrayList<>(childIds);
                }
                newChildIds.remove(childId);
            } else {
                trigger.modifyEntityTable(childRow, changedRow);
            }
        }
        if (newChildIds != null) {
            childIds = newChildIds;
        }
        if (childIds.isEmpty()) {
            return 0;
        }
        return setParentImpl(parentId, childIds);
    }

    private int setParentImpl(Object parentId, Collection<Object> childIds) {
        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        DatabaseMetadata metadata = sqlClient.getDatabaseMetadata();
        builder
                .sql("update ")
                .sql(metadata.getTableName(parentProp.getDeclaringType()))
                .sql(" set ");
        ColumnDefinition definition = metadata.getStorage(parentProp);
        if (definition instanceof SingleColumn) {
            builder.sql(((SingleColumn)definition).getName()).sql(" = ");
            if (parentId == null) {
                builder.sql("null");
            } else {
                builder.variable(parentId);
            }
        } else {
            boolean addComma = false;
            Object[] values = EmbeddableObjects.expand(
                    parentProp.getTargetType().getIdProp().getTargetType(),
                    parentId
            );
            int size = definition.size();
            for (int i = 0; i < size; i++) {
                if (addComma) {
                    builder.sql(", ");
                } else {
                    addComma = true;
                }
                builder.sql(definition.name(i)).sql(" = ");
                Object value = values[i];
                if (value == null) {
                    builder.sql("null");
                } else {
                    builder.variable(value);
                }
            }
        }
        builder.sql(" where ")
                .sql(null, pkDefinition, true)
                .sql(" in (");
        String separator = "";
        for (Object childId : childIds) {
            builder.sql(separator);
            separator = ", ";
            builder.variable(childId);
        }
        builder.sql(")");

        Tuple2<String, List<Object>> sqlResult = builder.build();
        return sqlClient.getExecutor().execute(
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                ExecutionPurpose.MUTATE,
                ExecutorContext.create(sqlClient),
                null,
                PreparedStatement::executeUpdate
        );
    }

    public int unsetParent(Object parentId, Collection<Object> retainedChildIds) {
        if (trigger != null) {
            return unsetParentAndPrepareEvents(Collections.singleton(parentId), retainedChildIds);
        }
        return unsetParentImpl(Collections.singleton(parentId), retainedChildIds);
    }

    public int unsetParents(Collection<Object> parentIds) {
        if (trigger != null) {
            return unsetParentAndPrepareEvents(parentIds, Collections.emptyList());
        }
        return unsetParentImpl(parentIds, Collections.emptyList());
    }

    @SuppressWarnings("unchecked")
    private int unsetParentAndPrepareEvents(Collection<Object> parentIds, Collection<Object> retainedChildIds) {
        assert trigger != null;
        int parentPropId = parentProp.getId();
        ImmutableType childType = parentProp.getDeclaringType();
        String parentIdPropName = parentProp.getTargetType().getIdProp().getName();
        String childIdPropName = childType.getIdProp().getName();
        int childIdPropId = childType.getIdProp().getId();
        List<ImmutableSpi> childRows = Internal.requiresNewDraftContext(ctx -> {
            List<ImmutableSpi> list = (List<ImmutableSpi>) Queries
                    .createQuery(sqlClient, parentProp.getDeclaringType(), ExecutionPurpose.MUTATE, true, (q, child) -> {
                        PropExpression<Object> parentIdExpr = child.join(parentProp.getName()).get(parentIdPropName);
                        if (parentIds.size() > 1) {
                            q.where(parentIdExpr.in(parentIds));
                        } else {
                            q.where(parentIdExpr.eq(parentIds.iterator().next()));
                        }
                        if (!retainedChildIds.isEmpty()) {
                            q.where(child.<PropExpression<Object>>get(childIdPropName).notIn(retainedChildIds));
                        }
                        return q.select(child);
                    })
                    .execute(con);
            return ctx.resolveList(list);
        });
        if (childRows.isEmpty()) {
            return 0;
        }
        List<Object> affectedChildIds = new ArrayList<>(childRows.size());
        for (ImmutableSpi childRow : childRows) {
            Object childId = childRow.__get(childIdPropId);
            affectedChildIds.add(childId);
            ImmutableSpi changedRow = (ImmutableSpi) Internal.produce(childType, childRow, draft -> {
                ((DraftSpi)draft).__set(parentPropId, null);
            });
            trigger.modifyEntityTable(childRow, changedRow);
        }
        return setParentImpl(null, affectedChildIds);
    }
    
    private int unsetParentImpl(Collection<Object> parentId, Collection<Object> retainedChildIds) {
        
        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        DatabaseMetadata metadata = sqlClient.getDatabaseMetadata();
        builder
                .sql("update ")
                .sql(metadata.getTableName(parentProp.getDeclaringType()))
                .sql(" set ");
        ColumnDefinition definition = metadata.getStorage(parentProp);
        if (definition instanceof SingleColumn) {
            builder.sql(((SingleColumn)definition).getName()).sql(" = null");
        } else {
            boolean addComma = false;
            for (String columName : definition) {
                if (addComma) {
                    builder.sql(", ");
                } else {
                    addComma = true;
                }
                builder.sql(columName).sql(" = null");
            }
        }
        addDetachConditions(builder, parentId, retainedChildIds);

        Tuple2<String, List<Object>> sqlResult = builder.build();
        return sqlClient.getExecutor().execute(
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                ExecutionPurpose.MUTATE,
                ExecutorContext.create(sqlClient),
                null,
                PreparedStatement::executeUpdate
        );
    }

    public List<Object> getDetachedChildIds(Object parentId, Collection<Object> retainedChildIds) {
        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        DatabaseMetadata metadata = sqlClient.getDatabaseMetadata();
        ImmutableProp idProp = parentProp.getDeclaringType().getIdProp();
        builder
                .sql("select ")
                .sql(metadata.<ColumnDefinition>getStorage(idProp))
                .sql(" from ")
                .sql(metadata.getTableName(parentProp.getDeclaringType()));
        addDetachConditions(builder, Collections.singleton(parentId), retainedChildIds);
        if (pessimisticLockRequired) {
            builder.sql(" for update");
        }

        Tuple2<String, List<Object>> sqlResult = builder.build();
        return sqlClient.getExecutor().execute(
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                ExecutionPurpose.MUTATE,
                ExecutorContext.create(sqlClient),
                null,
                stmt -> {
                    List<Object> list = new ArrayList<>();
                    try (ResultSet rs = stmt.executeQuery()) {
                        while (rs.next()) {
                            Object id = pkReader.read(rs, new Reader.Col());
                            if (id == null) {
                                throw new ExecutionException(
                                        "Cannot convert " + id + " to the type of " + idProp
                                );
                            }
                            list.add(id);
                        }
                    }
                    return list;
                }
        );
    }

    private void addDetachConditions(
            SqlBuilder builder,
            Collection<Object> parentIds,
            Collection<Object> retainedChildIds
    ) {
        builder
                .sql(" where ")
                .sql(null, fkDefinition, true);
        if (parentIds.size() == 1) {
            builder.sql(" = ").variable(parentIds.iterator().next());
        } else {
            builder.sql(" in (");
            boolean addComma = false;
            for (Object parentId : parentIds) {
                if (addComma) {
                    builder.sql(", ");
                } else {
                    addComma = true;
                }
                builder.variable(parentId);
            }
            builder.sql(")");
        }
        if (!retainedChildIds.isEmpty()) {
            builder
                    .sql(" and ")
                    .sql(null, pkDefinition, true)
                    .sql(" not in (");
            boolean addComma = false;
            for (Object retainedChildId : retainedChildIds) {
                if (addComma) {
                    builder.sql(", ");
                } else {
                    addComma = true;
                }
                builder.variable(retainedChildId);
            }
            builder.sql(")");
        }
    }

    private static ImmutableSpi makeIdOnly(ImmutableType type, Object id) {
        return (ImmutableSpi) Internal.produce(type, null, draft -> {
            ((DraftSpi)draft).__set(type.getIdProp().getId(), id);
        });
    }

    private static Object idOf(ImmutableSpi spi) {
        if (spi == null) {
            return null;
        }
        return spi.__get(spi.__type().getIdProp().getId());
    }
}
