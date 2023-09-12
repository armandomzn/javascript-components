import { getElement } from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

export const displayDrink = (data) => {
  hideLoading();
  const {
    strDrinkThumb,
    strDrink,
    strGlass,
    strAlcoholic,
    strCategory,
    strInstructions,
  } = data.drinks[0];
  const ingredients = Object.keys(data.drinks[0])
    .filter((key) => key.includes("strIngredient") && data.drinks[0][key])
    .map((item) => data.drinks[0][item]);
  const section = getElement(".section-center");
  section.innerHTML = `
        <article class="cocktail-card">
          <h4 class="cocktail-title">${strDrink}</h4>
          <a href="index.html" class="btn cocktail-btn-top">back to home</a>
          <div class="cocktail-container">
            <div class="cocktail-img-container">
              <img
                src="${strDrinkThumb}"
                alt="${strDrink}"
              />
            </div>
            <div class="cocktail-info">
              <p><span class="drink-info">Name: </span>${strDrink}</p>
              <p><span class="drink-info">Category: </span>${strCategory}</p>
              <p><span class="drink-info">Info: </span>${strAlcoholic}</p>
              <p><span class="drink-info">Glass: </span>${strGlass}</p>
              <p><span class="drink-info">Ingredients: </span>${ingredients
                .map((ingredient, index) => {
                  return index < ingredients.length - 1
                    ? `${ingredient}, `
                    : `${ingredient}`;
                })
                .join("")}</p>
              <p><span class="drink-info">instructions: </span>${strInstructions}</p>
            </div>
          </div>
          <a href="index.html" class="btn cocktail-btn-bottom">back to home</a>
        </article>
  `;
};
