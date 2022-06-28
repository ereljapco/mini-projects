import { menu, menuOpenBtn, menuCloseBtn } from './elements.js';

function toggleMenuDisplay() {
  menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('menu--show');
  });

  menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('menu--show');
  });
}

export default toggleMenuDisplay;
