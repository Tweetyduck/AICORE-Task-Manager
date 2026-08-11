# Plan Task 1: Backend Model and Persistence

## Objective
Plan the implementation of the backend task model and persistence layer for the Task Manager application.

## What to build
- Define the `Task` entity in Java with fields:
  - `id`: Long, auto-generated
  - `title`: String, required, max 100 chars
  - `description`: String, optional, max 500 chars
  - `status`: enum with `TODO`, `IN_PROGRESS`, `DONE`
  - `dueDate`: LocalDate, optional
- Add validation annotations to enforce required fields and length limits.
- Configure the `Task` entity for JPA persistence.
- Create `TaskRepository` as a Spring Data JPA repository.
- Create `TaskService` with methods for list, get, save, update, and delete.
- Ensure the default task status is `TODO` when not explicitly set.
- Configure H2 in-memory database support for development.

## Implementation plan
1. Create or update the `Task` entity class in `backend/src/main/java/.../model/Task.java`.
2. Add the `Status` enum inside the `Task` class or as a separate type.
3. Annotate fields with `@Entity`, `@Table`, `@Id`, `@GeneratedValue`, and validation annotations.
4. Add `TaskRepository` in `backend/src/main/java/.../repository/TaskRepository.java`.
5. Implement `TaskService` in `backend/src/main/java/.../service/TaskService.java`.
6. Add H2 configuration to `application.properties` or `application.yml`.

## Verification
- The backend compiles successfully.
- A task object persists in H2 when saved.
- A created task receives an auto-generated ID.
- A task created without status uses `TODO`.
- A task with a missing title fails validation with a clear error.

## Outcome
A stable backend data model and persistence foundation, ready for REST API routing and frontend usage.