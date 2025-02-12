import { projects } from "./data.js";
let filterProjects = [...projects];
const projectSection = document.querySelector(".project-section");
const displayProjects = () => {
  projectSection.innerHTML = filterProjects
    .map(({ id, name, description, lead, technologiesUsed, images }) => {
      return `        
    <article class="project" data-id="${id}">
    <div class="img-container">
    ${images
      .map((image) => {
        return `
        <img
          src="${image}"
          alt="project"
        />
        `;
      })
      .join("")}
    </div>
    <div class="project-lead">
      <h5>${name}</h5>
      <h5>lead: ${lead}</h5>
    </div>
    <div class="project-info">
      <p>
        ${description}
      </p>
    </div>
      <footer class="project-technologies">
      ${technologiesUsed
        .map((technology) => {
          return `<div class="technology">${technology}</div>`;
        })
        .join("")}
      </footer>
  </article>`;
    })
    .join("");
};
displayProjects();

// text filter
let timeout;
const form = document.querySelector(".project-form");
const searchInput = document.querySelector(".search-input");
form.addEventListener("keyup", (e) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  const value = searchInput.value.trim().toLowerCase();
  timeout = setTimeout(() => {
    filterProjects = projects.filter((project) => {
      return project.technologiesUsed.some((tech) => {
        return tech.toLowerCase().includes(value);
      });
    });
    if (filterProjects.length === 0) {
      projectSection.innerHTML = `<h5 class="not-found">Sorry, no projects matched your search...</h5>`;
      return;
    }
    displayProjects();
  }, 2000);
});

const technologiesContainer = document.querySelector(".btn-container");
const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(
      projects.reduce((prev, current) => {
        return [
          ...prev,
          ...current.technologiesUsed.map((technology) => technology),
        ];
      }, [])
    ),
  ];

  technologiesContainer.innerHTML = buttons
    .map((button) => {
      return `<button type="button" class="project-btn" data-id="${button}">${button}</button>`;
    })
    .join("");
};

displayButtons();

technologiesContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("project-btn")) {
    return;
  }
  const targetId = e.target.dataset.id;
  if (targetId === "all") {
    filterProjects = [...projects];
  } else {
    filterProjects = projects.filter((project) => {
      return project.technologiesUsed.some((tech) => {
        return tech === targetId;
      });
    });
  }
  searchInput.value = "";
  displayProjects();
});
