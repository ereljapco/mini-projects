import {
  featuredProductsContainer,
  companyBtnsContainer,
  productsContainer,
} from './elements.js';
import fetchProducts from './fetch-products.js';
import displayProduct from './display-product.js';

async function displayProducts() {
  const currentPage = window.location.pathname;
  const productsURL = 'https://course-api.com/javascript-store-products';
  const products = await fetchProducts(productsURL);

  if (currentPage === '/index.html') {
    displayFeaturedProducts(products, 'index');
  }

  if (currentPage === '/products.html') {
    displayCompanies(products);
    displayProductsPage(products);
  }

  if (currentPage === '/product.html') {
    displayProduct();
  }
}

function displayFeaturedProducts(products) {
  const featuredProducts = products.filter((product) => {
    const { featured } = product.fields;
    return featured;
  });

  featuredProductsContainer.innerHTML =
    displayFilteredProducts(featuredProducts);
}

function displayCompanies(products) {
  const companies = [
    ...new Set(
      products.map((product) => {
        const { company } = product.fields;
        return company;
      })
    ),
  ];

  const displayCompanies = companies
    .map((company) => {
      return `<button class="company__btn" data-company="${company}">${company}</button>`;
    })
    .join('');

  companyBtnsContainer.innerHTML = `<button class="company__btn" data-company="all">all</button> ${displayCompanies}`;
}

function displayProductsPage(products, page) {
  let productsList = products;

  productsContainer.innerHTML = displayFilteredProducts(productsList);
}

function displayFilteredProducts(products) {
  const displayFeaturedProducts = products
    .map((product) => {
      const id = product.id;
      const { name, price, image } = product.fields;
      const formatPrice = `$${price / 100}`;
      const imgURL = image[0].url;
      return `<article class="product" data-id="${id}">
                <div class="product__img-container">
                  <img
                    class="product__img"
                    src="${imgURL}"
                    alt="${name}"
                  />
                  <div class="product__icons">
                    <a class="product__view-link" href="./product.html?id=${id}">
                      <i
                        class="product__view-icon fa-solid fa-magnifying-glass"
                      ></i>
                    </a>
                    <button class="product__add-btn">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </div>
                <h3 class="product__title">${name}</h3>
                <p class="product__price">${formatPrice}</p>
              </article>`;
    })
    .join('');

  return displayFeaturedProducts;
}

export default displayProducts;
