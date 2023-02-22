package org.babyfish.jimmer.spring.repository.support

import org.babyfish.jimmer.ImmutableObjects
import org.babyfish.jimmer.meta.ImmutableType
import org.babyfish.jimmer.Input
import org.babyfish.jimmer.spring.repository.*
import org.babyfish.jimmer.sql.ast.mutation.SaveMode
import org.babyfish.jimmer.sql.fetcher.Fetcher
import org.babyfish.jimmer.sql.kt.KSqlClient
import org.babyfish.jimmer.sql.kt.ast.query.SortDsl
import org.babyfish.jimmer.sql.kt.ast.query.KConfigurableRootQuery
import org.babyfish.jimmer.sql.kt.ast.query.impl.KConfigurableRootQueryImplementor
import org.springframework.core.GenericTypeResolver
import org.springframework.data.domain.*
import kotlin.reflect.KClass
import kotlin.reflect.KProperty1

open class KRepositoryImpl<E: Any, ID: Any> (
    override val sql: KSqlClient,
    entityType: KClass<E>? = null
) : KRepository<E, ID> {

    init {
        Utils.validateSqlClient(sql.javaClient)
    }

    // For bytecode
    protected constructor(sql: KSqlClient, entityType: Class<E>) :
        this(sql, entityType.kotlin)

    @Suppress("UNCHECKED_CAST")
    protected val entityType: KClass<E> =
        if (entityType !== null) {
            entityType
        } else {
            GenericTypeResolver
                .resolveTypeArguments(this.javaClass, JRepository::class.java)
                ?.let { it[0].kotlin as KClass<E> }
                ?: throw IllegalArgumentException(
                    "The class \"" + this.javaClass + "\" " +
                        "does not explicitly specify the type arguments of \"" +
                        JRepository::class.java.name +
                        "\" so that the entityType must be specified"
                )
        }

    override val type: ImmutableType =
        ImmutableType.get(this.entityType.java)

    override fun pager(pageIndex: Int, pageSize: Int): KRepository.Pager {
        return PagerImpl(pageIndex, pageSize)
    }

    override fun pager(pageable: Pageable): KRepository.Pager =
        PagerImpl(pageable.pageNumber, pageable.pageSize)

    override fun findNullable(id: ID, fetcher: Fetcher<E>?): E? =
        if (fetcher !== null) {
            sql.entities.findById(fetcher, id)
        } else {
            sql.entities.findById(entityType, id)
        }

    override fun findByIds(ids: Iterable<ID>, fetcher: Fetcher<E>?): List<E> =
        if (fetcher !== null) {
            sql.entities.findByIds(fetcher, Utils.toCollection(ids))
        } else {
            sql.entities.findByIds(entityType, Utils.toCollection(ids))
        }

    override fun findMapByIds(ids: Iterable<ID>, fetcher: Fetcher<E>?): Map<ID, E> =
        if (fetcher !== null) {
            sql.entities.findMapByIds(fetcher, Utils.toCollection(ids))
        } else {
            sql.entities.findMapByIds(entityType, Utils.toCollection(ids))
        }

    override fun findAll(fetcher: Fetcher<E>?, block: (SortDsl<E>.() -> Unit)?): List<E> =
        if (fetcher !== null) {
            sql.entities.findAll(fetcher, block)
        } else {
            sql.entities.findAll(entityType, block)
        }

    override fun findAll(fetcher: Fetcher<E>?, sort: Sort): List<E> =
        if (fetcher !== null) {
            sql.entities.findAll(fetcher, sort.toSortDslBlock(type))
        } else {
            sql.entities.findAll(entityType, sort.toSortDslBlock(type))
        }

    override fun findAll(
        pageIndex: Int,
        pageSize: Int,
        fetcher: Fetcher<E>?,
        block: (SortDsl<E>.() -> Unit)?
    ): Page<E> =
        pager(pageIndex, pageSize)
            .execute(
                sql.createQuery(entityType) {
                    orderBy(block)
                    select(table.fetch(fetcher))
                }
            )

    override fun findAll(pageIndex: Int, pageSize: Int, fetcher: Fetcher<E>?, sort: Sort): Page<E> =
        pager(pageIndex, pageSize)
            .execute(
                sql.createQuery(entityType) {
                    orderBy(sort)
                    select(table.fetch(fetcher))
                }
            )

    override fun findAll(pageable: Pageable): Page<E> =
        findAll(pageable, null)

    override fun findAll(pageable: Pageable, fetcher: Fetcher<E>?): Page<E> =
        pager(pageable)
            .execute(
                sql.createQuery(entityType) {
                    orderBy(pageable.sort)
                    select(table.fetch(fetcher))
                }
            )

    override fun count(): Long =
        sql.createQuery(entityType) {
            select(org.babyfish.jimmer.sql.kt.ast.expression.count(table))
        }.fetchOne()

    override fun insert(entity: E): E =
        sql.entities.save(entity) {
            setMode(SaveMode.INSERT_ONLY)
            setAutoAttachingAll()
        }.modifiedEntity

    override fun update(entity: E): E =
        sql.entities.save(entity) {
            setMode(SaveMode.UPDATE_ONLY)
            setAutoAttachingAll()
        }.modifiedEntity

    override fun <S : E> save(entity: S): S =
        sql.entities.save(entity) {
            setAutoAttachingAll()
        }.modifiedEntity

    override fun <S : E> saveAll(entities: Iterable<S>): List<S> =
        sql.entities.batchSave(Utils.toCollection(entities)) {
            setAutoAttachingAll()
        }.simpleResults.map { it.modifiedEntity }

    override fun save(input: Input<E>): E =
        sql.entities.save(input.toEntity()) {
            setAutoAttachingAll()
        }.modifiedEntity

    override fun delete(entity: E) {
        sql.entities.delete(entityType, ImmutableObjects.get(entity, type.idProp))
    }

    override fun deleteById(id: ID) {
        sql.entities.delete(entityType, id)
    }

    override fun deleteByIds(ids: Iterable<ID>) {
        sql.entities.batchDelete(entityType, Utils.toCollection(ids))
    }

    override fun deleteAll() {
        sql.createDelete(entityType) {}.execute()
    }

    override fun deleteAll(entities: Iterable<E>) {
        sql
            .entities
            .batchDelete(
                entityType,
                entities.map {
                    ImmutableObjects.get(it, type.idProp)
                }
            )
    }

    override val graphql: KRepository.GraphQl<E>
        get() = GraphQlImpl()

    private class PagerImpl(
        private val pageIndex: Int,
        private val pageSize: Int
    ) : KRepository.Pager {

        override fun <T> execute(query: KConfigurableRootQuery<*, T>): Page<T> {
            if (pageSize == 0) {
                return PageImpl(query.execute())
            }
            val offset = pageIndex * pageSize
            require(offset <= Int.MAX_VALUE - pageSize) { "offset is too big" }
            val total = query.count()
            val content = query
                .limit(pageSize, offset)
                .execute()
            return PageImpl(
                content,
                PageRequest.of(
                    pageIndex,
                    pageSize,
                    Utils.toSort(
                        (query as KConfigurableRootQueryImplementor<*, *>).javaOrders
                    )
                ),
                total.toLong()
            )
        }
    }

    private inner class GraphQlImpl : KRepository.GraphQl<E> {

        override fun <X : Any> load(prop: KProperty1<E, X?>, sources: Collection<E>): Map<E, X> =
            sql.loaders.batchLoad(prop, sources)
    }
}