package com.backend.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.backend.domain.Group;
import com.backend.domain.Task;
import com.backend.dto.TaskDTO;
import com.backend.repository.GroupRepository;
import com.backend.repository.TaskRepository;

@Configuration
public abstract class Instantiation implements CommandLineRunner {

	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@Override
	public void run(String... args) throws Exception {
		groupRepository.deleteAll();
		taskRepository.deleteAll();
		
		Group group = new Group(null, "To do");
		Group group2 = new Group(null, "Done");
		
		groupRepository.saveAll(Arrays.asList(group,group2));
		
		Task task = new Task(null, "Implements backend", group2.getId());
		Task task2 = new Task(null, "Implements frontend", group.getId());
		
		
		taskRepository.saveAll(Arrays.asList(task, task2));
		group.getTasks().addAll(Arrays.asList(task2));
		
		groupRepository.save(group);
	}

}
