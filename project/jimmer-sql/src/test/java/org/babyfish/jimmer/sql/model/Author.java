package org.babyfish.jimmer.sql.model;

import org.babyfish.jimmer.Formula;
import org.babyfish.jimmer.sql.Key;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;

import org.babyfish.jimmer.sql.*;
import org.jetbrains.annotations.Nullable;

import java.util.List;
import java.util.UUID;

@Entity
public interface Author {

    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @Key
    String firstName();

    @Key
    String lastName();

    @Formula(dependencies = {"firstName", "lastName"})
    default String fullName() {
        return firstName() + ' ' + lastName();
    }

    @Formula(sql = "concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)")
    String fullName2();

    Gender gender();

    @ManyToMany(mappedBy = "authors")
    List<Book> books();

    @ManyToOne
    @Nullable
    @JoinTable(
            name = "AUTHOR_COUNTRY_MAPPING",
            joinColumnName = "AUTHOR_ID",
            inverseJoinColumnName = "COUNTRY_CODE"
    )
    Country country();

    @Transient
    Organization organization();
}
