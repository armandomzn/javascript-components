# Cocktail API

This is a **JavaScript** project that allows users to search and view cocktail recipes using the CocktailDB API. Users can search for cocktails by name and view details of a selected cocktail, including ingredients, instructions, and more. The project also uses **pure CSS** for styling.

## Features:
- Search for cocktails by name.
- Display cocktail details including ingredients, instructions, and more.
- Show a list of cocktails with a "more info" button to view individual cocktail details.
- Styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/javascript-components/tree/main/cocktail_api)

Once you've downloaded the project folder, follow the steps below to get it up and running.

### 1. Install Dependencies
No external dependencies are required. Simply open the `index.html` file in your browser.

### 2. Run the Project
Open the `index.html` file in a browser to view the project.

---

## Key Concepts:

### JavaScript Functions
- **Fetching Cocktail Data**: The `fetchData` function retrieves cocktail data from the CocktailDB API using the fetch API.
- **Displaying Cocktails**: The `displayCocktails` function dynamically updates the **DOM** to display the fetched cocktails and their details.
- **Displaying Single Drink**: The `displayDrink` function displays details of a selected cocktail, including ingredients and instructions.

### Event Listeners
- **Form Submission**: The form allows users to search for cocktails by name. Upon submission, it fetches and displays matching cocktails.
- **Click on "More Info"**: Clicking on a cocktail's "More Info" button stores the cocktail ID in `localStorage` and redirects to a page with detailed information about the selected cocktail.

### API Calls
- The app fetches cocktail data from the CocktailDB API at `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` for searching cocktails by name, and `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` for fetching details of a single cocktail by ID.

### Pure CSS Styling
- Simple and clean design with CSS to style the cocktail cards, form inputs, and other page elements.

## Live Demo
![cocktail-api](https://github.com/user-attachments/assets/8eeee434-28e4-4b99-a6ca-c4134668ee80)
![cocktail-api-1](https://github.com/user-attachments/assets/a2bde403-3119-42aa-87d2-508ecb1a6d1f)
- [Fetching and displaying cocktail recipes based on API data.](https://main--subtle-wisp-0dfd74.netlify.app/)
