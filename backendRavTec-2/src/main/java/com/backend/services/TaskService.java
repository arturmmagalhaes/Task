package com.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.domain.Group;
import com.backend.domain.Task;
import com.backend.dto.GroupDTO;
import com.backend.dto.TaskDTO;
import com.backend.repository.TaskRepository;
import com.backend.services.exception.ObjectNotFoundException;

@Service
public class TaskService {
	
	@Autowired
	private TaskRepository repo;
	
	public List<Task> findAll(){
		return repo.findAll();
	}
	
	public Task insert(Task obj) {
		return repo.insert(obj);
	}
	
	public Task findById(String id) {
		Task task = repo.findById(id).orElse(null);
		if(task == null) {
			throw new ObjectNotFoundException("Tarefa não encontrada");
		}
		return task;
	}

	public Task update(Task obj) {
		Task newObj = repo.findById(obj.getId()).orElse(null);
		updateData(newObj, obj);
		return repo.save(newObj);
	}
	
	private void updateData(Task newObj, Task obj) {
		newObj.setName(obj.getName());
		newObj.setId_group(obj.getId_group());
	}
	
	public void delete(String id) {
		findById(id);
		repo.deleteById(id);
	}
	
	public Task fromDTO(TaskDTO objDto, String id) {
		return new Task(objDto.getId(), objDto.getName(), id);
	}
}
