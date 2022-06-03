const productsContainer = document.querySelector('.products__main');
let filteredProducts = [...products];

displayProducts();

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
