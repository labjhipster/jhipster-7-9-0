package com.sgaraba.library.service.mapper;

import com.sgaraba.library.domain.Publisher;
import com.sgaraba.library.service.dto.PublisherDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Publisher} and its DTO {@link PublisherDTO}.
 */
@Mapper(componentModel = "spring")
public interface PublisherMapper extends EntityMapper<PublisherDTO, Publisher> {}
