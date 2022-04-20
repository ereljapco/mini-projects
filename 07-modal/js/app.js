// assign open-btn, close-btn, and overlay to variables
const openBtn = document.querySelector('.modal__open-btn');
const closeBtn = document.querySelector('.modal__close-btn');
const overlay = document.querySelector('.modal--overlay');

// show overlay when openBtn is clicked
openBtn.addEventListener('click', () => {
  overlay.classList.add('modal--overlay-open');
});

// hide overlay when closeBtn is clicked
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('modal--overlay-open');
});