import { getElement } from "./getElement.js";
import { showCocktails } from "./showCocktails.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = getElement(".cocktail-form");
const input = getElement(".input-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    return;
  }
  showCocktails(`${url}${value}`);
});
