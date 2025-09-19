package com.cipfpmislata.dws_spring.domain.service;

import com.cipfpmislata.dws_spring.domain.service.dto.BookDto;
import java.util.List;

public interface BookService {
    List<BookDto> getAll();
    BookDto getByIsbn(String isbn);
}
