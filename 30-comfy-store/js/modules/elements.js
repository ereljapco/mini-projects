const currentPage = window.location.pathname;
const menu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.navbar__open-btn');
const menuCloseBtn = document.querySelector('.menu__close-btn');
const cart = document.querySelector('.cart');
const cartTotalQtyContainer = document.querySelector('.navbar__cart-items');
const cartItemsContainer = document.querySelector('.cart__items');
const cartTotalContainer = document.querySelector('.cart__total');
const cartOpenBtn = document.querySelector('.navbar__cart-btn');
const cartCloseBtn = document.querySelector('.cart__close-btn');
const featuredProductsContainer = document.querySelector('.featured__products');
const companyBtnsContainer = document.querySelector('.company__btns');
const productsContainer = document.querySelector('.products-container');
const singleProductContainer = document.querySelector('.single-product');
const productsSearchInput = document.querySelector('.search-form__input');
const productsPriceRangeInput = document.querySelector('.price-form__input');
const productsPriceCurrentInput = document.querySelector(
  '.price-form__current-input'
);

const productsURL = 'https://course-api.com/javascript-store-products';
const productURL = 'https://course-api.com/javascript-store-single-product';

export {
  currentPage,
  menu,
  menuOpenBtn,
  menuCloseBtn,
  cart,
  cartTotalQtyContainer,
  cartItemsContainer,
  cartTotalContainer,
  cartOpenBtn,
  cartCloseBtn,
  featuredProductsContainer,
  companyBtnsContainer,
  productsContainer,
  singleProductContainer,
  productsSearchInput,
  productsPriceRangeInput,
  productsPriceCurrentInput,
  productsURL,
  productURL,
};
