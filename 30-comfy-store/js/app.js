const cart = document.querySelector('.cart');
const cartOpenBtn = document.querySelector('.navbar__cart-btn');
const cartCloseBtn = document.querySelector('.cart__close-btn');

cartOpenBtn.addEventListener('click', () => {
  cart.classList.add('cart--show');
});

cartCloseBtn.addEventListener('click', () => {
  cart.classList.remove('cart--show');
});
console.log(cartCloseBtn);
