package org.babyfish.jimmer.sql.example.graphql.business;

import org.babyfish.jimmer.sql.example.graphql.repository.BookRepository;
import org.babyfish.jimmer.sql.example.graphql.entities.*;
import org.babyfish.jimmer.sql.example.graphql.entities.dto.BookInput;
import org.babyfish.jimmer.sql.example.graphql.entities.dto.CompositeBookInput;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * A real project should be a three-tier architecture consisting
 * of repository, service, and controller.
 *
 * This demo has no business logic, its purpose is only to tell users
 * how to use jimmer with the <b>least</b> code. Therefore, this demo
 * does not follow this convention, and let services be directly
 * decorated by `@Controller`, not `@Service`.
 */
@Controller
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // --- Query ---

    @QueryMapping
    public List<Book> books(
            @Argument @Nullable String name,
            @Argument @Nullable String storeName,
            @Argument @Nullable String authorName
    ) {
        return bookRepository.find(name, storeName, authorName);
    }

    // --- Mutation ---

    @MutationMapping
    @Transactional
    public Book saveBook(@Argument BookInput input) {
        return bookRepository.save(input);
    }

    @MutationMapping
    @Transactional
    public Book saveCompositeBook(@Argument CompositeBookInput input) {
        return bookRepository.save(input);
    }

    @MutationMapping
    @Transactional
    public int deleteBook(@Argument long id) {
        bookRepository.deleteById(id);
        // GraphQL requires return value,
        // but `deleteById` of spring-data does not support value.
        // Is there a better design?
        return 1;
    }
}
