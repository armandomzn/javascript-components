import { data } from "./data.js";

window.addEventListener("load", (e) => {
  createButtons(data);
  createArticles(data);
  changeTab(data);
});

function createButtons(data) {
  let btns = data.map((btn, index) => {
    return `
        <button class="btn ${
          index === data.length - 1 ? "active-btn" : ""
        } job-btn" data-id="${btn.id}">
        ${btn.company}
        </button> 
        `;
  });
  btns = btns.reverse().join("");
  document.querySelector(".btn-container").innerHTML = btns;
}

function createArticles(data) {
  let articles = data
    .map((item, index) => {
      return `
    <article class="${index !== 0 ? "content" : ""} job" id="${item.id}">
    <h3>${item.title}</h3>
    <div class="job-info">
      <span> ${item.company} </span>
      <p class="job-date">${item.date}</p>
    </div>
    <div class="job-activities">
      <ul>
      ${item.activities
        .map((activity) => {
          return `
          <li class="job-activity">
        <span class="arrow-icon">
          <i class="fa-solid fa-right-left"></i>
        </span>
       ${activity}
      </li>`;
        })
        .join("")}
      </ul>
    </div>
  </article>
`;
    })
    .join("");
  document.querySelector(".job-container").innerHTML = articles;
}

function changeTab() {
  const btnContainer = document.querySelector(".btn-container");
  const btns = document.querySelectorAll(".job-btn");
  btnContainer.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      btns.forEach((btn) => {
        btn.classList.remove("active-btn");
      });
      e.target.classList.add("active-btn");
      document.querySelectorAll(".job").forEach((article) => {
        article.classList.remove("content");
        article.classList.add("content");
      });
      const element = document.getElementById(id);
      element.classList.remove("content");
    }
  });
}
