// select #date, .navbar__toggle-btn, .navbar__list--container, .navbar__list, .navbar, .back-to-top
const date = document.querySelector('#date');
const navToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarListContainer = document.querySelector('.navbar__list--container');
const navbarList = document.querySelector('.navbar__list');
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');

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

// add .navbar--fixed to .navbar when user scroll down
window.addEventListener('scroll', function() {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const headerHeight = document.querySelector('#home').getBoundingClientRect().height;
  
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--fixed');
  } else {
    navbar.classList.remove('navbar--fixed');
  }

  if (window.scrollY > headerHeight - (headerHeight * .5)) {
    backToTop.classList.add('back-to-top--show');
  } else {
    backToTop.classList.remove('back-to-top--show');
  }
});