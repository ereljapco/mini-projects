// add an item to the grocery list
// select value of .grocery-bud__input
// select grocery-bud__items--container
// -- should not be visible when items is less than 0
// select grocery-bud__items
// create element with .grocery-bud__item
// add ID attribute, use new Date() for the ID

const newItem = document.querySelector('.grocery-bud__input');
const groceryItemsContainer = document.querySelector(
  '.grocery-bud__items--container'
);
const groceryItems = document.querySelector('.grocery-bud__items');
const groceryForm = document.querySelector('.grocery-bud');
const groceryAlert = document.querySelector('.grocery-bud__alert');
groceryAlert.textContent = `message`;

groceryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (newItem.value) {
    const groceryItem = document.createElement('div');
    groceryItem.classList.add('grocery-bud__item');
    groceryItem.innerHTML = `
    <p class="grocery-bud__item-title">${newItem.value}</p>
    <div class="grocery-bud__item-actions">
      <button class="grocery-bud__item-edit-btn">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="grocery-bud__item-delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    `;
    groceryItems.appendChild(groceryItem);
    alertMessage('Added an item to the list!', 'success');
    newItem.value = '';
  } else {
    alertMessage(`You didn't enter an item.`, 'danger');
  }
});

function alertMessage(message, alert) {
  groceryAlert.textContent = message;
  groceryAlert.classList.add(`alert--${alert}`, 'grocery-bud__alert--show');

  setTimeout(function () {
    groceryAlert.classList.remove(`alert-${alert}`, 'grocery-bud__alert--show');
  }, 2000);
}
