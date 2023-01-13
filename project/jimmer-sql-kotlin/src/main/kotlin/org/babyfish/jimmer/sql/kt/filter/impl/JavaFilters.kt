package org.babyfish.jimmer.sql.kt.filter.impl

import org.babyfish.jimmer.sql.filter.Filter
import org.babyfish.jimmer.sql.kt.filter.KCacheableFilter
import org.babyfish.jimmer.sql.kt.filter.KShardingFilter
import org.babyfish.jimmer.sql.kt.filter.KFilter

fun KFilter<*>.toJavaFilter(): Filter<*> =
    when {
        this is KShardingFilter<*> && this is KCacheableFilter<*> ->
            JavaShardingCacheableFilter(this as KCacheableFilter<*>)
        this is KShardingFilter<*> ->
            JavaShardingFilter(this)
        this is KCacheableFilter<*> ->
            JavaCacheableFilter(this)
        else ->
            JavaFilter(this)
    }