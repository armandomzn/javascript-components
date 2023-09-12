export const setCocktailDrink = (container) => {
  container.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.dataset.id;
    if (!id) {
      return;
    }
    localStorage.setItem("drink", id);
    window.location.href = "singleDrink.html";
  });
};
