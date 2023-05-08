const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.parentElement.parentElement;
    parent.classList.toggle("show-text");
  });
});
