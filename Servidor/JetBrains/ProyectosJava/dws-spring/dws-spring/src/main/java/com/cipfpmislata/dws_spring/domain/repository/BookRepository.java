package com.cipfpmislata.dws_spring.domain.repository;

import com.cipfpmislata.dws_spring.domain.repository.entity.BookEntity;

import java.util.List;
import java.util.Optional;

public interface BookRepository {
    List<BookEntity> findAll();
    Optional<BookEntity> findByIsbn(String isbn);
}
