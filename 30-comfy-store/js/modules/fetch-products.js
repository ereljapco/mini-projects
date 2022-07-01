import { productsURL, productURL } from './elements.js';

async function fetchProducts(product) {
  let url = productsURL;

  if (product == 'product') {
    url = productURL;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default fetchProducts;
