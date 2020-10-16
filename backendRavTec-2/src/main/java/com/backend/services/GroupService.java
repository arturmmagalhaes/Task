package com.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.domain.Group;
import com.backend.dto.GroupDTO;
import com.backend.repository.GroupRepository;
import com.backend.services.exception.ObjectNotFoundException;

@Service
public class GroupService {
	
	@Autowired
	private GroupRepository repo;
	
	public List<Group> findAll(){
		return repo.findAll();
	}
	
	public Group findById(String id) {
		Group group = repo.findById(id).orElse(null);
		if(group == null) {
			throw new ObjectNotFoundException("Grupo não encontrado");
		}
		return group;
	}
	
	public Group insert(Group obj) {
		return repo.insert(obj);
	}
	
	public Group update(Group obj) {
		Group newObj = repo.findById(obj.getId()).orElse(null);
		updateData(newObj, obj);
		return repo.save(newObj);
	}
	
	private void updateData(Group newObj, Group obj) {
		newObj.setName(obj.getName());
	}

	public void delete(String id) {
		findById(id);
		repo.deleteById(id);
	}
	
	public Group fromDTO(GroupDTO objDto) {
		return new Group(objDto.getId(), objDto.getName());
	}
}
