// select #date, .navbar__toggle-btn, .navbar__list--container, .navbar__list, .navbar, .back-to-top
const date = document.querySelector('#date');
const navToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarListContainer = document.querySelector('.navbar__list--container');
const navbarList = document.querySelector('.navbar__list');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar__link');
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

// smooth scroll for navbar links
navbarLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1); // get value from index 1
    const element = document.getElementById(id);
    const navbarHeight = navbar.getBoundingClientRect().height;
    const navListContainerHeight = navbarListContainer.getBoundingClientRect().height;
    const position = element.offsetTop - (navbarHeight - navListContainerHeight);

    // close navbarlist when user clicks a link
    if (navListContainerHeight != 0) {
      navbarListContainer.style.height = 0;
    }

    // smooth scroll to the link
    window.scrollTo({
      left: 0,
      top: position
    });
  });
});