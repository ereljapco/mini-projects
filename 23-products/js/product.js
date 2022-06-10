const productContainer = document.querySelector('.single-product');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const productURL = `https://course-api.com/javascript-store-single-product?id=${id}`;

setUpProductPage();

async function setUpProductPage() {
  productContainer.innerHTML = `<div class="loading"></div>`;

  const productDetails = await fetchProduct();

  changePageTitle(productDetails.fields.name);

  displayProduct(productDetails);
}

async function fetchProduct() {
  const response = await fetch(productURL);
  const data = await response.json();

  return data;
}

function changePageTitle(title) {
  const words = title.split(' ');
  let capitalizedTitle = '';

  words.forEach((word) => {
    capitalizedTitle += `${word.charAt(0).toUpperCase() + word.slice(1)} `;
  });

  document.title = capitalizedTitle;
}

function displayProduct(product) {
  const {
    name: title,
    price,
    image,
    description,
    colors,
    company,
  } = product.fields;
  const imageURL = image[0].url;
  const formatPrice = `$${price / 100}`;

  productContainer.innerHTML = `
    <img class="single-product__img" src="${imageURL}" alt="${title}" />
    <div class="single-product__info">
      <h2 class="single-product__title">${title}</h2>
      <p class="single-product__company">${company}</p>
      <p class="single-product__price">${formatPrice}</p>
      <div class="single-product__colors">${displayColors(colors)}</div>
      <p class="single-product__text">${description}</p>
      <button class="single-product__cart-btn">Add to Cart</button>
    </div>`;
}

function displayColors(colors) {
  return colors
    .map((color) => {
      return `<span class="single-product__color" style="background-color: ${color}"></span>`;
    })
    .join('');
}
