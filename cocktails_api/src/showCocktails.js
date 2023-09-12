import { displayCocktails } from "./displayCocktails.js";
import { fetchData } from "./fetchData.js";
import { setCocktailDrink } from "./setCocktailDrink.js";

export const showCocktails = async (url) => {
  try {
    // fetchData
    const cocktails = await fetchData(url);
    // displayCocktails
    const cocktailsContainer = displayCocktails(cocktails);
    if(!cocktailsContainer){
        return;
    }
    setCocktailDrink(cocktailsContainer)
  } catch (error) {
    console.log(error);
  }
};
