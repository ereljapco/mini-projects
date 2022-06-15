const cocktailsContainer = document.querySelector('.cocktails-container');
const cocktailsURL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

displayCocktails();

async function displayCocktails() {
  const cocktailsList = await fecthCocktails();

  const displayCocktails = cocktailsList
    .map(({ idDrink: id, strDrink: name, strDrinkThumb: img }) => {
      return `<a href="./drinks.html">
            <article class="cocktail">
              <div class="cocktail__img-container">
                <img
                  class="cocktail__img"
                  src="${img}"
                  alt="${name}"
                  data-id="${id}"
                />
                <div class="cocktail__img-overlay"></div>
              </div>
              <p class="cocktail__name">${name}</p>
            </article>
          </a>`;
    })
    .join('');

  cocktailsContainer.innerHTML = displayCocktails;
}

async function fecthCocktails() {
  const response = await fetch(cocktailsURL);
  const data = await response.json();
  const cocktails = data.drinks;

  return cocktails;
}
