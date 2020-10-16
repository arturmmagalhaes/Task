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

import com.backend.domain.Group;
import com.backend.domain.Task;
import com.backend.dto.GroupDTO;
import com.backend.services.GroupService;


@RestController
@RequestMapping(value="/")
public class GroupResource {
	
	@Autowired
	private GroupService service;
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<GroupDTO>> findAll() {
		List<Group> list = service.findAll();
		List<GroupDTO> listDto = list.stream().map(x -> new GroupDTO(x)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}

	@RequestMapping(value="/insertgroup", method=RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody GroupDTO objDto) {
		
		Group obj = service.fromDTO(objDto);
		obj = service.insert(obj);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@RequestMapping(value="/updategroup/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody GroupDTO objDto, @PathVariable String id) {
		
		Group obj = service.fromDTO(objDto);
		obj.setId(id);
		obj = service.update(obj);
		
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(value="/deletegroup/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteById(@PathVariable String id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<GroupDTO> findById(@PathVariable String id) {
		Group obj = service.findById(id);
		return ResponseEntity.ok().body(new GroupDTO(obj));
	}
	
	@RequestMapping(value="/{id}/tasks", method=RequestMethod.GET)
	public ResponseEntity<List<Task>> findTasks(@PathVariable String id) {
		Group obj = service.findById(id);
		return ResponseEntity.ok().body(obj.getTasks());
	}
	

}
