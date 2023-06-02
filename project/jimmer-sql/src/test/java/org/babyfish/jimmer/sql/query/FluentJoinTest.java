package org.babyfish.jimmer.sql.query;

import org.babyfish.jimmer.sql.JoinType;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.table.WeakJoin;
import org.babyfish.jimmer.sql.common.AbstractQueryTest;
import org.babyfish.jimmer.sql.model.*;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.Arrays;

import static org.babyfish.jimmer.sql.common.Constants.*;

public class FluentJoinTest extends AbstractQueryTest {

    @Test
    public void testSimple() {

        BookTable book = BookTable.$;

        executeAndExpect(
                getSqlClient()
                        .createQuery(book)
                        .select(book),
                ctx -> {
                    ctx.sql(
                            "select " +
                                    "tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID " +
                                    "from BOOK tb_1_"
                    );
                }
        );
    }

    @Test
    public void testUnused() {

        BookStoreTable store = BookStoreTable.$;
        store.asTableEx().books();

        executeAndExpect(
                getSqlClient()
                        .createQuery(store)
                        .select(store),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, tb_1_.NAME, tb_1_.WEBSITE, tb_1_.VERSION " +
                                    "from BOOK_STORE tb_1_"
                    );
                }
        );

        BookTable book = BookTable.$;
        book.asTableEx().authors();
        book.store();

        executeAndExpect(
                getSqlClient()
                        .createQuery(book)
                        .select(book),
                ctx -> {
                    ctx.sql(
                            "select " +
                                    "tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID " +
                                    "from BOOK tb_1_"
                    );
                }
        );
    }

    @Test
    public void testMergedJoinFromParentToChild() {
        BookStoreTable store = BookStoreTable.$;
        executeAndExpect(
                getSqlClient().createQuery(store)
                        .where(
                                store.asTableEx().books(JoinType.LEFT).price()
                                        .ge(new BigDecimal(20))
                        )
                        .where(
                                store.asTableEx().books().price()
                                        .le(new BigDecimal(30))
                        )
                        .where(
                                store
                                        .asTableEx()
                                        .books()
                                        .authors()
                                        .firstName()
                                        .ilike("Alex")
                        )
                        .select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK_STORE tb_1_ " +
                                    "inner join BOOK tb_2_ on tb_1_.ID = tb_2_.STORE_ID " +
                                    "inner join BOOK_AUTHOR_MAPPING tb_3_ on tb_2_.ID = tb_3_.BOOK_ID " +
                                    "inner join AUTHOR tb_4_ on tb_3_.AUTHOR_ID = tb_4_.ID " +
                                    "where tb_2_.PRICE >= ? and tb_2_.PRICE <= ? and lower(tb_4_.FIRST_NAME) like ?"
                    );
                    ctx.variables(
                            new BigDecimal(20), new BigDecimal(30), "%alex%"
                    );
                }
        );
    }

    @Test
    public void testMergedJoinFromChildToParent() {
        AuthorTable author = AuthorTable.$;
        executeAndExpect(
                getSqlClient().createQuery(author)
                        .where(
                                author
                                        .asTableEx()
                                        .books(JoinType.LEFT)
                                        .price()
                                        .ge(new BigDecimal(20))
                        )
                        .where(
                                author
                                        .asTableEx()
                                        .books()
                                        .price()
                                        .le(new BigDecimal(30))
                        )
                        .where(
                                author
                                        .asTableEx()
                                        .books()
                                        .store()
                                        .name()
                                        .ilike("MANNING")
                        )
                        .select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from AUTHOR tb_1_ " +
                                    "inner join BOOK_AUTHOR_MAPPING tb_2_ on tb_1_.ID = tb_2_.AUTHOR_ID " +
                                    "inner join BOOK tb_3_ on tb_2_.BOOK_ID = tb_3_.ID " +
                                    "inner join BOOK_STORE tb_4_ on tb_3_.STORE_ID = tb_4_.ID " +
                                    "where tb_3_.PRICE >= ? and tb_3_.PRICE <= ? and lower(tb_4_.NAME) like ?"
                    );
                    ctx.variables(new BigDecimal(20), new BigDecimal(30), "%manning%");
                }
        );
    }

    @Test
    public void testUnnecessaryJoin() {
        BookTable book = BookTable.$;
        executeAndExpect(
                getSqlClient()
                        .createQuery(book)
                        .where(
                                book.store().id().in(Arrays.asList(oreillyId, manningId))
                        )
                        .select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 from BOOK tb_1_ where tb_1_.STORE_ID in (?, ?)"
                    );
                    ctx.variables(oreillyId, manningId);
                }
        );
    }

    @Test
    public void testUnnecessaryJoinByIdView() {
        BookTable book = BookTable.$;
        executeAndExpect(
                getSqlClient()
                        .createQuery(book)
                        .where(
                                book.storeId().in(Arrays.asList(oreillyId, manningId))
                        )
                        .select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 from BOOK tb_1_ where tb_1_.STORE_ID in (?, ?)"
                    );
                    ctx.variables(oreillyId, manningId);
                }
        );
    }

    @Test
    public void testHalfJoin() {
        BookTable book = BookTable.$;
        executeAndExpect(
                getSqlClient().createQuery(book)
                        .where(
                                book
                                        .asTableEx()
                                        .authors()
                                        .id()
                                        .in(Arrays.asList(alexId, borisId))
                        )
                        .select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK tb_1_ " +
                                    "inner join BOOK_AUTHOR_MAPPING tb_2_ on tb_1_.ID = tb_2_.BOOK_ID " +
                                    "where tb_2_.AUTHOR_ID in (?, ?)"
                    );
                    ctx.variables(alexId, borisId);
                }
        );
    }

    @Test
    public void testHalfInverseJoin() {
        AuthorTable author = AuthorTable.$;
        executeAndExpect(
                getSqlClient().createQuery(author)
                        .where(
                                author
                                        .asTableEx()
                                        .books()
                                        .id()
                                        .in(Arrays.asList(learningGraphQLId1, learningGraphQLId2))
                        )
                        .select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from AUTHOR tb_1_ " +
                                    "inner join BOOK_AUTHOR_MAPPING tb_2_ on tb_1_.ID = tb_2_.AUTHOR_ID " +
                                    "where tb_2_.BOOK_ID in (?, ?)"
                    );
                    ctx.variables(learningGraphQLId1, learningGraphQLId2);
                }
        );
    }

    @Test
    public void testOneToManyCannotBeOptimized() {
        BookStoreTable store = BookStoreTable.$;
        executeAndExpect(
                getSqlClient()
                        .createQuery(store)
                        .where(
                                store
                                        .asTableEx()
                                        .books()
                                        .id()
                                        .in(Arrays.asList(learningGraphQLId1, learningGraphQLId2))
                        ).select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK_STORE tb_1_ " +
                                    "inner join BOOK tb_2_ on tb_1_.ID = tb_2_.STORE_ID " +
                                    "where tb_2_.ID in (?, ?)"
                    );
                    ctx.variables(learningGraphQLId1, learningGraphQLId2);
                }
        );
    }

    @Test
    public void testOuterJoin() {
        BookTable book = BookTable.$;
        executeAndExpect(
                getSqlClient()
                        .createQuery(book)
                        .where(
                                book.store(JoinType.LEFT).id().isNotNull().or(
                                        book.store(JoinType.LEFT).name().ilike("MANNING")
                                )
                        )
                        .select(Expression.constant(1)),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK tb_1_ " +
                                    "left join BOOK_STORE tb_2_ on tb_1_.STORE_ID = tb_2_.ID " +
                                    "where tb_1_.STORE_ID is not null " +
                                    "or lower(tb_2_.NAME) like ?"
                    );
                    ctx.variables("%manning%");
                }
        );
    }

    @Test
    public void testUnusedWeakJoin() {
        BookTable book = BookTable.$;
        executeAndExpect(
                getSqlClient()
                        .createQuery(book)
                        .where(book.id().eq(graphQLInActionId3))
                        .whereIf(
                                false,
                                book
                                        .asTableEx()
                                        .weakJoin(BookAuthorWeakJoin.class)
                                        .firstName()
                                        .eq("Alex")
                        )
                        .select(book),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID " +
                                    "from BOOK tb_1_ " +
                                    "where tb_1_.ID = ?"
                    );
                }
        );
    }

    @Test
    public void testWeakJoin() {
        BookTable book = BookTable.$;
        AuthorTable author = book.asTableEx().weakJoin(BookAuthorWeakJoin.class);
        executeAndExpect(
                getSqlClient().createQuery(book)
                        .where(author.firstName().eq("Alex"))
                        .select(book, author),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID, " +
                                    "tb_2_.ID, tb_2_.FIRST_NAME, tb_2_.LAST_NAME, tb_2_.GENDER " +
                                    "from BOOK tb_1_ " +
                                    "inner join AUTHOR tb_2_ on exists(" +
                                    "--->select * from book_author_mapping " +
                                    "--->where book_id = tb_1_.ID and author_id = tb_2_.ID" +
                                    ") " +
                                    "where tb_2_.FIRST_NAME = ?"
                    );
                    ctx.rows(
                            "[" +
                                    "--->{" +
                                    "--->--->\"_1\":{" +
                                    "--->--->--->\"id\":\"e110c564-23cc-4811-9e81-d587a13db634\"," +
                                    "--->--->--->\"name\":\"Learning GraphQL\"," +
                                    "--->--->--->\"edition\":1," +
                                    "--->--->--->\"price\":50.00," +
                                    "--->--->--->\"store\":{\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\"}" +
                                    "--->--->},\"_2\":{" +
                                    "--->--->--->\"id\":\"1e93da94-af84-44f4-82d1-d8a9fd52ea94\"," +
                                    "--->--->--->\"firstName\":\"Alex\"," +
                                    "--->--->--->\"lastName\":\"Banks\"," +
                                    "--->--->--->\"gender\":\"MALE\"" +
                                    "--->--->}" +
                                    "--->},{" +
                                    "--->--->\"_1\":{" +
                                    "--->--->--->\"id\":\"b649b11b-1161-4ad2-b261-af0112fdd7c8\"," +
                                    "--->--->--->\"name\":\"Learning GraphQL\"," +
                                    "--->--->--->\"edition\":2," +
                                    "--->--->--->\"price\":55.00," +
                                    "--->--->--->\"store\":{\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\"}" +
                                    "--->--->}," +
                                    "--->--->\"_2\":{" +
                                    "--->--->--->\"id\":\"1e93da94-af84-44f4-82d1-d8a9fd52ea94\"," +
                                    "--->--->--->\"firstName\":\"Alex\"," +
                                    "--->--->--->\"lastName\":\"Banks\"," +
                                    "--->--->--->\"gender\":\"MALE\"" +
                                    "--->--->}" +
                                    "--->},{" +
                                    "--->--->\"_1\":{" +
                                    "--->--->--->\"id\":\"64873631-5d82-4bae-8eb8-72dd955bfc56\"," +
                                    "--->--->--->\"name\":\"Learning GraphQL\"," +
                                    "--->--->--->\"edition\":3," +
                                    "--->--->--->\"price\":51.00," +
                                    "--->--->--->\"store\":{\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\"}" +
                                    "--->--->}," +
                                    "--->--->\"_2\":{" +
                                    "--->--->--->\"id\":\"1e93da94-af84-44f4-82d1-d8a9fd52ea94\"," +
                                    "--->--->--->\"firstName\":\"Alex\"," +
                                    "--->--->--->\"lastName\":\"Banks\"," +
                                    "--->--->--->\"gender\":\"MALE\"" +
                                    "--->--->}" +
                                    "--->}" +
                                    "]"
                    );
                }
        );
    }

    @Test
    public void testMergeWeakJoin() {
        BookTable book = BookTable.$;
        AuthorTable author = book.asTableEx().weakJoin(BookAuthorWeakJoin.class);
        executeAndExpect(
                getSqlClient().createQuery(book)
                        .where(author.firstName().eq("Alex"))
                        .where(author.lastName().eq("Banks"))
                        .select(book.id(), author.id()),
                ctx -> {
                    ctx.sql(
                            "select tb_1_.ID, tb_2_.ID " +
                                    "from BOOK tb_1_ " +
                                    "inner join AUTHOR tb_2_ on exists(" +
                                    "--->select * from book_author_mapping " +
                                    "--->where book_id = tb_1_.ID and author_id = tb_2_.ID" +
                                    ") " +
                                    "where tb_2_.FIRST_NAME = ? and tb_2_.LAST_NAME = ?"
                    ).variables("Alex", "Banks");
                    ctx.rows(
                            "[" +
                                    "--->{" +
                                    "--->--->\"_1\":\"64873631-5d82-4bae-8eb8-72dd955bfc56\"," +
                                    "--->--->\"_2\":\"1e93da94-af84-44f4-82d1-d8a9fd52ea94\"" +
                                    "--->},{" +
                                    "--->--->\"_1\":\"b649b11b-1161-4ad2-b261-af0112fdd7c8\"," +
                                    "--->--->\"_2\":\"1e93da94-af84-44f4-82d1-d8a9fd52ea94\"" +
                                    "--->},{" +
                                    "--->--->\"_1\":\"e110c564-23cc-4811-9e81-d587a13db634\"," +
                                    "--->--->\"_2\":\"1e93da94-af84-44f4-82d1-d8a9fd52ea94\"" +
                                    "--->}" +
                                    "]"
                    );
                }
        );
    }

    private static class BookAuthorWeakJoin implements WeakJoin<BookTable, AuthorTable> {

        @Override
        public Predicate on(BookTable source, AuthorTable target) {
            return Predicate.sql(
                    "exists(select * from book_author_mapping where book_id = %e and author_id = %e)",
                    new Expression[]{ source.id(), target.id() }
            );
        }
    }
}
