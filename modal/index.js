const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", (e) => {
  modal.classList.add("show-modal");
});

closeModal.addEventListener("click", (e) => {
  modal.classList.remove("show-modal");
});
