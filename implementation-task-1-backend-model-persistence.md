# Implementation Task 1: Backend Model & Persistence

## Goal
Implement the core backend data model and persistence layer for the Task Manager application.

## Copilot Prompt
Create the Spring Boot backend entities and persistence components for tasks.
- Implement `Task` as a JPA entity with fields: `id`, `title`, `description`, `status`, `dueDate`.
- Use `Long` for `id` with auto-generation.
- Use Bean Validation annotations:
  - `@NotBlank` and `@Size(max = 100)` for `title`
  - `@Size(max = 500)` for `description`
- Represent status as an enum with values `TODO`, `IN_PROGRESS`, `DONE`.
- Ensure a new task defaults to `TODO` when status is not provided.
- Add `TaskRepository` extending `JpaRepository<Task, Long>`.
- Add `TaskService` with methods: `findAll()`, `findById(Long id)`, `save(Task task)`, `update(Long id, Task task)`, `delete(Long id)`.
- Configure the backend to use H2 in-memory database.

## Acceptance Criteria
- `Task` entity exists and is annotated for JPA persistence.
- Validation constraints are present on title and description.
- `TaskRepository` and `TaskService` exist and compile.
- New tasks default to `TODO` status.
- H2 database is configured and ready for runtime.

## Verification Steps (Non-Programmer Friendly)
1. Start the backend application.
2. Verify that the backend starts without error.
3. Use a simple API client or browser-based REST tool to create a task with a valid title.
4. Confirm the backend returns a task object with an `id` and `status: TODO`.
5. Try to create a task without a title and confirm the backend returns a clear validation error like "Title is required."