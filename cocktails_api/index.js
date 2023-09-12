import { showCocktails } from "./src/showCocktails.js";
import "./src/formCocktails.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

window.addEventListener("DOMContentLoaded", () => {
  showCocktails(url);
});
