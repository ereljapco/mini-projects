import displayPageTitle from './page-title.js';
import displayFilteredProducts from './filtered-products.js';
import addItemToCart from './add-item-to-cart.js';
import {
  productsSearchInput,
  productsPriceCurrentInput,
  productsPriceRangeInput,
  companyBtnsContainer,
  productsContainer,
} from './elements.js';

function displayProductsPage(products) {
  let productsList = [...products];

  displayPageTitle('Products');

  displayCompanies(products);

  productsSearchInput.addEventListener('keyup', () => {
    const value = productsSearchInput.value;

    const filteredProducts = productsList.filter((product) => {
      const { name } = product.fields;

      return name.includes(value);
    });

    productsContainer.innerHTML = displayFilteredProducts(filteredProducts);

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

    const productAddBtns = document.querySelectorAll('.product__add-btn');

    productAddBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        addItemToCart(products, e.currentTarget);
      });
    });
  });

  productsContainer.innerHTML = displayFilteredProducts(productsList);

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

      const productAddBtns = document.querySelectorAll('.product__add-btn');

      productAddBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          addItemToCart(products, e.currentTarget);
        });
      });
    });
  });
}

export default displayProductsPage;
