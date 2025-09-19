package com.cipfpmislata.dws_spring.domain.service.impl;

import com.cipfpmislata.dws_spring.domain.model.Book;
import com.cipfpmislata.dws_spring.domain.service.BookService;
import com.cipfpmislata.dws_spring.domain.service.dto.BookDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    List<Book> books = List.of(
            new Book("948193-2132-312", "Book One", List.of(), null),
            new Book("948493-2132-312", "Book Two", List.of(), null),
            new Book("947193-2132-312", "Book Three", List.of(), null)
    );

    @Override
    public List<BookDto> getAll() {
        return books.stream().map(book -> new BookDto(book.getIsbn(), book.getTitle())).toList();
    }

    @Override
    public BookDto getByIsbn(String isbn) {
        return books.stream().filter(book -> book.getIsbn().equals(isbn)).findFirst().orElse(null);
    }
}
