# Strapi Menu

This is a **JavaScript** project that allows users to display a responsive sidebar with navigation links. The sidebar contains a list of page links, which can be dynamically generated. It also includes a dropdown submenu for each navigation link that has nested links, and the submenu appears when a user hovers over a link. The sidebar is styled using **pure CSS** for a clean and simple design.

## Features:
- Display a responsive sidebar with page links.
- Display dropdown submenus for links with nested links.
- Show and hide the sidebar with the toggle button.
- Styled using pure CSS for a clean, minimal look.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/javascript-components/tree/main/strapi_menu)

Once you've downloaded the project folder, follow the steps below to get it up and running.

### 1. Install Dependencies
No external dependencies are required. Simply open the `index.html` file in your browser.

### 2. Run the Project
Open the `index.html` file in a browser to view the project.

---

## Key Concepts:

### JavaScript Functions
- **Dynamic Navigation Links**: The `displayNavLinks` and `displaySidebarLinks` functions dynamically populate the sidebar and navigation links based on data from `pageLinks`.
- **Hover Events for Submenu**: When hovering over a navigation link, a submenu appears, displaying links associated with that page. This submenu is generated dynamically based on the `pageLinks` data.
- **Sidebar Toggle**: The sidebar visibility is controlled by the `sidebarButton` and `closeBtn`, allowing users to toggle the sidebar's visibility.

### Event Listeners
- **Sidebar Toggle**: The `sidebarButton` opens the sidebar when clicked, while the `closeBtn` closes it.
- **Hover on Navigation Links**: When a user hovers over a navigation link, the corresponding submenu appears. When the mouse leaves the link, the submenu disappears.

### Submenu Generation
- **Responsive Submenus**: The submenu's layout is determined by the number of nested links in the corresponding page. If there are three or more nested links, the submenu is displayed in two columns; otherwise, it displays in one column.

### Pure CSS Styling
- Simple and clean design with CSS for styling the navigation links, sidebar, and submenus.

## Live Demo
![strapi-menu-1](https://github.com/user-attachments/assets/78d66bc2-631e-473f-99fb-0f79ae07d777)
![strapi-menu-2](https://github.com/user-attachments/assets/39b494a5-e75d-4f89-aa0d-d450a512c95e)
- [A dynamic menu that fetches data from a data.js file and adapts its layout based on the screen size.](https://animated-sunburst-47a37e.netlify.app/)

