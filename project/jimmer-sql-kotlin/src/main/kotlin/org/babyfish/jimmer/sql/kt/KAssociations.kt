package org.babyfish.jimmer.sql.kt

import org.babyfish.jimmer.lang.NewChain
import org.babyfish.jimmer.sql.ast.tuple.Tuple2
import java.sql.Connection

interface KAssociations {

    @NewChain
    fun forConnection(con: Connection): KAssociations

    @NewChain
    fun reverse(): KAssociations

    @NewChain
    fun checkExistence(checkExistence: Boolean = true): KAssociations

    fun save(
        sourceId: Any,
        targetId: Any,
        checkExistence: Boolean? = null,
        con: Connection? = null
    ): Int

    fun batchSave(
        sourceIds: Collection<*>,
        targetIds: Collection<*>,
        checkExistence: Boolean? = null,
        con: Connection? = null
    ): Int

    fun batchSave(
        idTuples: Collection<Tuple2<*, *>>,
        checkExistence: Boolean? = null,
        con: Connection? = null
    ): Int

    fun delete(
        sourceId: Any,
        targetId: Any,
        con: Connection? = null
    ): Int

    fun batchDelete(
        sourceIds: Collection<*>,
        targetIds: Collection<*>,
        con: Connection? = null
    ): Int

    fun batchDelete(
        idTuples: Collection<Tuple2<*, *>>,
        con: Connection? = null
    ): Int
}