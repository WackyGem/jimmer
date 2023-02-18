package org.babyfish.jimmer.sql.kt.model.inheritance

import org.babyfish.jimmer.lang.Ref
import org.babyfish.jimmer.sql.kt.KSqlClient
import org.babyfish.jimmer.sql.kt.KTransientResolver
import org.babyfish.jimmer.sql.kt.ast.expression.count
import org.babyfish.jimmer.sql.kt.ast.expression.valueIn
import java.sql.Connection
import java.util.*

class RolePermissionCountResolver(
    private val sqlClient: KSqlClient
) : KTransientResolver<Long, Int> {

    init {
        sqlClient.triggers.addAssociationListener(Role::permissions) {
            sqlClient
                .caches
                .getPropertyCache<Long, Int>(Role::permissionCount)
                ?.delete(it.sourceId as Long)
        }
    }

    override fun resolve(ids: Collection<Long>): Map<Long, Int> =
        sqlClient
            .createQuery(Permission::class) {
                where(table.role.id valueIn ids)
                groupBy(table.role.id)
                select(
                    table.role.id,
                    count(table)
                )
            }
            .execute(KTransientResolver.currentConnection)
            .associateBy({
                it._1
            }) {
                it._2.toInt()
            }

    override fun getParameterMapRef(): Ref<SortedMap<String, Any>?>? =
        sqlClient
            .filters
            .getTargetParameterMapRef(Role::permissions)
}