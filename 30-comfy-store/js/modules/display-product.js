import fetchProducts from './fetch-products.js';
import { singleProductContainer } from './elements.js';
import displayBreadcrumb from './display-breadcrumb.js';
import addItemToCart from './add-item-to-cart.js';

async function displayProduct(products) {
  const productId = window.location.search.replace('?id=', '');
  const productURL = `https://course-api.com/javascript-store-single-product?id=${productId}`;

  const product = await fetchProducts(productURL);
  const { name, price, image, description, colors, company } = product.fields;
  const formatPrice = `$${price / 100}`;
  const imgURL = image[0].url;

  displayBreadcrumb(name);

  const displayColors = colors
    .map((color) => {
      return `<span class="single-product__color" style="background-color: ${color}"></span>`;
    })
    .join('');

  singleProductContainer.innerHTML = `<div class="single-product__img-container">
          <img
            class="single-product__img"
            src="${imgURL}"
            alt="${name}"
          />
        </div>
        <div class="single-product__info">
          <h1 class="single-product__title">${name}</h1>
          <p class="single-product__maker">
            By ${company}
          </p>
          <p class="single-product__price">${formatPrice}</p>
          <div class="single-product__colors">
            ${displayColors}
          </div>
          <p class="single-product__text">
            ${description}
          </p>
          <button class="single-product__add-btn" data-id=${productId}>Add to Cart</button>
        </div>`;

  const addBtn = document.querySelector('.single-product__add-btn');

  addBtn.addEventListener('click', () => {
    addItemToCart(products, addBtn);
  });
}

export default displayProduct;