import fetchFollowers from './modules/fetch-followers.js';
import displayPageBtns from './modules/display-page-btns.js';

const followersURL =
  'https://api.github.com/users/dmalan/followers?per_page=100';

const userBtnsContainer = document.querySelector('.users__btns');

displayFollowers();

async function displayFollowers() {
  const followersList = await fetchFollowers(followersURL);

  userBtnsContainer.innerHTML = displayPageBtns(followersList);
}
