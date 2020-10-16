package com.backend.dto;

import java.io.Serializable;

import com.backend.domain.Group;

public class TaskDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String id;
	private String name;
	
	public TaskDTO() {}
	
	public TaskDTO(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public TaskDTO(Group obj) {
		super();
		this.id = obj.getId();
		this.name = obj.getName();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
