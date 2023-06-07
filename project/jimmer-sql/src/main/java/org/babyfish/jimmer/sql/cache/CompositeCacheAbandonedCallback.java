package org.babyfish.jimmer.sql.cache;

import org.babyfish.jimmer.meta.ImmutableProp;

import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.Set;

public class CompositeCacheAbandonedCallback implements CacheAbandonedCallback {

    private static final CacheAbandonedCallback[] EMPTY_CALLBACKS =
            new CacheAbandonedCallback[0];

    private final CacheAbandonedCallback[] callbacks;

    CompositeCacheAbandonedCallback(Collection<CacheAbandonedCallback> callbacks) {
        this.callbacks = callbacks.toArray(EMPTY_CALLBACKS);
    }

    static CacheAbandonedCallback combine(Collection<CacheAbandonedCallback> callbacks) {
        Set<CacheAbandonedCallback> set = new LinkedHashSet<>((callbacks.size() * 4 + 2) / 3);
        for (CacheAbandonedCallback callback : callbacks) {
            if (callback != null) {
                set.add(callback);
            }
        }
        switch (set.size()) {
            case 0:
                return null;
            case 1:
                return set.iterator().next();
            default:
                return new CompositeCacheAbandonedCallback(set);
        }
    }

    @Override
    public void abandoned(ImmutableProp prop, Reason reason) {
        for (CacheAbandonedCallback callback : callbacks) {
            callback.abandoned(prop, reason);
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CompositeCacheAbandonedCallback that = (CompositeCacheAbandonedCallback) o;
        return Arrays.equals(callbacks, that.callbacks);
    }

    @Override
    public int hashCode() {
        return Arrays.hashCode(callbacks);
    }
}
