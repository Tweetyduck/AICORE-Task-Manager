# Implementation Task 3: Frontend UI Structure

## Goal
Create the initial frontend React UI for listing tasks and showing a task form.

## Copilot Prompt
Build the React frontend skeleton for the Task Manager.
- Scaffold a Vite + React + TypeScript app in the `frontend/` folder.
- Create a main task list page that can display tasks.
- Add a form component or modal for creating/editing tasks with fields:
  - title
  - description
  - status dropdown
  - due date
- Style the page with TailwindCSS for a clean responsive layout.
- Show an empty state when no tasks exist.
- Add client-side validation hints for required fields and maximum lengths.

## Acceptance Criteria
- Frontend app starts and renders a task list page.
- Form fields are present and labeled clearly.
- The page works on desktop and mobile screen widths.
- The UI can show an empty task list state.

## Verification Steps (Non-Programmer Friendly)
1. Start the frontend development server.
2. Open the app in a browser.
3. Confirm you see a task list area and a visible form or button to add a task.
4. Confirm the form shows labels and placeholders for title, description, status, and due date.
5. Resize the browser window and verify the layout remains readable on smaller screens.