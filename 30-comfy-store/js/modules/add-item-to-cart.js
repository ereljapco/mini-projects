import displayCartItems from './display-cart-items.js';
import { cart } from './elements.js';

function addItemToCart(products, btn) {
  const id = btn.dataset['id'];

  let cartItems = JSON.parse(localStorage.getItem('cart'));
  const productInfo = products.find((product) => {
    return product.id == id;
  });
  const { name, price, image, colors, company } = productInfo.fields;
  const imgURL = image[0].url;

  if (cartItems == null) {
    cartItems = [];
    cartItems[0] = {
      id: id,
      name: name,
      price: price,
      image: imgURL,
      colors: colors,
      company: company,
      amount: 1,
    };
  } else {
    if (cartItems.find((item) => item.id === id)) {
      cartItems = cartItems.map((item) => {
        if (item.id === id) {
          item.amount++;
        }

        return item;
      });
    } else {
      cartItems.push({
        id: id,
        name: name,
        price: price,
        image: imgURL,
        colors: colors,
        company: company,
        amount: 1,
      });
    }
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));

  cart.classList.add('cart--show');

  displayCartItems();
}

export default addItemToCart;
