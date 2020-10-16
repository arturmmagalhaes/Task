package com.backend.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.backend.domain.Task;
import com.backend.dto.TaskDTO;
import com.backend.services.TaskService;

@RestController
@RequestMapping(value="/")
public class TaskResource {
	
	@Autowired
	private TaskService service;
	
	@CrossOrigin
	@RequestMapping(value="/tasks", method=RequestMethod.GET)
	public ResponseEntity<List<Task>> findAll() {
		List<Task> list = service.findAll();
		List<Task> listDto = list.stream().map(x -> new Task(x)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}

	@RequestMapping(value="/tasks/{id}", method=RequestMethod.GET)
	public ResponseEntity<Task> findById(@PathVariable String id) {
		Task obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value="/inserttask/{id}", method=RequestMethod.POST)
	public ResponseEntity<Task> insertTask(@RequestBody TaskDTO objDto, @PathVariable String id) {
		
		Task obj = service.fromDTO(objDto, id);
		obj = service.insert(obj);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value="/updatetaskgroup/{id}/{id_group}", method=RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody String name, @PathVariable String id, @PathVariable String id_group) {
		
		TaskDTO objDto = new TaskDTO(id, name);
		Task obj = service.fromDTO(objDto, id_group);
		obj = service.update(obj);
		
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(value="/deletetask/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteById(@PathVariable String id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
