package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.Input;
import org.babyfish.jimmer.Static;
import org.babyfish.jimmer.jackson.Converter;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TypedProp;
import org.babyfish.jimmer.runtime.DraftSpi;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.runtime.Internal;
import org.babyfish.jimmer.sql.Entities;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.impl.mutation.BatchEntitySaveCommandImpl;
import org.babyfish.jimmer.sql.ast.impl.mutation.DeleteCommandImpl;
import org.babyfish.jimmer.sql.ast.impl.mutation.SimpleEntitySaveCommandImpl;
import org.babyfish.jimmer.sql.ast.impl.query.MutableRootQueryImpl;
import org.babyfish.jimmer.sql.ast.impl.query.Queries;
import org.babyfish.jimmer.sql.ast.impl.table.FetcherSelectionImpl;
import org.babyfish.jimmer.sql.ast.mutation.*;
import org.babyfish.jimmer.sql.ast.query.ConfigurableRootQuery;
import org.babyfish.jimmer.sql.ast.query.Example;
import org.babyfish.jimmer.sql.ast.query.Order;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.cache.Cache;
import org.babyfish.jimmer.sql.cache.CacheEnvironment;
import org.babyfish.jimmer.sql.cache.CacheLoader;
import org.babyfish.jimmer.sql.fetcher.Fetcher;
import org.babyfish.jimmer.sql.fetcher.StaticMetadata;
import org.babyfish.jimmer.sql.fetcher.impl.FetcherSelection;
import org.babyfish.jimmer.sql.fetcher.impl.Fetchers;
import org.babyfish.jimmer.sql.runtime.Converters;
import org.babyfish.jimmer.sql.runtime.ExecutionPurpose;
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor;
import org.jetbrains.annotations.Nullable;

import java.sql.Connection;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class EntitiesImpl implements Entities {

    private final JSqlClientImplementor sqlClient;

    private final boolean forUpdate;

    private final Connection con;

    private final ExecutionPurpose purpose;

    public EntitiesImpl(JSqlClientImplementor sqlClient) {
        this(sqlClient, false, null, ExecutionPurpose.QUERY);
    }

    public EntitiesImpl(JSqlClientImplementor sqlClient, boolean forUpdate, Connection con, ExecutionPurpose purpose) {
        this.sqlClient = sqlClient;
        this.forUpdate = forUpdate;
        this.con = con;
        this.purpose = purpose;
    }

    public JSqlClientImplementor getSqlClient() {
        return sqlClient;
    }

    public Connection getCon() {
        return con;
    }

    public EntitiesImpl forSqlClient(JSqlClientImplementor sqlClient) {
        if (this.sqlClient == sqlClient) {
            return this;
        }
        return new EntitiesImpl(sqlClient, forUpdate, con, purpose);
    }

    @Override
    public Entities forUpdate() {
        if (forUpdate) {
            return this;
        }
        return new EntitiesImpl(sqlClient, true, con, purpose);
    }

    @Override
    public Entities forConnection(Connection con) {
        if (this.con == con) {
            return this;
        }
        return new EntitiesImpl(sqlClient, forUpdate, con, purpose);
    }

    public Entities forLoader() {
        if (purpose == ExecutionPurpose.LOAD) {
            return this;
        }
        return new EntitiesImpl(sqlClient, forUpdate, con, ExecutionPurpose.LOAD);
    }

    public Entities forExporter() {
        if (purpose == ExecutionPurpose.EXPORT) {
            return this;
        }
        return new EntitiesImpl(sqlClient, forUpdate, con, ExecutionPurpose.EXPORT);
    }

    @Override
    public <E> E findById(Class<E> type, Object id) {
        if (con != null) {
            return findById(type, id, con);
        }
        return sqlClient.getConnectionManager().execute(con ->
                findById(type, id, con)
        );
    }

    @Override
    public <E> List<E> findByIds(Class<E> type, Collection<?> ids) {
        if (con != null) {
            return findByIds(type, ids, con);
        }
        return sqlClient.getConnectionManager().execute(con ->
                findByIds(type, ids, con)
        );
    }

    @Override
    public <ID, E> Map<ID, E> findMapByIds(Class<E> type, Collection<ID> ids) {
        if (con != null) {
            return findMapByIds(type, ids, con);
        }
        return sqlClient.getConnectionManager().execute(con ->
                findMapByIds(type, ids, con)
        );
    }

    @Override
    public <E> E findById(Fetcher<E> fetcher, Object id) {
        if (con != null) {
            return findById(fetcher, id, con);
        }
        return sqlClient.getConnectionManager().execute(con ->
                findById(fetcher, id, con)
        );
    }

    @Override
    public <E> List<E> findByIds(Fetcher<E> fetcher, Collection<?> ids) {
        if (con != null) {
            return findByIds(fetcher, ids, con);
        }
        return sqlClient.getConnectionManager().execute(con ->
                findByIds(fetcher, ids, con)
        );
    }

    @Override
    public <ID, E> Map<ID, E> findMapByIds(Fetcher<E> fetcher, Collection<ID> ids) {
        if (con != null) {
            return findMapByIds(fetcher, ids, con);
        }
        return sqlClient.getConnectionManager().execute(con ->
                findMapByIds(fetcher, ids, con)
        );
    }

    private <E> E findById(Class<E> type, Object id, Connection con) {
        if (id instanceof Collection<?>) {
            throw new IllegalArgumentException(
                    "id cannot be collection, do you want to call 'findByIds'?"
            );
        }
        List<E> rows = findByIds(type, null, Collections.singleton(id), con);
        return rows.isEmpty() ? null : rows.get(0);
    }

    private <E> List<E> findByIds(Class<E> type, Collection<?> ids, Connection con) {
        return findByIds(type, null, ids, con);
    }

    @SuppressWarnings("unchecked")
    private <ID, E> Map<ID, E> findMapByIds(Class<E> type, Collection<ID> ids, Connection con) {
        ImmutableProp idProp = ImmutableType.get(type).getIdProp();
        return this.findByIds(type, null, ids, con)
                .stream()
                .filter(Objects::nonNull)
                .collect(
                        Collectors.toMap(
                                it -> (ID)((ImmutableSpi) it).__get(idProp.getId()),
                                Function.identity(),
                                (a, b) -> { throw new IllegalStateException("Objects with same id"); },
                                LinkedHashMap::new
                        )
                );
    }

    private <E> E findById(Fetcher<E> fetcher, Object id, Connection con) {
        if (id instanceof Collection<?>) {
            throw new IllegalArgumentException(
                    "id cannot be collection, do you want to call 'findByIds'?"
            );
        }
        List<E> rows = findByIds(fetcher.getJavaClass(), fetcher, Collections.singleton(id), con);
        return rows.isEmpty() ? null : rows.get(0);
    }

    private <E> List<E> findByIds(Fetcher<E> fetcher, Collection<?> ids, Connection con) {
        return findByIds(fetcher.getJavaClass(), fetcher, ids, con);
    }

    @SuppressWarnings("unchecked")
    private <ID, E> Map<ID, E> findMapByIds(Fetcher<E> fetcher, Collection<ID> ids, Connection con) {
        ImmutableProp idProp = ImmutableType.get(fetcher.getJavaClass()).getIdProp();
        return this.findByIds(fetcher.getJavaClass(), fetcher, ids, con)
                .stream()
                .filter(Objects::nonNull)
                .collect(
                        Collectors.toMap(
                                it -> (ID)((ImmutableSpi) it).__get(idProp.getId()),
                                Function.identity(),
                                (a, b) -> { throw new IllegalStateException("Objects with same id"); },
                                LinkedHashMap::new
                        )
                );
    }

    @SuppressWarnings("unchecked")
    private <E> List<E> findByIds(
            Class<E> type,
            Fetcher<E> fetcher,
            Collection<?> ids,
            Connection con
    ) {
        if (ids == null || ids.isEmpty()) {
            return Collections.emptyList();
        }

        if (Static.class.isAssignableFrom(type)) {
            return (List<E>) findByIds(StaticMetadata.of((Class<? extends Static<Object>>) type), ids, con);
        }

        Set<Object> distinctIds;
        if (ids instanceof Set<?>) {
            distinctIds = (Set<Object>) ids;
        } else {
            distinctIds = new LinkedHashSet<>(ids);
        }

        ImmutableType immutableType = ImmutableType.get(type);
        Class<?> idClass = immutableType.getIdProp().getElementClass();
        for (Object id : distinctIds) {
            if (Converters.tryConvert(id, idClass) == null) {
                throw new IllegalArgumentException(
                        "The type of \"" +
                                immutableType.getIdProp() +
                                "\" must be \"" +
                                idClass.getName() +
                                "\""
                );
            }
        }
        Cache<Object, E> cache = sqlClient.getCaches().getObjectCache(immutableType);
        if (cache != null) {
            List<E> entities = new ArrayList<>(
                    cache.getAll(
                            distinctIds,
                            new CacheEnvironment<>(
                                    sqlClient,
                                    con,
                                    CacheLoader.objectLoader(
                                            sqlClient,
                                            con,
                                            (Class<E>) immutableType.getJavaClass()
                                    ),
                                    true
                            )
                    ).values()
            );
            if (fetcher != null && !entities.isEmpty()) {
                boolean needUnload = false;
                for (ImmutableSpi spi : (List<ImmutableSpi>) entities) {
                    for (ImmutableProp prop : immutableType.getProps().values()) {
                        if (spi.__isLoaded(prop.getId()) && !fetcher.getFieldMap().containsKey(prop.getName())) {
                            needUnload = true;
                            break;
                        }
                    }
                }
                if (needUnload) {
                    ListIterator<ImmutableSpi> itr = (ListIterator<ImmutableSpi>) entities.listIterator();
                    while (itr.hasNext()) {
                        ImmutableSpi spi = itr.next();
                        itr.set(
                                (ImmutableSpi) Internal.produce(immutableType, spi, draft -> {
                                    for (ImmutableProp prop : immutableType.getProps().values()) {
                                        if (!prop.isView() &&
                                                spi.__isLoaded(prop.getId()) &&
                                                !fetcher.getFieldMap().containsKey(prop.getName())) {
                                            ((DraftSpi) draft).__unload(prop.getId());
                                        }
                                    }
                                })
                        );
                    }
                }
                Fetchers.fetch(
                        sqlClient,
                        con,
                        Collections.singletonList(
                                new FetcherSelection<E>() {

                                    @Override
                                    public Fetcher<?> getFetcher() {
                                        return fetcher;
                                    }

                                    @Override
                                    public @Nullable Function<?, E> getConverter() {
                                        return null;
                                    }
                                }
                        ),
                        entities
                );
            }
            return entities;
        }
        ConfigurableRootQuery<?, E> query = Queries.createQuery(
                sqlClient, immutableType, purpose, true, (q, table) -> {
                    Expression<Object> idProp = table.get(immutableType.getIdProp().getName());
                    if (distinctIds.size() == 1) {
                        q.where(idProp.eq(distinctIds.iterator().next()));
                    } else {
                        q.where(idProp.in(distinctIds));
                    }
                    return q.select(((Table<E>) table).fetch(fetcher));
                }
        );
        if (forUpdate) {
            query = query.forUpdate(true);
        }
        return query.execute(con);
    }

    @SuppressWarnings("unchecked")
    private <E> List<E> findByIds(
            StaticMetadata<?, E> metadata,
            Collection<?> ids,
            Connection con
    ) {
        Set<Object> distinctIds;
        if (ids instanceof Set<?>) {
            distinctIds = (Set<Object>) ids;
        } else {
            distinctIds = new LinkedHashSet<>(ids);
        }

        Fetcher<?> fetcher = metadata.getFetcher();
        Function<?, E> converter = metadata.getConverter();
        ImmutableType immutableType = metadata.getFetcher().getImmutableType();
        Class<?> idClass = immutableType.getIdProp().getElementClass();
        for (Object id : distinctIds) {
            if (Converters.tryConvert(id, idClass) == null) {
                throw new IllegalArgumentException(
                        "The type of \"" +
                                immutableType.getIdProp() +
                                "\" must be \"" +
                                idClass.getName() +
                                "\""
                );
            }
        }
        Cache<Object, E> cache = sqlClient.getCaches().getObjectCache(immutableType);
        if (cache != null) {
            List<E> entities = new ArrayList<>(
                    cache.getAll(
                            distinctIds,
                            new CacheEnvironment<>(
                                    sqlClient,
                                    con,
                                    CacheLoader.objectLoader(
                                            sqlClient,
                                            con,
                                            (Class<E>) immutableType.getJavaClass()
                                    ),
                                    true
                            )
                    ).values()
            );
            if (!entities.isEmpty()) {
                boolean needUnload = false;
                for (ImmutableSpi spi : (List<ImmutableSpi>) entities) {
                    for (ImmutableProp prop : immutableType.getProps().values()) {
                        if (spi.__isLoaded(prop.getId()) && !fetcher.getFieldMap().containsKey(prop.getName())) {
                            needUnload = true;
                            break;
                        }
                    }
                }
                if (needUnload) {
                    ListIterator<ImmutableSpi> itr = (ListIterator<ImmutableSpi>) entities.listIterator();
                    while (itr.hasNext()) {
                        ImmutableSpi spi = itr.next();
                        itr.set(
                                (ImmutableSpi) Internal.produce(immutableType, spi, draft -> {
                                    for (ImmutableProp prop : immutableType.getProps().values()) {
                                        if (!prop.isView() &&
                                                spi.__isLoaded(prop.getId()) &&
                                                !fetcher.getFieldMap().containsKey(prop.getName())) {
                                            ((DraftSpi) draft).__unload(prop.getId());
                                        }
                                    }
                                })
                        );
                    }
                }
                Fetchers.fetch(
                        sqlClient,
                        con,
                        Collections.singletonList(
                                new FetcherSelection<E>() {

                                    @Override
                                    public Fetcher<?> getFetcher() {
                                        return fetcher;
                                    }

                                    @Override
                                    public @Nullable Function<?, E> getConverter() {
                                        return converter;
                                    }
                                }
                        ),
                        entities
                );
            }
            return entities;
        }
        ConfigurableRootQuery<?, E> query = Queries.createQuery(
                sqlClient, immutableType, purpose, true, (q, table) -> {
                    Expression<Object> idProp = table.get(immutableType.getIdProp().getName());
                    if (distinctIds.size() == 1) {
                        q.where(idProp.eq(distinctIds.iterator().next()));
                    } else {
                        q.where(idProp.in(distinctIds));
                    }
                    return q.select(new FetcherSelectionImpl<>(table, fetcher, converter));
                }
        );
        if (forUpdate) {
            query = query.forUpdate(true);
        }
        return query.execute(con);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <E> List<E> findAll(Class<E> type, TypedProp.Scalar<?, ?>... sortedProps) {
        if (Static.class.isAssignableFrom(type)) {
            return (List<E>) find(StaticMetadata.of((Class<? extends Static<Object>>) type), sortedProps);
        }
        return find(ImmutableType.get(type), null, null, sortedProps);
    }

    @Override
    public <E> List<E> findAll(Fetcher<E> fetcher, TypedProp.Scalar<?, ?>... sortedProps) {
        return find(fetcher.getImmutableType(), fetcher, null, sortedProps);
    }

    @Override
    public <E> List<E> findByExample(Example<E> example, TypedProp.Scalar<?, ?>... sortedProps) {
        ExampleImpl<E> exampleImpl = (ExampleImpl<E>) example;
        return find(exampleImpl.type(), null, exampleImpl, sortedProps);
    }

    @Override
    public <E> List<E> findByExample(Example<E> example, Fetcher<E> fetcher, TypedProp.Scalar<?, ?>... sortedProps) {
        ExampleImpl<E> exampleImpl = (ExampleImpl<E>) example;
        return find(exampleImpl.type(), fetcher, exampleImpl, sortedProps);
    }

    private <E> List<E> find(
            ImmutableType type,
            Fetcher<E> fetcher,
            ExampleImpl<E> example,
            TypedProp.Scalar<?, ?>... sortedProps
    ) {
        if (fetcher != null && fetcher.getImmutableType() != type) {
            throw new IllegalArgumentException(
                    "The type of fetcher is \"" +
                            fetcher.getImmutableType() +
                            "\", it does not match the query root type \"" +
                            type +
                            "\""
            );
        }
        if (example != null && example.type() != type) {
            throw new IllegalArgumentException(
                    "The type of example is \"" +
                            example.type() +
                            "\", it does not match the query root type \"" +
                            type +
                            "\""
            );
        }
        MutableRootQueryImpl<Table<E>> query =
                new MutableRootQueryImpl<>(sqlClient, type, ExecutionPurpose.QUERY, false);
        Table<E> table = query.getTable();
        if (example != null) {
            example.applyTo(query);
        }
        for (TypedProp.Scalar<?, ?> sortedProp : sortedProps) {
            if (!sortedProp.unwrap().getDeclaringType().isAssignableFrom(type)) {
                throw new IllegalArgumentException(
                        "The sorted field \"" +
                                sortedProp +
                                "\" does not belong to the type \"" +
                                type +
                                "\" or its super types"
                );
            }
            Expression<?> expr = table.get(sortedProp.unwrap().getName());
            Order astOrder;
            if (sortedProp.isDesc()) {
                astOrder = expr.desc();
            } else {
                astOrder = expr.asc();
            }
            if (sortedProp.isNullsFirst()) {
                astOrder = astOrder.nullsFirst();
            }
            if (sortedProp.isNullsLast()) {
                astOrder = astOrder.nullsLast();
            }
            query.orderBy(astOrder);
        }
        query.freeze();
        return query.select(
                fetcher != null ? table.fetch(fetcher) : table
        ).execute(con);
    }

    private <E> List<E> find(
            StaticMetadata<?, E> metadata,
            TypedProp.Scalar<?, ?> ... sortedProps
    ) {
        Fetcher<?> fetcher = metadata.getFetcher();
        Function<?, E> converter = metadata.getConverter();
        ImmutableType type = fetcher.getImmutableType();
        MutableRootQueryImpl<Table<E>> query =
                new MutableRootQueryImpl<>(sqlClient, type, ExecutionPurpose.QUERY, false);
        Table<E> table = query.getTable();
        for (TypedProp.Scalar<?, ?> sortedProp : sortedProps) {
            if (!sortedProp.unwrap().getDeclaringType().isAssignableFrom(type)) {
                throw new IllegalArgumentException(
                        "The sorted field \"" +
                                sortedProp +
                                "\" does not belong to the type \"" +
                                type +
                                "\" or its super types"
                );
            }
            Expression<?> expr = table.get(sortedProp.unwrap().getName());
            Order astOrder;
            if (sortedProp.isDesc()) {
                astOrder = expr.desc();
            } else {
                astOrder = expr.asc();
            }
            if (sortedProp.isNullsFirst()) {
                astOrder = astOrder.nullsFirst();
            }
            if (sortedProp.isNullsLast()) {
                astOrder = astOrder.nullsLast();
            }
            query.orderBy(astOrder);
        }
        query.freeze();
        return query.select(
                new FetcherSelectionImpl<>(table, fetcher, converter)
        ).execute(con);
    }

    @Override
    public <E> SimpleEntitySaveCommand<E> saveCommand(E entity) {
        if (entity instanceof Collection<?>) {
            throw new IllegalArgumentException("entity cannot be collection, do you want to call 'batchSaveCommand'?");
        }
        if (entity instanceof Input<?>) {
            throw new IllegalArgumentException(
                    "entity cannot be input, " +
                            "please call another overloaded function whose parameter is input"
            );
        }
        return new SimpleEntitySaveCommandImpl<>(
                sqlClient,
                con,
                entity
        );
    }

    @Override
    public <E> BatchEntitySaveCommand<E> batchSaveCommand(Collection<E> entities) {
        for (E e : entities) {
            if (e instanceof Input<?>) {
                throw new IllegalArgumentException(
                        "the collection cannot contains input, " +
                                "please call another overloaded function whose parameter is input collection"
                );
            }
        }
        return new BatchEntitySaveCommandImpl<>(sqlClient, con, entities);
    }

    @Override
    public DeleteCommand deleteCommand(
            Class<?> type,
            Object id
    ) {
        if (id instanceof Collection<?>) {
            throw new IllegalArgumentException("`id` cannot be collection, do you want to call 'batchDeleteCommand'?");
        }
        if ((id instanceof ImmutableSpi && ((ImmutableSpi)id).__type().isEntity()) || id instanceof Input<?>) {
            throw new IllegalArgumentException("`id` must be simple type");
        }
        return batchDeleteCommand(type, Collections.singleton(id));
    }

    @Override
    public DeleteCommand batchDeleteCommand(
            Class<?> type,
            Collection<?> ids
    ) {
        for (Object id : ids) {
            if ((id instanceof ImmutableSpi && ((ImmutableSpi)id).__type().isEntity()) || id instanceof Input<?>) {
                throw new IllegalArgumentException("All the elements of `ids` must be simple type");
            }
        }
        ImmutableType immutableType = ImmutableType.get(type);
        return new DeleteCommandImpl(sqlClient, con, immutableType, ids);
    }
}
