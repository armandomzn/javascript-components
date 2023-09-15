import { fetchUsers } from "./fetchUsers.js";
import { getElement } from "./utils/getElement.js";
import { hideLoading } from "./utils/loading.js";

class Pagination {
  constructor(data, itemsPerPage = 10) {
    this.data = data;
    this.pages = [];
    this.index = 0;
    this.itemsPerPage = itemsPerPage;
    this.dataContainer = getElement(".followers-container");
    this.btnContainer = getElement(".btn-container");
    hideLoading();
    this.paginateData();
    this.displayData();
    this.displayButtons();
    this.setListenersBtnContainer();
  }
  displayData() {
    const newData = this.pages[this.index]
      .map((item) => {
        const { avatar_url, html_url, login } = item;
        return `
        <article class="follower">
            <img
            src="${avatar_url}"
            alt="${login}"
            />
            <h3 class="user-name">${login}</h3>
            <a href="${html_url}" target="_blank" class="btn">view profile</a>
        </article>
        `;
      })
      .join("");
    this.dataContainer.innerHTML = newData;
  }
  displayButtons() {
    let btns = this.pages.map((_, index) => {
      return `
        <button class="page-btn ${
          index === this.index ? "active-btn" : ""
        }" data-index=${index}>${index + 1}</button>
        `;
    });
    btns = [
      `<button class="prev-btn"><i class="fa-solid fa-chevron-left"></i></button>`,
      ...btns,
      `<button class="next-btn">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`,
    ].join("");
    this.btnContainer.innerHTML = btns;
  }
  paginateData() {
    const numberOfPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.pages = Array.from({ length: numberOfPages }, (_, index) => {
      // 0 * 5 -> 0
      // 1 * 5 -> 5
      // 2 * 5 -> 10
      const start = index * this.itemsPerPage;
      // (0, 0 + 5)
      // (5, 5 + 5 )
      // (10, 10 + 5 )
      return this.data.slice(start, start + this.itemsPerPage);
    });
  }
  setListenersBtnContainer() {
    this.btnContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-container")) {
        return;
      }
      if (e.target.classList.contains("page-btn")) {
        this.index = parseInt(e.target.dataset.index);
      }
      if (
        e.target.classList.contains("next-btn") ||
        e.target.parentElement.classList.contains("next-btn")
      ) {
        this.index++;
        if (this.index > this.pages.length - 1) {
          this.index = 0;
        }
      }
      if (
        e.target.classList.contains("prev-btn") ||
        e.target.parentElement.classList.contains("prev-btn")
      ) {
        this.index--;
        if (this.index < 0) {
          this.index = this.pages.length - 1;
        }
      }
      this.displayButtons();
      this.displayData();
    });
  }
}

window.addEventListener("load", async (e) => {
  const data = await fetchUsers("https://api.github.com/users?per_page=100");
  new Pagination(data, 10);
});
