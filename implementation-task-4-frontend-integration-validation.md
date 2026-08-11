# Implementation Task 4: Frontend API Integration & Validation

## Goal
Connect the frontend UI to the backend API and implement validation/error handling.

## Copilot Prompt
Implement frontend API integration and task form validation.
- Add API calls to fetch all tasks from `GET /api/tasks`.
- Add API calls to create, update, and delete tasks using the backend endpoints.
- Populate the task list from backend data.
- Allow editing an existing task and saving changes.
- Show clear client-side validation errors when:
  - title is missing
  - title exceeds 100 characters
  - description exceeds 500 characters
- Display backend error messages when API calls fail.

## Acceptance Criteria
- Frontend fetches and displays backend task data.
- The user can create, edit, and delete tasks through the UI.
- Validation errors appear before the API call is made.
- Backend failure responses are shown in the UI as user-friendly messages.

## Verification Steps (Non-Programmer Friendly)
1. Start both backend and frontend apps.
2. Open the frontend in a browser.
3. Create a new task and verify it appears in the task list.
4. Edit an existing task and verify the change updates immediately.
5. Delete a task and confirm it disappears from the list.
6. Enter invalid input in the form and verify the page shows a clear validation message.
7. Stop the backend and refresh the frontend; verify the app shows a clear error message rather than crashing.