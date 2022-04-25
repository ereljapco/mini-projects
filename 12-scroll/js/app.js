// select #date, .navbar__toggle-btn, .navbar__list--container, .navbar__list
const date = document.querySelector('#date');
const navToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarListContainer = document.querySelector('.navbar__list--container');
const navbarList = document.querySelector('.navbar__list');

// add current year to date
date.textContent = new Date().getFullYear();

// show navbarList when user click toggleBtn by adding .navbar__list--show
navToggleBtn.addEventListener('click', function() {
  const navListContainerHeight = navbarListContainer.getBoundingClientRect().height;
  const navListHeight = navbarList.getBoundingClientRect().height;
  
  if (navListContainerHeight === 0) {
    navbarListContainer.style.height = `${navListHeight}px`;
  } else {
    navbarListContainer.style.height = 0;
  }
});