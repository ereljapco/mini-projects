const groceryItemInput = document.querySelector('.grocery-bud__input');
const groceryItemsContainer = document.querySelector(
  '.grocery-bud__items--container'
);
const groceryItems = document.querySelector('.grocery-bud__items');
const groceryForm = document.querySelector('.grocery-bud');
const groceryAlert = document.querySelector('.grocery-bud__alert');
groceryAlert.textContent = `message`;

window.addEventListener('load', displayGroceryItems);

groceryForm.addEventListener('submit', addGroceryItem);

function displayGroceryItems() {
  const groceryList = getItemsFromLocalStorage();

  console.log(groceryList);

  if (groceryList.length > 0) {
    // show grocery items container
    groceryItemsContainer.classList.add('grocery-bud__items--container--show');

    // display each item
    groceryList.forEach(function (groceryListItem) {
      console.log(groceryListItem.id);
      console.log(groceryListItem.value);
      const groceryItem = document.createElement('div');
      groceryItem.classList.add('grocery-bud__item');
      groceryItem.setAttribute('data-id', groceryListItem.id);
      groceryItem.innerHTML = `
      <p class="grocery-bud__item-title">${groceryListItem.value}</p>
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
    });
  }
}

function addGroceryItem(e) {
  e.preventDefault();
  let newItem = groceryItemInput.value;
  if (newItem) {
    groceryItemsContainer.classList.add('grocery-bud__items--container--show');
    const groceryItemId = new Date().getTime().toString();
    const groceryItem = document.createElement('div');
    groceryItem.classList.add('grocery-bud__item');
    groceryItem.setAttribute('data-id', groceryItemId);
    groceryItem.innerHTML = `
    <p class="grocery-bud__item-title">${newItem}</p>
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

    addToLocalStorage(groceryItemId, newItem);

    groceryItemInput.value = '';
  } else {
    alertMessage(`You didn't enter an item.`, 'danger');
  }
}

// display alert message
function alertMessage(message, alert) {
  groceryAlert.textContent = message;
  groceryAlert.classList.add(`alert--${alert}`, 'grocery-bud__alert--show');

  setTimeout(function () {
    groceryAlert.classList.remove(
      `alert--${alert}`,
      'grocery-bud__alert--show'
    );
  }, 2000);
}

function addToLocalStorage(id, value) {
  const groceryItem = { id, value };
  let groceryItems = getItemsFromLocalStorage();

  groceryItems.push(groceryItem);
  localStorage.setItem('groceryList', JSON.stringify(groceryItems));
}

function getItemsFromLocalStorage() {
  return localStorage.getItem('groceryList')
    ? JSON.parse(localStorage.getItem('groceryList'))
    : [];
}
