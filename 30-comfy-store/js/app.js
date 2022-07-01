import toggleMenuDisplay from './modules/toggle-menu-display.js';
import toggleCartDisplay from './modules/toggle-cart-display.js';
import fetchProducts from './modules/fetch-products.js';
import displayFeaturedProducts from './modules/featured-products.js';
import displayProductsPage from './modules/products-page.js';
import displayProduct from './modules/display-product.js';
import displayCartItems from './modules/display-cart-items.js';
import displayPageTitle from './modules/page-title.js';
import { currentPage } from './modules/elements.js';

initializeComfy();

async function initializeComfy() {
  toggleMenuDisplay();

  toggleCartDisplay();

  displayCartItems();

  const products = await fetchProducts();

  if (currentPage === '/index.html') {
    displayFeaturedProducts(products);
  }

  if (currentPage === '/products.html') {
    displayProductsPage(products);
  }

  if (currentPage === '/product.html') {
    displayProduct(products);
  }

  if (currentPage === '/about.html') {
    displayPageTitle('About');
  }
}
