package com.revature.Revagenda.entities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity(name = "tasks")
public class Task {
    @Id
    @Column(name = "task_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taskId;

    @Column(nullable = false)
    private String title;

    @Column
    private String description;

    @Column
    private String due;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    @Column
    private boolean complete;

    public Task() {
    }

    public Task(String title, String description, String due, boolean complete) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.complete = complete;
    }

    public Task(String title, String description, String due, User user, boolean complete) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.user = user;
        this.complete = complete;
    }

    public Task(Integer taskId, String title, String description, String due, User user, boolean complete) {
        this.taskId = taskId;
        this.title = title;
        this.description = description;
        this.due = due;
        this.user = user;
        this.complete = complete;
    }

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDue() {
        return due;
    }

    public void setDue(String due) {
        this.due = due;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return complete == task.complete && Objects.equals(taskId, task.taskId) && Objects.equals(title, task.title) && Objects.equals(description, task.description) && Objects.equals(due, task.due) && Objects.equals(user, task.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, title, description, due, complete);
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", due='" + due + '\'' +
                ", complete=" + complete +
                '}';
    }
}
