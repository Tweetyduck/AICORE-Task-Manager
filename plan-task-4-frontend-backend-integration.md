# Plan Task 4: Frontend-Backend Integration

## Objective
Plan the task manager frontend integration with backend API endpoints, including validation and error display.

## What to build
- Implement API service functions to call backend endpoints:
  - fetch all tasks
  - get task by ID
  - create task
  - update task
  - delete task
- Connect task list rendering to backend data.
- Hook form submit logic to create/update APIs.
- Handle delete actions through the backend.
- Show client-side validation errors before submitting.
- Display backend error messages in the UI.

## Implementation plan
1. Add an API helper module in `frontend/src/api/tasks.ts`.
2. Implement functions for CRUD operations using `fetch` or `axios`.
3. Load tasks on page mount and render them in `TaskList`.
4. Add form handlers in `TaskForm` for create and edit.
5. Validate inputs locally for required title and length rules.
6. Add error display areas for API failures and validation messages.
7. Refresh task list after successful create, update, or delete.

## Verification
- The frontend displays tasks returned by the backend.
- Creating a task through the UI saves it in the backend.
- Editing a task updates it in the backend and UI.
- Deleting a task removes it from both backend and UI.
- Validation errors appear before submission.
- Backend failure responses show a readable error message.

## Outcome
A fully connected task manager UI where frontend actions translate into real backend work.