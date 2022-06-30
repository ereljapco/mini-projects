import {
  cartItemsContainer,
  cartTotalContainer,
  cartTotalQtyContainer,
} from './elements.js';

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart'));

  if (cartItems == null) {
    return;
  }

  const displayCartItems = cartItems
    .map((item) => {
      const { id, name, price, image, amount } = item;
      const formatPrice = `$${price / 100}`;

      return `<article class="item" data-id="${id}">
              <div class="item__img-container">
                <img
                  class="item__img"
                  src="${image}"
                  alt="${name}"
                />
              </div>
              <div class="item__info">
                <h3 class="item__title">${name}</h3>
                <p class="item__price">${formatPrice}</p>
                <button class="item__remove-btn">remove</button>
              </div>
              <div class="item__qty">
                <button class="item__add-qty">
                  <i class="fa-solid fa-chevron-up"></i>
                </button>
                <p class="item__number">${amount}</p>
                <button class="item__minus-qty">
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            </article>`;
    })
    .join('');

  cartItemsContainer.innerHTML = displayCartItems;

  removeCartItem();

  displayTotalAmount(cartItems);

  displayTotalQty(cartItems);
}

function displayTotalAmount(cartItems) {
  const displayTotalAmount = cartItems.reduce((previous, current) => {
    current = current.price * current.amount;

    return previous + current;
  }, 0);

  cartTotalContainer.textContent = `Total: $${displayTotalAmount / 100}`;
}

function displayTotalQty(cartItems) {
  const displayTotalQty = cartItems.reduce((previous, current) => {
    current = current.amount;

    return previous + current;
  }, 0);

  cartTotalQtyContainer.textContent = displayTotalQty;
}

function removeCartItem() {
  const itemsRemoveBtns = document.querySelectorAll('.item__remove-btn');

  itemsRemoveBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let item = e.currentTarget.parentElement.parentElement;
      const id = e.currentTarget.parentElement.parentElement.dataset['id'];
      let cartItems = JSON.parse(localStorage.getItem('cart'));

      cartItems = cartItems.filter((item) => {
        return item.id !== id;
      });

      localStorage.setItem('cart', JSON.stringify(cartItems));

      item.parentElement.removeChild(item);

      cartItems = JSON.parse(localStorage.getItem('cart'));

      displayTotalAmount(cartItems);
      displayTotalQty(cartItems);
    });
  });
}

export default displayCartItems;
