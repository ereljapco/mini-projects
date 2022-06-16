async function fetchCocktails(url) {
  const response = await fetch(url);
  const data = await response.json();
  const cocktails = data.drinks;

  return cocktails;
}

export default fetchCocktails;
