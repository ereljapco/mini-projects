const productsContainer = document.querySelector('.products__main');
const productsSearchInput = document.querySelector('.products__search-input');
const productsCategoryContainer = document.querySelector('.products__category');
let filteredProducts = [...products];

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
    return `<button class="products__category-btn">${category}</button>`;
  })
  .join('');

displayProducts();

productsSearchInput.addEventListener('keyup', () => {
  const filterSearchValue = productsSearchInput.value;

  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(filterSearchValue);
  });

  displayProducts();
});

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
