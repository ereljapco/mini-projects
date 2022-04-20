// assign toggle-btn, sidebar, and close-btn to variables
const toggleBtn = document.querySelector('.nav__toggle-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar__close-btn');

// show sidebar when toggle-btn is clicked
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar--show');
});

// hide sidebar when close-btn is clicked
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--show');
});
