package com.sgaraba.library.service.mapper;

import com.sgaraba.library.domain.Author;
import com.sgaraba.library.service.dto.AuthorDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Author} and its DTO {@link AuthorDTO}.
 */
@Mapper(componentModel = "spring")
public interface AuthorMapper extends EntityMapper<AuthorDTO, Author> {}
