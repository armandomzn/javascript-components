import { menu } from "./data.js";

const menuSection = document.querySelector(".menu-section");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", (e) => {
  displayMenu(menu);
  displayMenuButtons(menu);
});

function displayMenu(menu) {
  let menuItems = menu.map((item) => {
    return `
        <article class="menu-item">
            <img
              src=${item.img}
              alt=${item.title}
              class="menu-photo"
            />
            <div class="menu-info">
              <header>
                <h5>${item.title}</h5>
                <span class="menu-price"> $${item.price.toFixed(2)} </span>
              </header>
              <p class="menu-description">
                ${item.desc}
              </p>
            </div>
          </article>
        `;
  });
  menuItems = menuItems.join("");
  menuSection.innerHTML = menuItems;
}

function displayMenuButtons(menu) {
  let uniqueCategories = menu.reduce(
    (prevMenuItem, currentMenuItem) => {
      if (!prevMenuItem.includes(currentMenuItem.category)) {
        return [...prevMenuItem, currentMenuItem.category];
      }
      return [...prevMenuItem];
    },
    ["all"]
  );
  const categoriesBtns = uniqueCategories
    .map((category) => {
      return `<button class="filter-btn btn" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoriesBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      if (category === "all") {
        displayMenu(menu);
        return;
      }
      const newCategories = menu.filter((item) => {
        return item.category === category;
      });
      displayMenu(newCategories);
    });
  });
}
