package org.babyfish.jimmer.example.kt.graphql.bll

import org.babyfish.jimmer.example.kt.graphql.dal.BookRepository
import org.babyfish.jimmer.example.kt.graphql.entities.*
import org.babyfish.jimmer.example.kt.graphql.entities.dto.BookInput
import org.babyfish.jimmer.example.kt.graphql.entities.dto.CompositeBookInput
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import org.springframework.transaction.annotation.Transactional

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
class BookService(
    private val bookRepository: BookRepository
) {

    // --- Query ---

    @QueryMapping
    fun books(
        @Argument name: String?,
        @Argument storeName: String?,
        @Argument authorName: String?
    ): List<Book> =
        bookRepository.find(name, storeName, authorName)

    // --- Mutation ---

    @MutationMapping
    @Transactional
    fun saveBook(@Argument input: BookInput): Book =
        bookRepository.save(input)

    @MutationMapping
    @Transactional
    fun saveCompositeBook(@Argument input: CompositeBookInput): Book =
        bookRepository.save(input)

    @MutationMapping
    @Transactional
    fun deleteBook(@Argument id: Long): Int {
        bookRepository.deleteById(id)
        // GraphQL requires return value,
        // but `deleteById` of spring data return nothing!
        // Is there better design?
        return 1
    }
}