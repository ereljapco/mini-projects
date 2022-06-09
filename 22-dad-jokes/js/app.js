const dadJokesURL = 'https://icanhazdadjoke.com/';
const dadJokesRandomBtn = document.querySelector('.dad-jokes__random-btn');

fetchDadJoke(dadJokesURL);

dadJokesRandomBtn.addEventListener('click', () => {
  fetchDadJoke(dadJokesURL);
});

async function fetchDadJoke(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent':
        'JS Mini-Projects (https://github.com/ereljapco/mini-projects)',
    },
  });

  const data = await response.json();

  const dadJokesContainer = document.querySelector(
    '.dad-jokes__joke-container'
  );

  dadJokesContainer.innerHTML = data.joke;
}
