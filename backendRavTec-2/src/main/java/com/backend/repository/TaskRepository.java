package com.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.domain.Task;

@Repository
public interface TaskRepository extends MongoRepository<Task, String>{
	
}
