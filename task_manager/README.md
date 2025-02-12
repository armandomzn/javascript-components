# Task Manager

This is a **JavaScript** project that allows users to manage tasks. The application lets users add tasks, edit them, mark them as completed, delete tasks, and store the data persistently in **localStorage**. The project also uses pure **CSS** for styling.
## Features:
- Add, edit, and delete tasks.
- Mark tasks as completed.
- Alerts for user actions such as adding, editing, or deleting tasks.
- Task list is stored in localStorage to persist data between page reloads.
- Styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/javascript-components/tree/main/task_manager)

Once you've downloaded the project folder, follow the steps below to get it up and running.

### 1. Install Dependencies
No external dependencies are required. Simply open the `index.html` file in your browser.

### 2. Run the Project
Open the `index.html` file in a browser to view the proyect.

---

## Key Concepts:

### JavaScript Functions
- Dynamically adds tasks to the DOM.
- Handles editing and deleting tasks.
- Keeps track of tasks and their completion state.
- Displays alerts for user actions like task creation, update, or removal.

### Event Listeners
- `taskForm` listens for form submissions to add or edit tasks.
- `clearBtn` listens for a click event to remove all tasks.
- `DOMContentLoaded` event ensures tasks are loaded from localStorage when the page loads.

### Task Management
- Add new tasks by filling in the form and clicking "submit".
- Edit existing tasks by clicking the edit button.
- Mark tasks as completed using the checkbox.
- Remove tasks using the delete button.
- All tasks are stored and retrieved from localStorage.

### LocalStorage
- Tasks are saved in localStorage to persist data even when the page is reloaded.
- Tasks include properties like id, value (task description), and completed (task status).

### Pure CSS Styling
- Simple and clean design with CSS to style the task manager interface.

## Live Demo
![task_manager](https://github.com/user-attachments/assets/b7b78202-682e-46a4-9cbd-21215531d495)
- [Task manager using local storage](https://eloquent-cassata-5ab73c.netlify.app/)
