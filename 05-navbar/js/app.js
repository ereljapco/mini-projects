// assign toggle-btn and links to variables
const btn = document.querySelector('.navbar__toggle-btn');
const links = document.querySelector('.navbar__links');

// add click event listener to btn
btn.addEventListener('click', function() {
  links.classList.toggle('navbar__links--show');
});