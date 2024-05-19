export const setCocktailDrink = (container) => {
  container.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.dataset.id;
    if (!id || !e.target.classList.contains("btn")) {
      return;
    }
    localStorage.setItem("drink", id);
    window.location.href = "singleDrink.html";
  });
};
