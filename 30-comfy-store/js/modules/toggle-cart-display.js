import { cart, cartOpenBtn, cartCloseBtn } from './elements.js';

function toggleCartDisplay() {
  cartOpenBtn.addEventListener('click', () => {
    cart.classList.add('cart--show');
  });

  cartCloseBtn.addEventListener('click', () => {
    cart.classList.remove('cart--show');
  });
}

export default toggleCartDisplay;
