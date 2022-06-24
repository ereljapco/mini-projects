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
  const pageCount = Math.ceil(followersList.length / 10);

  userBtnsContainer.innerHTML = displayPageBtns(followersList);

  const userPageBtns = [...document.querySelectorAll('.users__page-btn')];
  const index = 0;

  usersContainer.innerHTML = displayPage(followersList, userPageBtns, index);

  const usersPrevBtn = document.querySelector('.users__prev-btn');
  const usersNextBtn = document.querySelector('.users__next-btn');

  usersPrevBtn.addEventListener('click', () => {
    let index = localStorage.getItem('index');

    if (index == 0) {
      index = pageCount - 1;
    } else {
      index--;
    }

    usersContainer.innerHTML = displayPage(followersList, userPageBtns, index);
  });

  usersNextBtn.addEventListener('click', () => {
    let index = localStorage.getItem('index');

    if (index == pageCount - 1) {
      index = 0;
    } else {
      index++;
    }

    usersContainer.innerHTML = displayPage(followersList, userPageBtns, index);
  });

  userPageBtns.forEach((pageBtn) => {
    pageBtn.addEventListener('click', (e) => {
      const btn = e.target;
      const index = btn.dataset['index'];

      usersContainer.innerHTML = displayPage(
        followersList,
        userPageBtns,
        index
      );
    });
  });
}
