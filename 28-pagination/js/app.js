import fetchFollowers from './modules/fetch-followers.js';
import displayPageBtns from './modules/display-page-btns.js';
import displayPage from './modules/display-page.js';

const followersURL =
  'https://api.github.com/users/dmalan/followers?per_page=100';

const usersContainer = document.querySelector('.users-container');
const userBtnsContainer = document.querySelector('.users__btns');

displayFollowers();

async function displayFollowers() {
  const followersList = await fetchFollowers(followersURL);

  userBtnsContainer.innerHTML = displayPageBtns(followersList);

  const pageBtns = document.querySelectorAll('.users__page-btn');

  pageBtns.forEach((pageBtn) => {
    let start = 0;
    let end = 10;

    usersContainer.innerHTML = displayPage(followersList, start, end);

    pageBtn.addEventListener('click', (e) => {
      const btn = e.target;
      const index = btn.dataset['index'];

      pageBtns.forEach((btn) => {
        if (btn.classList.contains('users__page-btn--active')) {
          btn.classList.remove('users__page-btn--active');
        }
      });

      btn.classList.add('users__page-btn--active');

      start = index * 10;
      end = start + 10;

      usersContainer.innerHTML = displayPage(followersList, start, end);
    });
  });
}
