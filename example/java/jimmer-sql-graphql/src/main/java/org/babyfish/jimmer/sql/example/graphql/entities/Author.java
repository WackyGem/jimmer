package org.babyfish.jimmer.sql.example.graphql.entities;

import org.babyfish.jimmer.Formula;
import org.babyfish.jimmer.sql.*;
import org.babyfish.jimmer.sql.example.graphql.entities.common.BaseEntity;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
public interface Author extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    // It is inappropriate to use `firstName` and `lastName`
    // as keys in actual project, but this is just a small demo.

    @Key
    @NotBlank
    String firstName();

    @Key
    @NotBlank
    String lastName();

    Gender gender();

    @ManyToMany(mappedBy = "authors", orderedProps = @OrderedProp("name"))
    List<Book> books();

    // -----------------------------
    //
    // Everything below this line are calculated properties.
    //
    // The simple calculated properties are shown here. As for the
    // complex calculated properties, you can view `BookStore.avgPrice` and
    // `BookStore.newestBooks`
    // -----------------------------

    @Formula(dependencies = {"firstName", "lastName"})
    default String fullName() {
        return firstName() + ' ' + lastName();
    }

    // The simple property above is simple calculation based on JAVA expression,
    // you can also define simple calculations given SQL expressions like this
    //
    // @Formula(sql = "concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)")
    // String fullName();
}