# Pagination

This is a **JavaScript** project that implements pagination for displaying a list of users from GitHub. The project fetches user data from the GitHub API and displays them in paginated format with the ability to navigate between pages using buttons. The pagination also allows users to view each user's profile by clicking a "view profile" button. The project uses **CSS** for styling.

## Features:
- Fetch and display a list of users from the GitHub API.
- Paginate the list of users, displaying 10 users per page by default.
- Navigate between pages using Previous and Next buttons.
- Dynamically update the displayed user data and pagination buttons.
- Styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/javascript-components/tree/main/pagination)

Once you've downloaded the project folder, follow the steps below to get it up and running.

### 1. Install Dependencies
No external dependencies are required. Simply open the `index.html` file in your browser.

### 2. Run the Project
Open the `index.html` file in a browser to view the project.

---

## Key Concepts:

### JavaScript Functions
- **Pagination Logic**: The `Pagination` class handles the data pagination, updates the DOM to display users, and manages the navigation buttons.
- **Fetching Data**: The `fetchUsers` function is responsible for fetching user data from the GitHub API.
- **Dynamic DOM Updates**: The pagination logic dynamically updates the page content and navigation buttons based on the current page index.

### Event Listeners
- **Pagination Buttons**: Event listeners are attached to the pagination buttons (Previous, Next, and page number buttons) to change the current page and update the displayed user data.

### Fetching Data from GitHub API
- **GitHub API**: The project fetches user data from the GitHub API using the `fetch` method. The `fetchUsers` function handles the API request and returns the user data in JSON format.

### Pure CSS Styling
- Simple and clean design with CSS to style the user list, pagination buttons, and loading spinner.

## Live Demo
![pagination](https://github.com/user-attachments/assets/8a467850-b3c5-4515-aa14-91c3fdc37152)
- [Pagination project using github api to fetch some random users and display the data through a class that controls the pagination](https://unrivaled-speculoos-43cbc9.netlify.app/)
