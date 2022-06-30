import {
  featuredProductsContainer,
  companyBtnsContainer,
  productsContainer,
  productsSearchInput,
  productsPriceRangeInput,
  productsPriceCurrentInput,
} from './elements.js';
import fetchProducts from './fetch-products.js';
import displayProduct from './display-product.js';
import displayBreadcrumb from './display-breadcrumb.js';
import addItemToCart from './add-item-to-cart.js';

async function displayProducts() {
  const currentPage = window.location.pathname;
  const productsURL = 'https://course-api.com/javascript-store-products';
  const products = await fetchProducts(productsURL);

  if (currentPage === '/index.html') {
    displayFeaturedProducts(products, 'index');
    document.title = `Home | Comfy Store`;
  }

  if (currentPage === '/products.html') {
    displayCompanies(products);
    displayProductsPage(products);
    document.title = `Products | Comfy Store`;
  }

  if (currentPage === '/product.html') {
    displayProduct(products);
  }
}

function displayFeaturedProducts(products) {
  const featuredProducts = products.filter((product) => {
    const { featured } = product.fields;
    return featured;
  });

  featuredProductsContainer.innerHTML =
    displayFilteredProducts(featuredProducts);

  // addItemToCart(products);
  const productAddBtns = document.querySelectorAll('.product__add-btn');

  productAddBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      addItemToCart(products, e.currentTarget);
    });
  });
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

  const companyBtns = document.querySelectorAll('.company__btn');

  companyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let filteredProducts = products;
      const btnCompany = e.currentTarget.dataset['company'];

      if (btnCompany == 'all') {
        productsContainer.innerHTML = displayFilteredProducts(filteredProducts);
        return;
      }

      filteredProducts = products.filter((product) => {
        const { company: productCompany } = product.fields;

        return btnCompany == productCompany;
      });

      productsContainer.innerHTML = displayFilteredProducts(filteredProducts);

      // addItemToCart(products);
      const productAddBtns = document.querySelectorAll('.product__add-btn');

      productAddBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          addItemToCart(products, e.currentTarget);
        });
      });
    });
  });
}

function displayProductsPage(products) {
  let productsList = [...products];

  displayBreadcrumb();

  productsSearchInput.addEventListener('keyup', () => {
    const value = productsSearchInput.value;

    const filteredProducts = productsList.filter((product) => {
      const { name } = product.fields;

      return name.includes(value);
    });

    productsContainer.innerHTML = displayFilteredProducts(filteredProducts);

    // addItemToCart(products);
    const productAddBtns = document.querySelectorAll('.product__add-btn');

    productAddBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        addItemToCart(products, e.currentTarget);
      });
    });
  });

  productsPriceCurrentInput.textContent = `Value: $${productsPriceRangeInput.value}`;

  const priceList = productsList.map((product) => {
    const { price } = product.fields;

    return price;
  });

  const maxPrice = Math.max(...priceList);

  productsPriceRangeInput.max = Math.ceil(maxPrice / 100);

  productsPriceRangeInput.addEventListener('change', () => {
    const priceRangeValue = productsPriceRangeInput.value;

    productsPriceCurrentInput.textContent = `Value: $${priceRangeValue}`;

    const filteredProducts = productsList.filter((product) => {
      const { price } = product.fields;

      return price / 100 <= priceRangeValue;
    });

    productsContainer.innerHTML = displayFilteredProducts(filteredProducts);

    // addItemToCart(products);
    const productAddBtns = document.querySelectorAll('.product__add-btn');

    productAddBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        addItemToCart(products, e.currentTarget);
      });
    });
  });

  productsContainer.innerHTML = displayFilteredProducts(productsList);

  // addItemToCart(products);
  const productAddBtns = document.querySelectorAll('.product__add-btn');

  productAddBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      addItemToCart(products, e.currentTarget);
    });
  });
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
                    <button class="product__add-btn" data-id="${id}">
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
