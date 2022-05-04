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
// alert
const groceryAlert = document.querySelector('.grocery-bud__alert');

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
    groceryAlert.textContent = `Added an item to the list.`;
    groceryAlert.classList.add('alert--success', 'grocery-bud__alert--show');
    console.log(groceryAlert);
    newItem.value = '';
  } else {
    console.log(`You didn't enter an item.`);
  }
});
