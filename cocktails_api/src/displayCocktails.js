import { getElement } from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

export const displayCocktails = ({ drinks }) => {
  const cocktailsContainer = getElement(".cocktails");
  const loadingParent = getElement(".loading-parent");
  if (!drinks) {
    hideLoading();
    loadingParent.innerHTML = `<h4>No Matching Cocktails Found...</h4>`;
    cocktailsContainer.innerHTML = null;
    return;
  }
  cocktailsContainer.innerHTML = drinks
    .map((drink) => {
      const { idDrink, strGlass, strDrinkThumb, strDrink, strAlcoholic } =
        drink;
      return `
      <article class="cocktail" data-id="${idDrink}">
      <img
      src="${strDrinkThumb}"
      alt="${strDrink}"
      class="cocktail-img"
      />
      <div class="cocktail-info">
      <h3 class="cocktail-title">${strDrink}</h3>
      <h4 class="cocktail-glass">${strGlass}</h4>
      <p class="cocktail-alcoholic">${strAlcoholic}</p>
      <a href="singleDrink.html" class="btn">more info</a>
      </div>
      </article>
    `;
    })
    .join("");
  hideLoading();
  loadingParent.innerHTML = ``;
  return cocktailsContainer;
};
