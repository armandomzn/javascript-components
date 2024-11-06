import { showCocktails } from "./src/showCocktails.js";
import "./src/formCocktails.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b";

window.addEventListener("DOMContentLoaded", () => {
  showCocktails(url);
});
