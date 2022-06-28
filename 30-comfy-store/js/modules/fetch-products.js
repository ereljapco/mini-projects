async function fetchProducts() {
  const productsURL = 'https://course-api.com/javascript-store-products';
  const response = await fetch(productsURL);
  const data = await response.json();

  return data;
}

export default fetchProducts();
