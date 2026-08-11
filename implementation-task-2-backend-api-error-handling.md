# Implementation Task 2: Backend API & Error Handling

## Goal
Build the backend REST API and add API-level error handling for the Task Manager.

## Copilot Prompt
Implement the Task controller and centralized exception handling.
- Create `TaskController` exposing REST endpoints under `/api/tasks`:
  - `GET /api/tasks`
  - `GET /api/tasks/{id}`
  - `POST /api/tasks`
  - `PUT /api/tasks/{id}`
  - `DELETE /api/tasks/{id}`
- Wire controller methods to `TaskService`.
- Return appropriate HTTP status codes for success and error cases.
- Enable CORS so the frontend can call backend APIs from a different port.
- Add centralized exception handling to return user-friendly JSON errors for:
  - validation failures
  - task not found
  - generic server errors

## Acceptance Criteria
- All CRUD endpoints exist and are routable.
- CORS is enabled for frontend requests.
- Validation failures return clear error responses.
- Missing task IDs return a meaningful "not found" message.
- The backend returns JSON for both success and error responses.

## Verification Steps (Non-Programmer Friendly)
1. Start the backend application.
2. Confirm `GET /api/tasks` returns an empty list or existing tasks.
3. Create a task using `POST /api/tasks` and verify the response is successful.
4. Request a non-existing task ID and confirm the response includes a clear message like "Task not found." 
5. Send an invalid task payload (missing title) and verify the response clearly says the title is required.