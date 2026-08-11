# Plan Task 2: Backend REST API and Error Handling

## Objective
Plan the backend REST API implementation and error handling for task operations.

## What to build
- Create a REST controller for task CRUD endpoints under `/api/tasks`.
- Support:
  - `GET /api/tasks`
  - `GET /api/tasks/{id}`
  - `POST /api/tasks`
  - `PUT /api/tasks/{id}`
  - `DELETE /api/tasks/{id}`
- Wire controller methods to `TaskService` operations.
- Enable CORS for the frontend origin.
- Add exception handlers for:
  - validation errors
  - task not found errors
  - generic server errors

## Implementation plan
1. Add `TaskController` in `backend/src/main/java/.../controller/TaskController.java`.
2. Define request and response mappings for each CRUD method.
3. Use `@CrossOrigin` or global CORS configuration.
4. Add a centralized exception handler class in `backend/src/main/java/.../exception/`.
5. Handle `MethodArgumentNotValidException`, `TaskNotFoundException`, and other runtime exceptions.
6. Return consistent JSON error responses with clear messages.

## Verification
- All API endpoints respond to HTTP requests.
- `GET /api/tasks` returns a JSON task list.
- `POST /api/tasks` creates tasks and returns the saved object.
- `PUT /api/tasks/{id}` updates tasks when valid.
- `DELETE /api/tasks/{id}` removes tasks.
- Nonexistent task requests return a clear 404-style message.
- Invalid payloads return JSON detailing validation issues.

## Outcome
A robust backend interface that safely exposes task operations and returns user-friendly error responses.