const navSidebar = document.querySelector('.sidebar');
const sidebarOpenBtn = document.querySelector('.nav__open-btn');
const sidebarCloseBtn = document.querySelector('.sidebar__close-btn');

sidebarOpenBtn.addEventListener('click', () => {
  navSidebar.classList.add('sidebar--show');
});

sidebarCloseBtn.addEventListener('click', () => {
  navSidebar.classList.remove('sidebar--show');
});
