package com.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.domain.Group;

@Repository
public interface GroupRepository extends MongoRepository<Group, String>{
	
}
