const darkModeBtn = document.querySelector('.navbar__toggle-btn');

darkModeBtn.addEventListener('click', () => {
  const body = document.body.classList.toggle('dark-mode');
});
