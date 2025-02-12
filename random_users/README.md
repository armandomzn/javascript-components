# Random User Display

This is a **JavaScript** project that allows users to display random user data (name, email, age, location, phone, etc.) fetched from the RandomUser API. The project includes the ability to display a random user on page load and on a button click. The layout and styles are done using pure **CSS**.

## Features:
- Fetch and display random user information, including name, age, email, street, phone, and more.
- Display a user image along with their details.
- Allows navigation between different user details (name, email, age, street, phone, password) using buttons.
- Styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/javascript-components/tree/main/random_users)

Once you've downloaded the project folder, follow the steps below to get it up and running.

### 1. Install Dependencies
No external dependencies are required. Simply open the `index.html` file in your browser.

### 2. Run the Project
Open the `index.html` file in a browser to view the project.

---

## Key Concepts:

### JavaScript Functions
- **Display User**: The `displayUser` function dynamically updates the **DOM** with the fetched random user's details.
- **Fetch User**: The `fetchRandomUser` function fetches random user data from the `https://randomuser.me/api/` endpoint.

### Event Listeners
- **Button Click**: The button triggers a fetch for a new random user, and the user details are updated in the DOM.
- **Detail Navigation**: Users can navigate between different user details (name, age, etc.) by clicking on respective buttons.

### Fetch API
- The `fetchRandomUser` function uses the Fetch API to retrieve random user data and display it.

### Pure CSS Styling
- The project uses **pure CSS** to style the user data display, buttons, and layout.

## Live Demo
![random-user](https://github.com/user-attachments/assets/ddecaf22-c14e-4d32-95d4-56f670903814)
- [Fetching data from random user api](https://shiny-paprenjak-dd71ec.netlify.app/)
