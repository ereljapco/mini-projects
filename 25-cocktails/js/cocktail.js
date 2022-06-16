import fetchCocktails from './modules/fetch-cocktails.js';

const cocktailID = localStorage.getItem('cocktail');
const cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`;

displayCocktail();

async function displayCocktail() {
  const cocktailContainer = document.querySelector(
    '.single-cocktail-container'
  );

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
  } catch (error) {}
}
