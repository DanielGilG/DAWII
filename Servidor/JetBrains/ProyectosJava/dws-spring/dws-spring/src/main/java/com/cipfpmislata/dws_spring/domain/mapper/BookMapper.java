package com.cipfpmislata.dws_spring.domain.mapper;

import com.cipfpmislata.dws_spring.domain.model.Author;
import com.cipfpmislata.dws_spring.domain.model.Book;
import com.cipfpmislata.dws_spring.domain.model.Publisher;
import com.cipfpmislata.dws_spring.domain.service.dto.BookDto;

import java.util.List;

public class BookMapper {
    private static BookMapper INSTANCE;

    private BookMapper() {
    }

    public static BookMapper getInstance(){
        if (INSTANCE == null){
            INSTANCE = new BookMapper();
        }
        return INSTANCE;
    }

    public Book fromBookEntityToBook(Book bookEntity){
        if (bookEntity == null){
            return null;
        }
        return new Book(
                bookEntity.getIsbn(),
                bookEntity.getTitle(),
                (List<Author>) bookEntity.getPublisher(),
                (Publisher) bookEntity.getAuthors()
        );
    }

    public BookDto fromBookToBookDto(Book book){
        if (book == null){
            return null;
        }
        return new BookDto(
                book.setIsbn(),
                book.getTitle()
        );
    }

}
