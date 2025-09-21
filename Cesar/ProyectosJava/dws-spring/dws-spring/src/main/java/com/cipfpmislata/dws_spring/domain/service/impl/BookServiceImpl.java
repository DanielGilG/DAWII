package com.cipfpmislata.dws_spring.domain.service.impl;

import com.cipfpmislata.dws_spring.domain.mapper.BookMapper;
import com.cipfpmislata.dws_spring.domain.model.Book;
import com.cipfpmislata.dws_spring.domain.repository.BookRepository;
import com.cipfpmislata.dws_spring.domain.service.BookService;
import com.cipfpmislata.dws_spring.domain.service.dto.BookDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<BookDto> getAll() {
        return BookRepository .findAll()
                .stream()
                .map(BookMapper.getInstance()::fromBookEntityToBook)
                .map(BookMapper.getInstance()::fromBookToBookDto)
                .toList();
    }

    @Override
    public BookDto getByIsbn(String isbn) {
        return bookRepository .findByIsbn(isbn)
                .map(BookMapper.getInstance()::fromBookEntityToBook)
                .map(BookMapper.getInstance()::fromBookToBookDto)
                .orElse(null);
    }
}
