package com.todo.list.service.impl;

import com.todo.list.models.entity.Task;
import com.todo.list.repository.TaskRepository;
import com.todo.list.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    @Override
    public Optional<Task> getById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public Task update(Long id, Task updatedTask) {
        Optional<Task> existingTaskOptional = taskRepository.findById(id);

        if (existingTaskOptional.isPresent()) {
            Task existingTask = existingTaskOptional.get();
            existingTask.setTitle(updatedTask.getTitle());
            existingTask.setDescription(updatedTask.getDescription());
            existingTask.setDateTime(updatedTask.getDateTime());
            existingTask.setCompleted(updatedTask.isCompleted());

            return taskRepository.save(existingTask);
        } else {
            return null;
        }
    }


    @Override
    public void delete(Long id) {
        Optional<Task> existingTaskOptional = taskRepository.findById(id);
        existingTaskOptional.ifPresent(taskRepository::delete);
    }

}
