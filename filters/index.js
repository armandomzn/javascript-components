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
const form = document.querySelector(".project-form");
const searchInput = document.querySelector(".search-input");
form.addEventListener("keyup", (e) => {
  const value = `${searchInput.value
    .charAt(0)
    .toUpperCase()}${searchInput.value.substring(1)}`;
  filterProjects = projects.filter((project) => {
    return []
      .concat(project.technologiesUsed)
      .map((p) => {
        return p.toLowerCase();
      })
      .some((fItem) => fItem.includes(value.toLowerCase()));
  });
  if (filterProjects.length === 0) {
    projectSection.innerHTML = `<h5 class="not-found">Sorry, no projects matched your search...</h5>`;
    return;
  }
  displayProjects();
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
  switch (e.target.dataset.id) {
    case "all":
      filterProjects = [...projects];
      break;
    default:
      filterProjects = projects.filter((project) => {
        for (const iterator of project.technologiesUsed) {
          if (iterator === e.target.dataset.id) {
            return project;
          } else {
            continue;
          }
        }
      });
  }
  searchInput.value = "";
  displayProjects();
});
