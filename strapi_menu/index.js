import { pageLinks } from "./data.js";

const navLinks = document.querySelector(".nav-links");
const sidebarLinks = document.querySelector(".sidebar-links");
const closeBtn = document.querySelector(".close-btn");
const sidebarButton = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");
const submenu = document.querySelector(".submenu");

const displayNavLinks = () => {
  navLinks.innerHTML = pageLinks
    .map((link) => {
      return `<li class="nav-link">${link.pageName}</li>`;
    })
    .join("");
};
const displaySidebarLinks = () => {
  sidebarLinks.innerHTML = pageLinks
    .map((item) => {
      return `
    <article>
        <h4>${item.pageName}</h4>
        <ul class="sidebar-sublinks">
            ${item.links
              .map((link) => {
                return `
                <li>
                    <a href="${link.url}"><i class="${link.icon}"></i> <span class="sidebar-sublink-text">${link.label}</span></a>
                </li>
            `;
              })
              .join("")}
        </ul>
    </article>
    `;
    })
    .join("");
};

displayNavLinks();
displaySidebarLinks();

closeBtn.addEventListener("click", (e) => {
  sidebar.classList.remove("show-sidebar");
});

sidebarButton.addEventListener("click", (e) => {
  sidebar.classList.add("show-sidebar");
});

// mouseover event for navbar links
[...document.querySelectorAll(".nav-links li")].forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    const navText = e.currentTarget.textContent;
    const findMenu = pageLinks.find(({ pageName }) => {
      return pageName === navText;
    });
    if (!findMenu) {
      return;
    }
    // second version, this center the submenu container to the current active link, we need to quit the max-width and width from the styles.css to take effect and avoid overflow
    // const tempPosition = e.currentTarget.getBoundingClientRect();
    // const center = (tempPosition.left + tempPosition.right) / 2;
    let columns = findMenu.links.length >= 3 ? "2" : "1";

    submenu.innerHTML = `
    <h5>${findMenu.pageName}</h5>
    <ul class="submenu-links" style="grid-template-columns:repeat(${columns},1fr)">
    ${findMenu.links
      .map((link) => {
        return `
        <li>
          <a href="${link.url}">
            <i class="${link.icon}" aria-hidden="true"></i> <span class="submenu-sublink-text">${link.label}</span>
          </a>
        </li>
      `;
      })
      .join("")}
    </ul>
    `;
    // second version
    // submenu.style.left = `${center}px`
    submenu.classList.add("show-submenu");
  });
});

navLinks.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("nav-link")) {
    submenu.classList.remove("show-submenu");
  }
});

submenu.addEventListener("mouseleave", (e) => {
  const { right, left, bottom } = submenu.getBoundingClientRect();
  // targets for the mouse event
  const { clientX, clientY } = e;
  if (clientX >= right || clientX < left || clientY > bottom) {
    submenu.classList.remove("show-submenu");
  }
});
