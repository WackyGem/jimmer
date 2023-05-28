package org.babyfish.jimmer.sql.meta;

import org.babyfish.jimmer.sql.meta.impl.DatabaseIdentifiers;
import org.jetbrains.annotations.NotNull;

import java.util.*;

public abstract class MultipleColumns implements ColumnDefinition {

    protected final String[] arr;

    protected final boolean embedded;

    public MultipleColumns(String[] arr, boolean embedded) {
        if (arr.length > 1 && !embedded) {
            throw new IllegalArgumentException(
                    "`embedded` must be true where there are several join columns: " +
                            Arrays.toString(arr)
            );
        }
        this.arr = arr;
        this.embedded = embedded;
    }

    @Override
    public boolean isEmbedded() {
        return embedded;
    }

    @Override
    public int size() {
        return arr.length;
    }

    @Override
    public String name(int index) {
        return arr[index];
    }

    @Override
    public int index(String name) {
        int len = arr.length;
        for (int i = 0; i < len; i++) {
            if (arr[i].equals(name)) {
                return i;
            }
        }
        return -1;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MultipleColumns that = (MultipleColumns) o;
        return embedded == that.embedded && Arrays.equals(arr, that.arr);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(embedded);
        result = 31 * result + Arrays.hashCode(arr);
        return result;
    }

    @Override
    public String toString() {
        return "MultipleColumns{" +
                "arr=" + Arrays.toString(arr) +
                '}';
    }

    @Override
    public Set<String> toColumnNames() {
        Set<String> set = new LinkedHashSet<>((arr.length * 4 + 2) / 3);
        for (String name : arr) {
            set.add(DatabaseIdentifiers.comparableIdentifier(name));
        }
        return set;
    }

    @NotNull
    @Override
    public Iterator<String> iterator() {
        return new Itr(arr);
    }

    private static class Itr implements Iterator<String> {

        private final String[] arr;

        private int index;

        private Itr(String[] arr) {
            this.arr = arr;
        }

        @Override
        public boolean hasNext() {
            return index < arr.length;
        }

        @Override
        public String next() {
            if (index < arr.length) {
                return arr[index++];
            }
            throw new NoSuchElementException();
        }
    }
}