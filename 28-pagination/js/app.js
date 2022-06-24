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

  let start = 0;
  let end = 10;

  usersContainer.innerHTML = displayPage(followersList, start, end);

  const usersPrevBtn = document.querySelector('.users__prev-btn');
  const usersNextBtn = document.querySelector('.users__next-btn');
  const pageBtns = [...document.querySelectorAll('.users__page-btn')];

  usersPrevBtn.addEventListener('click', () => {
    let index = localStorage.getItem('index');

    if (index == 0) {
      index = pageCount - 1;
    } else {
      index--;
    }

    localStorage.setItem('index', index);

    const currentBtn = pageBtns.find((btn) => {
      return index == btn.dataset['index'];
    });

    pageBtns.forEach((btn) => {
      if (btn.classList.contains('users__page-btn--active')) {
        btn.classList.remove('users__page-btn--active');
      }
    });

    currentBtn.classList.add('users__page-btn--active');

    start = index * 10;
    end = start + 10;

    usersContainer.innerHTML = displayPage(followersList, start, end);
  });

  usersNextBtn.addEventListener('click', () => {
    let index = localStorage.getItem('index');

    if (index == pageCount - 1) {
      index = 0;
    } else {
      index++;
    }

    localStorage.setItem('index', index);

    const currentBtn = pageBtns.find((btn) => {
      return index == btn.dataset['index'];
    });

    pageBtns.forEach((btn) => {
      if (btn.classList.contains('users__page-btn--active')) {
        btn.classList.remove('users__page-btn--active');
      }
    });

    currentBtn.classList.add('users__page-btn--active');

    start = index * 10;
    end = start + 10;

    usersContainer.innerHTML = displayPage(followersList, start, end);
  });

  pageBtns.forEach((pageBtn) => {
    pageBtn.addEventListener('click', (e) => {
      const btn = e.target;
      const index = btn.dataset['index'];

      localStorage.setItem('index', index);

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
