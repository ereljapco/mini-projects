function displayFilteredProducts(products) {
  const displayProducts = products
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

  return displayProducts;
}

export default displayFilteredProducts;
