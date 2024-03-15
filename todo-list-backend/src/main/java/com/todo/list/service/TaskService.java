package com.todo.list.service;

import com.todo.list.models.dto.TaskDto;
import com.todo.list.models.entity.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    Task save (Task task);
    List<Task> getAll();
    Optional<Task> getById(Long id);
    Task update(Long id, Task task);
    void delete (Long id);
}
