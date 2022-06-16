import fetchCocktails from './modules/fetch-cocktails.js';

const cocktailID = localStorage.getItem('cocktail');
const cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`;

displayCocktail();

async function displayCocktail() {
  const cocktailContainer = document.querySelector(
    '.single-cocktail-container'
  );

  cocktailContainer.innerHTML = `<div class="loading">
      <svg class="loading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 464H240v-125.3l168.8-168.7C424.3 154.5 413.3 128 391.4 128H24.63C2.751 128-8.249 154.5 7.251 170l168.7 168.7V464H128c-17.67 0-32 14.33-32 32c0 8.836 7.164 16 15.1 16h191.1c8.836 0 15.1-7.164 15.1-16C320 478.3 305.7 464 288 464zM432 0c-62.63 0-115.4 40.25-135.1 96h52.5c16.62-28.5 47.25-48 82.62-48c52.88 0 95.1 43 95.1 96s-43.12 96-95.1 96c-14 0-27.25-3.25-39.37-8.625l-35.25 35.25c21.88 13.25 47.25 21.38 74.62 21.38c79.5 0 143.1-64.5 143.1-144S511.5 0 432 0z"/></svg>
      <p class="loading__message">One drink coming up...</p>
    </di>`;

  try {
    const cocktailData = await fetchCocktails(cocktailURL);
    const cocktail = cocktailData[0];

    const {
      strDrinkThumb: img,
      strDrink: name,
      strInstructions: instructions,
    } = cocktail;
    const ingredientsList = [
      cocktail.strIngredient1,
      cocktail.strIngredient2,
      cocktail.strIngredient3,
      cocktail.strIngredient4,
      cocktail.strIngredient5,
      cocktail.strIngredient6,
      cocktail.strIngredient7,
      cocktail.strIngredient8,
      cocktail.strIngredient9,
      cocktail.strIngredient10,
      cocktail.strIngredient11,
      cocktail.strIngredient12,
      cocktail.strIngredient13,
      cocktail.strIngredient14,
      cocktail.strIngredient15,
    ];

    const ingredients = ingredientsList
      .map((ingredient) => {
        if (ingredient) {
          return `<li class="single-cocktail__ingredient">${ingredient}</li>`;
        }
      })
      .join('');

    document.title = `${name} | Your chosen cocktail`;

    cocktailContainer.innerHTML = `<div class="single-cocktail__img-container">
            <img
              class="single-cocktail__img"
              src="${img}"
              alt="${name}"
            />
          </div>
          <div class="single-cocktail__info">
            <h1 class="single-cocktail__name">${name}</h1>
            <p class="single-cocktail__instructions">
              ${instructions}
            </p>
            <ul class="single-cocktail__ingredients">
              ${ingredients}
            </ul>
          </div>`;
  } catch (error) {
    cocktailContainer.innerHTML = `<p class="error-message">Uh, oh. There was an error.</p>`;
  }
}
