# User Story: Task Manager Web Application

## Summary
As a user, I want a simple task manager web application so I can create, view, update, and delete tasks in one place.

## Goals
- Users can manage tasks with basic CRUD operations.
- Tasks should include a title, optional description, status, and optional due date.
- The interface should be easy to use and work on desktop and mobile devices.

## Acceptance Criteria
1. The home page lists all tasks with:
   - title
   - status
   - due date (if set)
   - description (optional)
2. Users can add a new task using a form with:
   - required title (max 100 characters)
   - optional description (max 500 characters)
   - status selection from TODO, IN_PROGRESS, DONE
   - optional due date
3. Users can edit any existing task and change any field, including status.
4. Users can delete a task.
5. The form shows validation errors when:
   - title is missing
   - title exceeds 100 characters
   - description exceeds 500 characters
6. The user sees a clear error message if the backend API fails.
7. The backend provides REST endpoints for:
   - retrieving all tasks
   - retrieving a task by ID
   - creating a task
   - updating a task
   - deleting a task
8. The backend validates task input and uses an in-memory H2 database.
9. The app supports API communication from the frontend to the backend with CORS enabled.

## Questions for Decision
- Should task sorting by status or due date be included in the first version, or should it remain an optional enhancement?
- Should the frontend and backend be organized separately within one repository (for example, `frontend/` and `backend/` folders)?
- Should due date remain strictly optional, or do you want a different default behavior around dates?
- Should task status default to `TODO` when a new task is created if the user does not select a status?

## Notes
- Search and task categorization are optional bonus features and will not be included in the initial core user story unless you want them now.
