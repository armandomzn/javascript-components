import { displayDrink } from "./displayDrink.js";
import { fetchData } from "./fetchData.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const setSingleDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    return window.location.replace("index.html");
  }
  try {
    const cocktail = await fetchData(`${url}${id}`);
    displayDrink(cocktail);
  } catch (e) {
    console.log(e);
  }
};

window.addEventListener("DOMContentLoaded", setSingleDrink);
