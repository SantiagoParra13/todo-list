package com.todo.list.controller;

import com.todo.list.models.entity.Task;
import com.todo.list.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public ResponseEntity<List<Task>> getAllTask(){
        return ResponseEntity.ok(taskService.getAll());
    }

    @GetMapping("/{id}")
    public Optional<Task> getOneTask (@PathVariable Long id){
        return taskService.getById(id);
    }

    @PostMapping("/")
    public ResponseEntity<Task> saveTask (@RequestBody Task task){
        Task taskSaved = taskService.save(task);
        return ResponseEntity.ok(taskSaved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask ( @PathVariable Long id, @RequestBody Task task){
        Task taskUpdate = taskService.update(id, task);
        return ResponseEntity.ok(taskUpdate);
    }


    @DeleteMapping("/{id}")
    public void deleteTask (@PathVariable Long id){
        taskService.delete(id);
    }
}
