const productContainer = document.querySelector('.single-product');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const productURL = `https://course-api.com/javascript-store-single-product?id=${id}`;

displayProduct();

async function displayProduct() {
  productContainer.innerHTML = `<div class="loading"></div>`;

  const productDetails = await fetchProduct();
  const {
    name: title,
    price,
    image,
    description,
    colors,
    company,
  } = productDetails.fields;
  const imageURL = image[0].url;
  const formatPrice = `$${price / 100}`;

  const displayColors = colors
    .map((color) => {
      return `<span class="single-product__color" style="background-color: ${color}"></span>`;
    })
    .join('');

  productContainer.innerHTML = `<img class="single-product__img" src="${imageURL}" alt="
  ${title}" />
        <div class="single-product__info">
          <h2 class="single-product__title">${title}</h2>
          <p class="single-product__company">${company}</p>
          <p class="single-product__price">${formatPrice}</p>
          <div class="single-product__colors">
            ${displayColors}
          </div>
          <p class="single-product__text">${description}</p>
          <button class="single-product__cart-btn">Add to Cart</button>
        </div>`;
}

async function fetchProduct() {
  const response = await fetch(productURL);
  const data = await response.json();

  return data;
}
