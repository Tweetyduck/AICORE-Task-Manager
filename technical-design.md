# Technical Design: Task Manager Web Application

## Overview
This design describes a web application with a React frontend and Spring Boot backend. The frontend and backend communicate using REST APIs and JSON. The backend stores tasks in an in-memory H2 database.

## Architecture
- Frontend: React.js with TypeScript, built with Vite, styled using TailwindCSS.
- Backend: Spring Boot with Java 17+, built with Maven.
- Database: H2 in-memory database for development and quick setup.
- Communication: REST API with JSON payloads.

## Key Technical Decisions

### Frontend
- Use React components for pages and forms.
- Use TypeScript to catch errors early and keep interfaces clear.
- Implement a single-page flow with a task list view and modals/forms for create/edit.
- Use TailwindCSS for responsive layout and styling.
- Add client-side validation for required fields and character limits.
- Display user-friendly API error messages when backend calls fail.

### Backend
- Use Spring Boot to build REST services quickly.
- Define a `Task` entity with fields: `id`, `title`, `description`, `status`, `dueDate`.
- Use Spring Data JPA and an H2 database for persistence.
- Use Bean Validation annotations on `Task` fields:
  - `@NotBlank` and `@Size(max=100)` for `title`
  - `@Size(max=500)` for `description`
- Create a `TaskController`, `TaskService`, and `TaskRepository`.
- Enable CORS so the frontend on a different port can call the backend.
- Add centralized exception handling to return clear HTTP errors.

### API Endpoints
- GET `/api/tasks` -> list all tasks
- GET `/api/tasks/{id}` -> get a task by ID
- POST `/api/tasks` -> create a new task
- PUT `/api/tasks/{id}` -> update a task
- DELETE `/api/tasks/{id}` -> delete a task

### Deployment Structure
Option A: Single repository with separate folders
- `frontend/` for React app
- `backend/` for Spring Boot app
- This is simple and keeps all code in one place.

Option B: Separate repositories
- Not needed for this task; one repository is easier for the current work.

### UI Behavior Options (for non-programmers)
- Option 1: Show all tasks on one page, with forms appearing inline or in a dialog.
- Option 2: Use separate pages for list and task editing.

Option 1 is easier for users because it keeps everything in one place.

### Sorting and Optional Features
- Minimal design: implement core CRUD first.
- Optional improvement: add sorting by status or due date later if desired.

## Questions for Decision
- Do you want Option A, one repository with `frontend/` and `backend/` folders?
- Do you want the UI to keep task creation and editing on the same screen (recommended) or split into separate pages?
- Should task sorting by status and due date be implemented now, or reserved as an optional enhancement?
- Should the backend support an initial default status of `TODO` automatically when users create tasks without a status?

## Verification Plan
- Confirm the backend API returns JSON and correctly stores tasks in H2.
- Confirm the frontend shows the task list, add/edit/delete controls, validation errors, and API failures.
- Confirm the app works on desktop and mobile screen sizes.
