const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  modal.classList.add("open-modal");
});

closeModalBtn.addEventListener("click", () => {
  document.body.style.overflow = "visible";
  modal.classList.remove("open-modal");
});
