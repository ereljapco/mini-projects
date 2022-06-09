const dadJokesURL = 'https://icanhazdadjoke.com/';
const dadJokesRandomBtn = document.querySelector('.dad-jokes__random-btn');
const dadJokesContainer = document.querySelector('.dad-jokes__joke');

fetchDadJoke();

dadJokesRandomBtn.addEventListener('click', () => {
  fetchDadJoke();
});

async function fetchDadJoke() {
  try {
    dadJokesContainer.textContent = `Coming up with a Dad joke...`;

    const response = await fetch(dadJokesURL, {
      headers: {
        Accept: 'application/json',
        'User-Agent':
          'JS Mini-Projects (https://github.com/ereljapco/mini-projects)',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      console.log('Ooops. There was an error.');
    }

    dadJokesContainer.textContent = data.joke;
  } catch (error) {
    dadJokesContainer.textContent = `Ooops. There was an error.`;
  }
}
