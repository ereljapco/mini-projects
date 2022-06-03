const productsContainer = document.querySelector('.products__main');
const productsSearchInput = document.querySelector('.products__search-input');
const productsCategoryContainer = document.querySelector('.products__category');
let filteredProducts = [...products];

searchProducts();

displayProductsCategories();

displayProducts();

function searchProducts() {
  productsSearchInput.addEventListener('keyup', () => {
    const filterSearchValue = productsSearchInput.value;

    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(filterSearchValue);
    });

    displayProducts();
  });
}

function displayProductsCategories() {
  const categories = [
    'all',
    ...new Set(
      products.map((product) => {
        return product.company;
      })
    ),
  ];

  productsCategoryContainer.innerHTML = categories
    .map((category) => {
      return `<button class="products__category-btn" data-category="${category}">${category}</button>`;
    })
    .join('');

  displayProductsByCategory();
}

function displayProductsByCategory() {
  const categoriesBtns = document.querySelectorAll('.products__category-btn');

  categoriesBtns.forEach((categoryBtn) => {
    categoryBtn.addEventListener('click', () => {
      const category = categoryBtn.dataset.category;

      if (category === 'all') {
        filteredProducts = [...products];
      } else {
        filteredProducts = products.filter((product) => {
          return product.company === categoryBtn.dataset.category;
        });
      }

      displayProducts();
    });
  });
}

function displayProducts() {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<p class="products__no-match-message">Sorry, no products matched your search.</p>`;

    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<!-- product -->
            <article class="product">
              <img
                class="product__image"
                src="${image}"
                alt="${title}"
              />
              <div class="product__info">
                <h1 class="product__title">${title}</h1>
                <span class="product__price">${price}</span>
              </div>
            </article>
            <!-- end of product -->`;
    })
    .join('');
}
