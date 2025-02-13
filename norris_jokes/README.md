# Random Joke Generator

This is a **JavaScript** project that allows users to generate random jokes with the help of an API. The project displays a joke and has a button to fetch a new one. It also shows a loading animation while waiting for the joke to load. The styling is done using pure **CSS**.

## Features:
- Display random jokes fetched from the Chuck Norris API.
- Generate a new joke with the "Get Joke" button.
- Show a loading animation while waiting for the joke to load.
- Styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/javascript-components/tree/main/norris_jokes)

Once you've downloaded the project folder, follow the steps below to get it up and running.

### 1. Install Dependencies
No external dependencies are required. Simply open the `index.html` file in your browser.

### 2. Run the Project
Open the `index.html` file in a browser to start generating random jokes.

---

## Key Concepts:

### JavaScript Functions
- Dynamically updates the **DOM** when fetching new jokes from the API.

### Event Listeners
- The "Get Joke" button triggers the fetching of a new random joke.
- A loading animation is displayed while the joke is being fetched.

### Fetch API
- The `getRandomJoke` function uses the Fetch API to fetch a random joke from the Chuck Norris jokes API (`https://api.chucknorris.io/jokes/random`).
- Once the joke is fetched, it updates the joke's content on the webpage.

### Pure CSS Styling
- Simple and clean design using **pure CSS** to style the page and loading animation.

## Live Demo
![norris-joke](https://github.com/user-attachments/assets/b17a54c1-8c06-46f8-bd75-d2348c81718f)
- [A Chuck Norris jokes generator using the official Chuck Norris API.](https://starlit-melomakarona-6ce20c.netlify.app/)
