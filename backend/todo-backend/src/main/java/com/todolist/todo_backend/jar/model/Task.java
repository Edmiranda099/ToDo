package com.todolist.todo_backend.jar.model;

public class Task {
    private Long id;
    private String title;
    private boolean completed;

    public Task() {

    }

    public Task(Long id, String Title, boolean completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
