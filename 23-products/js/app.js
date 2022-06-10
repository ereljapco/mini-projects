const productsContainer = document.querySelector('.products-container');
const productsURL = 'https://course-api.com/javascript-store-products';

displayProducts();

async function displayProducts() {
  productsContainer.innerHTML = `<div class="loading"></div>`;

  const productsList = await fetchProducts();

  const products = productsList
    .map((product) => {
      const { id } = product;
      const { name: title, price, image } = product.fields;
      const imageURL = image[0].url;
      const formatPrice = `$${price / 100}`;

      return `<article class="product">
            <a
              class="product__link"
              href="./product.html?id=${id}"
            >
              <img
                class="product__img"
                src="${imageURL}"
                alt="${title}"
              />
              <div class="product__info">
                <h3 class="product__title">${title}</h3>
                <p class="product__price">${formatPrice}</p>
              </div>
            </a>
          </article>`;
    })
    .join('');

  productsContainer.innerHTML = products;
}

async function fetchProducts() {
  const response = await fetch(productsURL);
  const data = await response.json();

  return data;
}
