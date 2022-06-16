import fecthCocktails from './modules/fetch-cocktails.js';

let cocktailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const cocktailsContainer = document.querySelector('.cocktails-container');
const cocktailsSearchInput = document.querySelector('.cocktails__search-input');

displayCocktails();

cocktailsSearchInput.addEventListener('keyup', () => {
  const cocktailsSearchValue = cocktailsSearchInput.value;

  if (cocktailsSearchValue !== '') {
    cocktailsURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailsSearchValue}`;
  } else {
    cocktailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
  }

  displayCocktails();
});

async function displayCocktails() {
  cocktailsContainer.innerHTML = `<div class="loading">
  <svg class="loading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 464H240v-125.3l168.8-168.7C424.3 154.5 413.3 128 391.4 128H24.63C2.751 128-8.249 154.5 7.251 170l168.7 168.7V464H128c-17.67 0-32 14.33-32 32c0 8.836 7.164 16 15.1 16h191.1c8.836 0 15.1-7.164 15.1-16C320 478.3 305.7 464 288 464zM432 0c-62.63 0-115.4 40.25-135.1 96h52.5c16.62-28.5 47.25-48 82.62-48c52.88 0 95.1 43 95.1 96s-43.12 96-95.1 96c-14 0-27.25-3.25-39.37-8.625l-35.25 35.25c21.88 13.25 47.25 21.38 74.62 21.38c79.5 0 143.1-64.5 143.1-144S511.5 0 432 0z"/></svg>
  <p class="loading__message">What would you have today?</p>
  </di>`;

  const cocktailsList = await fecthCocktails(cocktailsURL);

  try {
    const displayCocktails = cocktailsList
      .map(({ idDrink: id, strDrink: name, strDrinkThumb: img }) => {
        return `<a href="./cocktail.html">
              <article class="cocktail" data-id="${id}">
                <div class="cocktail__img-container">
                  <img
                    class="cocktail__img"
                    src="${img}"
                    alt="${name}"
                  />
                  <div class="cocktail__img-overlay"></div>
                </div>
                <p class="cocktail__name">${name}</p>
              </article>
            </a>`;
      })
      .join('');

    cocktailsContainer.innerHTML = displayCocktails;

    const cocktails = document.querySelectorAll('.cocktail');

    cocktails.forEach((cocktail) => {
      cocktail.addEventListener('click', (e) => {
        localStorage.setItem('cocktail', e.currentTarget.dataset['id']);
      });
    });
  } catch (error) {
    cocktailsContainer.innerHTML = `<p class="error-message">Sorry, your search does not match any cocktails.</p>`;
  }
}
