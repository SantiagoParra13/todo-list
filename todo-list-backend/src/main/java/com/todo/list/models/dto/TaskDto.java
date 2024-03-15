package com.todo.list.models.dto;

import java.time.LocalDateTime;

public class TaskDto {

    private Long id;

    private String title;
    private String description;
    private LocalDateTime dateTime;
    private boolean completed;
}
