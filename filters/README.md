# Projects Filter

This is a **JavaScript** project that allows users to filter and display projects based on the technologies used. The project includes functionality to filter projects by technology using both a search bar and technology buttons. It dynamically generates project cards with images, descriptions, and other project details. The styling is done using pure **CSS**.
## Features:
- Display projects with name, description, lead, images, and technologies used.
- Filter projects by technology using the search bar or technology buttons.
- Display a message if no projects match the search criteria.
- Styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/javascript-components/tree/main/filters)

Once you've downloaded the project folder, follow the steps below to get it up and running.

### 1. Install Dependencies
No external dependencies are required. Simply open the `index.html` file in your browser.

### 2. Run the Project
Open the `index.html` file in a browser to view the project.

---

## Key Concepts:

### JavaScript Functions
- Displaying Projects:

    - The projects are dynamically rendered in the DOM, displaying each project's name, description, lead, images, and technologies used.

- Filtering Projects:

  - Projects can be filtered based on the technologies used either by typing in the search input or by clicking the technology buttons.
  - The filtering is done by matching the input text or selected technology with the project’s technologies.

- Search Bar Functionality:

    - The search input allows filtering based on the technologies used. It updates in real-time with a slight delay (debounced) to reduce unnecessary filtering calls.

- Dynamic Technology Buttons:

    - Technology buttons are dynamically generated, allowing users to filter projects based on the selected technology.
### Event Listeners
- Search Input:

    - The search input listens for keyup events and filters the projects based on the technologies used. It includes a 2-second debounce to optimize performance.

- Technology Buttons:

    - The buttons for each technology are dynamically created. Clicking a button will filter the projects based on the selected technology.

### Dynamic Content Rendering
- HTML Templates:
  - The project cards and buttons are dynamically created using JavaScript by mapping over the project data and technology list.

- Filter Logic:
  - The project list is updated based on user interaction with the search input or technology buttons. The projects are filtered by matching the technologies used.

### Pure CSS Styling
- Simple and clean design using pure **CSS** to style the project cards and technology buttons.

## Live Demo
![filters](https://github.com/user-attachments/assets/e776a4a8-2072-4290-8928-165de753ba7f)
- [A filtering system that uses ES6 methods for data manipulation.](https://earnest-sfogliatella-bdd278.netlify.app/)
