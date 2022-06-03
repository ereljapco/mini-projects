const productsContainer = document.querySelector('.products__main');
const productsSearchInput = document.querySelector('.products__search-input');
let filteredProducts = [...products];

displayProducts();

productsSearchInput.addEventListener('keyup', () => {
  const filterSearchValue = productsSearchInput.value;

  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(filterSearchValue);
  });

  displayProducts();
});

function displayProducts() {
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
