package org.babyfish.jimmer.sql.ast.impl.mutation;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.LogicalDeletedInfo;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.runtime.DraftSpi;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.runtime.Internal;
import org.babyfish.jimmer.sql.LogicalDeleted;
import org.babyfish.jimmer.sql.ast.impl.AstContext;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.babyfish.jimmer.sql.meta.ColumnDefinition;
import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.ast.mutation.AffectedTable;
import org.babyfish.jimmer.sql.ast.mutation.DeleteResult;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.meta.SingleColumn;
import org.babyfish.jimmer.sql.runtime.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

public class Deleter {

    private final DeleteCommandImpl.Data data;

    private final DeleteCommandImpl.Data cascadeData;

    private final Connection con;

    private final MutationCache cache;

    private final MutationTrigger trigger;

    private final Map<AffectedTable, Integer> affectedRowCountMap;

    private Map<ImmutableType, Set<Object>> preHandleIdInputMap =
            new LinkedHashMap<>();

    private Map<ImmutableType, Set<Object>> postHandleIdInputMap =
            new LinkedHashMap<>();

    private final Map<String, Deleter> childDeleterMap =
            new LinkedHashMap<>();

    Deleter(
            DeleteCommandImpl.Data data,
            Connection con,
            MutationCache cache,
            MutationTrigger trigger,
            Map<AffectedTable, Integer> affectedRowCountMap
    ) {
        this.data = data;
        this.cascadeData = new DeleteCommandImpl.Data(data);
        this.cascadeData.setMode(DeleteMode.PHYSICAL);
        this.con = con;
        if (trigger != null) {
            this.cache = cache;
            this.trigger = trigger;
        } else {
            this.cache = cache;
            this.trigger = null;
        }
        this.affectedRowCountMap = affectedRowCountMap;
    }

    public void addPreHandleInput(ImmutableType type, Collection<?> ids) {
        Set<Object> idSet = preHandleIdInputMap.computeIfAbsent(
                type,
                t -> new LinkedHashSet<>()
        );
        for (Object id : ids) {
            if (id != null) {
                idSet.add(id);
            }
        }
    }

    private void addPostHandleInput(ImmutableType type, Collection<?> ids) {
        Set<Object> idSet = postHandleIdInputMap.computeIfAbsent(
                type,
                t -> new LinkedHashSet<>()
        );
        for (Object id : ids) {
            if (id != null) {
                idSet.add(id);
            }
        }
    }

    private void addOutput(AffectedTable affectTable, int affectedRowCount) {
        affectedRowCountMap.merge(affectTable, affectedRowCount, Integer::sum);
    }

    public DeleteResult execute() {
        return execute(true);
    }

    public DeleteResult execute(boolean submit) {
        while (!preHandleIdInputMap.isEmpty() || !postHandleIdInputMap.isEmpty()) {
            while (!preHandleIdInputMap.isEmpty()) {
                preHandle();
            }
            postHandle();
        }
        MutationTrigger trigger = this.trigger;
        if (!submit || trigger == null) {
            return new DeleteResult(affectedRowCountMap);
        }
        trigger.submit(data.getSqlClient(), con);
        return new DeleteResult(affectedRowCountMap);
    }

    private void preHandle() {
        Map<ImmutableType, Set<Object>> idMultiMap = preHandleIdInputMap;
        preHandleIdInputMap = new LinkedHashMap<>();
        for (Map.Entry<ImmutableType, Set<Object>> e : idMultiMap.entrySet()) {
            preHandle(e.getKey(), e.getValue());
        }
    }

    private void preHandle(ImmutableType immutableType, Collection<Object> ids) {
        if (ids.isEmpty()) {
            return;
        }
        if (logical(immutableType)) {
            addPostHandleInput(immutableType, ids);
            return;
        }

        for (ImmutableProp prop : immutableType.getProps().values()) {
            MiddleTableOperator middleTableOperator = MiddleTableOperator.tryGet(
                    data.getSqlClient(),
                    con,
                    prop,
                    trigger
            );
            if (middleTableOperator != null) {
                int affectedRowCount = middleTableOperator.removeBySourceIds(ids);
                addOutput(AffectedTable.of(prop), affectedRowCount);
            } else {
                ImmutableProp mappedByProp = prop.getMappedBy();
                if (mappedByProp != null &&
                        mappedByProp.isReference(TargetLevel.PERSISTENT) &&
                        mappedByProp.getStorage() instanceof ColumnDefinition
                ) {
                    DissociateAction dissociateAction = data.getDissociateAction(mappedByProp);
                    if (dissociateAction == DissociateAction.SET_NULL) {
                        ChildTableOperator childTableOperator = new ChildTableOperator(
                                data.getSqlClient(),
                                con,
                                mappedByProp,
                                false,
                                cache,
                                trigger
                        );
                        int affectedRowCount = childTableOperator.unsetParents(ids);
                        addOutput(AffectedTable.of(prop.getTargetType()), affectedRowCount);
                    } else {
                        tryDeleteFromChildTable(prop, ids);
                    }
                }
            }
        }
        addPostHandleInput(immutableType, ids);
    }

    @SuppressWarnings("unchecked")
    private void tryDeleteFromChildTable(ImmutableProp prop, Collection<?> ids) {
        ImmutableProp manyToOneProp = prop.getMappedBy();
        ImmutableType childType = manyToOneProp.getDeclaringType();
        ColumnDefinition definition = manyToOneProp.getStorage();
        SqlBuilder builder = new SqlBuilder(new AstContext(data.getSqlClient()));
        Reader<Object> reader = (Reader<Object>) data.getSqlClient().getReader(childType.getIdProp());
        builder
                .sql("select ")
                .sql(childType.getIdProp().<ColumnDefinition>getStorage())
                .sql(" from ")
                .sql(childType.getTableName())
                .sql(" where ")
                .sql(null, definition, true)
                .sql(" in (");
        String separator = "";
        for (Object id : ids) {
            builder.sql(separator);
            separator = ", ";
            builder.variable(id);
        }
        builder.sql(")");
        Tuple2<String, List<Object>> sqlResult = builder.build();
        List<Object> childIds = data
                .getSqlClient()
                .getExecutor()
                .execute(
                        con,
                        sqlResult.get_1(),
                        sqlResult.get_2(),
                        ExecutionPurpose.DELETE,
                        ExecutorContext.create(data.getSqlClient()),
                        null,
                        stmt -> {
                            List<Object> values = new ArrayList<>();
                            try (ResultSet rs = stmt.executeQuery()) {
                                while (rs.next()) {
                                    values.add(reader.read(rs, new Reader.Col()));
                                }
                            }
                            return values;
                        }
                );
        if (!childIds.isEmpty()) {
            if (data.getDissociateAction(manyToOneProp) != DissociateAction.DELETE) {
                throw new ExecutionException(
                        "Cannot delete entities whose type are \"" +
                                manyToOneProp.getTargetType().getJavaClass().getName() +
                                "\" because there are some child entities whose type are \"" +
                                manyToOneProp.getDeclaringType().getJavaClass().getName() +
                                "\", these child entities use the association property \"" +
                                manyToOneProp +
                                "\" to reference current entities."
                );
            }
            Deleter childDeleter = childDeleterMap.computeIfAbsent(
                    prop.getName(),
                    it -> new Deleter(cascadeData, con, cache, trigger, affectedRowCountMap)
            );
            childDeleter.addPreHandleInput(childType, childIds);
            childDeleter.preHandle();
        }
    }

    private void postHandle() {
        childDeleterMap.values().forEach(Deleter::postHandle);
        Map<ImmutableType, Set<Object>> idMultiMap = postHandleIdInputMap;
        postHandleIdInputMap = new LinkedHashMap<>();
        for (Map.Entry<ImmutableType, Set<Object>> e : idMultiMap.entrySet()) {
            if (logical(e.getKey())) {
                logicallyDeleteImpl(e.getKey(), e.getValue());
            } else {
                deleteImpl(e.getKey(), e.getValue());
            }
        }
    }

    private void logicallyDeleteImpl(ImmutableType type, Collection<Object> ids) {

        if (ids.isEmpty()) {
            return;
        }

        LogicalDeletedInfo info = type.getLogicalDeletedInfo();
        assert info != null;
        ImmutableProp prop = info.getProp();
        Object deletedValue = info.getValue();
        ids = prepareLogicEvents(type, ids, prop.getId(), deletedValue);
        if (ids.isEmpty()) {
            return;
        }

        ColumnDefinition definition = type.getIdProp().getStorage();
        SqlBuilder builder = new SqlBuilder(new AstContext(data.getSqlClient()));
        builder.sql("update ");
        builder.sql(type.getTableName());
        builder.sql(" set ");
        builder.sql(info.getProp().<SingleColumn>getStorage().name(0));
        builder.sql(" = ");
        if (deletedValue != null) {
            builder.variable(deletedValue);
        } else {
            builder.nullVariable(prop.getElementClass());
        }
        builder.sql(" where ");
        builder.sql(null, definition, true);
        builder.sql(" in (");
        String separator = "";
        for (Object id : ids) {
            builder.sql(separator);
            separator = ", ";
            builder.variable(id);
        }
        builder.sql(")");
        Tuple2<String, List<Object>> sqlResult = builder.build();
        int affectedRowCount = data
                .getSqlClient()
                .getExecutor()
                .execute(
                        con,
                        sqlResult.get_1(),
                        sqlResult.get_2(),
                        ExecutionPurpose.DELETE,
                        ExecutorContext.create(data.getSqlClient()),
                        null,
                        PreparedStatement::executeUpdate
                );
        addOutput(AffectedTable.of(type), affectedRowCount);
    }

    private void deleteImpl(ImmutableType type, Collection<Object> ids) {

        if (ids.isEmpty()) {
            return;
        }
        ids = prepareEvents(type, ids);
        if (ids.isEmpty()) {
            return;
        }

        ColumnDefinition definition = type.getIdProp().getStorage();
        SqlBuilder builder = new SqlBuilder(new AstContext(data.getSqlClient()));
        builder.sql("delete from ");
        builder.sql(type.getTableName());
        builder.sql(" where ");
        builder.sql(null, definition, true);
        builder.sql(" in (");
        String separator = "";
        for (Object id : ids) {
            builder.sql(separator);
            separator = ", ";
            builder.variable(id);
        }
        builder.sql(")");
        Tuple2<String, List<Object>> sqlResult = builder.build();
        int affectedRowCount = data
                .getSqlClient()
                .getExecutor()
                .execute(
                        con,
                        sqlResult.get_1(),
                        sqlResult.get_2(),
                        ExecutionPurpose.DELETE,
                        ExecutorContext.create(data.getSqlClient()),
                        null,
                        PreparedStatement::executeUpdate
                );
        addOutput(AffectedTable.of(type), affectedRowCount);
    }

    private Collection<Object> prepareLogicEvents(
            ImmutableType type,
            Collection<Object> ids,
            int propId,
            Object deletedValue
    ) {
        if (ids.isEmpty()) {
            return ids;
        }
        MutationTrigger trigger = this.trigger;
        if (trigger == null) {
            return ids;
        }
        int idPropId = type.getIdProp().getId();
        List<ImmutableSpi> rows = cache.loadByIds(type, ids, con);
        Iterator<ImmutableSpi> itr = rows.iterator();
        List<Object> changedIds = new ArrayList<>();
        while (itr.hasNext()) {
            ImmutableSpi row = itr.next();
            if (Objects.equals(row.__get(propId), deletedValue)) {
                itr.remove();
            } else {
                trigger.modifyEntityTable(
                        row,
                        Internal.produce(type, row, draft -> {
                            ((DraftSpi)draft).__set(propId, deletedValue);
                        })
                );
                changedIds.add(row.__get(idPropId));
            }
        }
        return changedIds;
    }

    private Collection<Object> prepareEvents(ImmutableType type, Collection<Object> ids) {
        MutationTrigger trigger = this.trigger;
        if (trigger == null) {
            return ids;
        }
        List<ImmutableSpi> rows = cache.loadByIds(type, ids, con);
        for (ImmutableSpi row : rows) {
            trigger.modifyEntityTable(row, null);
        }
        if (rows.size() == ids.size()) {
            return ids;
        }
        int idPropId = type.getIdProp().getId();
        List<Object> rowIds = new ArrayList<>(ids.size());
        for (ImmutableSpi row : rows) {
            rowIds.add(row.__get(idPropId));
        }
        return rowIds;
    }

    private boolean logical(ImmutableType type) {
        DeleteMode mode = data.getMode();
        if (mode == DeleteMode.PHYSICAL) {
            return false;
        }
        boolean hasLogicalInfo = type.getLogicalDeletedInfo() != null;
        if (hasLogicalInfo && mode == DeleteMode.LOGICAL) {
            throw new ExecutionException(
                    "The data of \"" +
                            type +
                            "\" cannot be logically deleted, because there is no property decorated by `@" +
                            LogicalDeleted.class.getName() +
                            "` in that type"
            );
        }
        return hasLogicalInfo;
    }
}
