package com.backend.domain;

import java.io.Serializable;

import org.springframework.data.annotation.Id;

import com.backend.dto.TaskDTO;

public class Task implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;
	private String name;
	private String id_group;
	
	public Task() {}

	public Task(String id, String name, String id_group) {
		super();
		this.id = id;
		this.name = name;
		this.id_group = id_group;
	}
	
	public Task(Task obj) {
		super();
		this.id = obj.id;
		this.name = obj.name;
		this.id_group = obj.id_group;
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

	public String getId_group() {
		return id_group;
	}

	public void setId_group(String id_group) {
		this.id_group = id_group;
	}

	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((id_group == null) ? 0 : id_group.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Task other = (Task) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (id_group == null) {
			if (other.id_group != null)
				return false;
		} else if (!id_group.equals(other.id_group))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}


	
}
