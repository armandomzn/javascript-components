import { getElement } from "./getElement.js";

const img = getElement(".random-user-img");
const title = getElement(".title");
const value = getElement(".value");
const btns = [...document.querySelectorAll(".icon")];

export const displayUser = (user) => {
  img.src = user.img;
  title.textContent = `My name is:`;
  value.textContent = `${user.name}`;
  getElement(".active").classList.remove("active");
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const label = btn.dataset.title;
      title.textContent = `My ${label} is:`;
      value.textContent = user[label];
      document.querySelector(".active").classList.remove("active");
      btn.classList.add("active");
    });
  });
};
