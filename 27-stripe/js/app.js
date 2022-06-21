const navOpenBtn = document.querySelector('.nav__open-btn');
const navSidebar = document.querySelector('.sidebar');

navOpenBtn.addEventListener('click', () => {
  navSidebar.classList.add('sidebar--show');
});
