package com.cipfpmislata.dws_spring.controller;

import com.cipfpmislata.dws_spring.domain.model.Book;
import com.cipfpmislata.dws_spring.domain.service.BookService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {
    private BookService bookService;

    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAll(){
        return bookService.getAll();
    }

    @GetMapping("/{isbn}")
    public Book getByIsbn(@PathVariable String isbn){
        return bookService.getByIsbn(isbn);
    }
}