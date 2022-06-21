const navToggleBtn = document.querySelector('.nav__toggle-btn');
const navSidebar = document.querySelector('.sidebar');

navToggleBtn.addEventListener('click', () => {
  navSidebar.classList.add('sidebar--show');
});
