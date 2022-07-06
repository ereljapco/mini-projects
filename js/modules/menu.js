import { menuOpenBtn, menu, menuOverlay } from './elements.js';

function toggleMenu() {
  menuOpenBtn.addEventListener('click', (e) => {
    menu.classList.add('menu--display');
  });

  menuOverlay.addEventListener('click', () => {
    menu.classList.remove('menu--display');
  });
}

export default toggleMenu;
