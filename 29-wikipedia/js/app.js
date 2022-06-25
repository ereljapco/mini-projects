import fetchSearchResults from './modules/fetch-search-results.js';

const wikiSearchForm = document.querySelector('.wikipedia__form');
const wikiSearchInput = document.querySelector('.wikipedia__search-input');
const wikiResultsContainer = document.querySelector('.wikipedia__results');

wikiSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  displaySearchResults();
});

async function displaySearchResults() {
  const searchResults = await fetchSearchResults(wikiSearchInput.value);

  const displaySearchResults = searchResults
    .map((result) => {
      const { title, pageid, snippet } = result;

      return `<a class="result__link" href="https://en.wikipedia.org/w/index.php?curid=${pageid}" target="_blank">
                <article class="result">
                  <h2 class="result__title">${title}</h2>
                  <p class="result__summary">${snippet}</p>
                </article>
              </a>`;
    })
    .join('');

  wikiResultsContainer.innerHTML = displaySearchResults;
}
