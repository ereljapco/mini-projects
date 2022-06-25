import fetchSearchResults from './modules/fetch-search-results.js';

const wikiSearchForm = document.querySelector('.wikipedia__form');
const wikiSearchInput = document.querySelector('.wikipedia__search-input');
const wikiResultsContainer = document.querySelector('.wikipedia__results');

wikiSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!wikiSearchInput.value) {
    wikiResultsContainer.innerHTML = `<p class="error-message">
                                        Please type your search in the search bar.
                                      </p>`;
    return;
  }

  displaySearchResults();
});

async function displaySearchResults() {
  wikiResultsContainer.innerHTML = `<span class="loading"></span>`;

  try {
    const searchResults = await fetchSearchResults(wikiSearchInput.value);

    if (searchResults.length < 1) {
      wikiResultsContainer.innerHTML = `<p class="error-message">
                                          No results matched your search.
                                        </p>`;
      return;
    }

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
  } catch (error) {
    wikiResultsContainer.innerHTML = `<p class="error-message">Uh, oh! Something went wrong :/</p>`;
  }
}
