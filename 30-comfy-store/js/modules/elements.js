const menu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.navbar__open-btn');
const menuCloseBtn = document.querySelector('.menu__close-btn');
const cart = document.querySelector('.cart');
const cartOpenBtn = document.querySelector('.navbar__cart-btn');
const cartCloseBtn = document.querySelector('.cart__close-btn');
const featuredProductsContainer = document.querySelector('.featured__products');

const productsURL = 'https://course-api.com/javascript-store-products';

export {
  menu,
  menuOpenBtn,
  menuCloseBtn,
  cart,
  cartOpenBtn,
  cartCloseBtn,
  featuredProductsContainer,
  productsURL,
};
