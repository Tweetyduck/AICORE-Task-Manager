package com.example.taskmanager.service;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    public Task findById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id " + id));
    }

    public Task save(Task task) {
        return taskRepository.save(task);
    }

    public Task update(Long id, Task task) {
        Task existing = findById(id);
        existing.setTitle(task.getTitle());
        existing.setDescription(task.getDescription());
        existing.setStatus(task.getStatus());
        existing.setDueDate(task.getDueDate());
        return taskRepository.save(existing);
    }

    public void delete(Long id) {
        Task existing = findById(id);
        taskRepository.delete(existing);
    }
}
