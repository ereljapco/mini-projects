import displayPageTitle from './page-title.js';
import displayFilteredProducts from './filtered-products.js';
import addItemToCart from './add-item-to-cart.js';
import { featuredProductsContainer } from './elements.js';

function displayFeaturedProducts(products) {
  const featuredProducts = products.filter((product) => {
    const { featured } = product.fields;
    return featured;
  });

  displayPageTitle('Home');

  featuredProductsContainer.innerHTML =
    displayFilteredProducts(featuredProducts);

  const productAddBtns = document.querySelectorAll('.product__add-btn');

  productAddBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      addItemToCart(products, e.currentTarget);
    });
  });
}

export default displayFeaturedProducts;
