const groceryItemInput = document.querySelector('.grocery-bud__input');
const groceryItemsContainer = document.querySelector(
  '.grocery-bud__items--container'
);
const groceryItems = document.querySelector('.grocery-bud__items');
const groceryForm = document.querySelector('.grocery-bud');
const groceryAlert = document.querySelector('.grocery-bud__alert');
groceryAlert.textContent = `message`;
const groceryClearBtn = document.querySelector('.grocery-bud__clear-btn');
const grocerySubmitBtn = document.querySelector('.grocery-bud__submit-btn');

let editElement;
let editFlag = false;
let editId = '';

window.addEventListener('load', displayGroceryItems);

groceryForm.addEventListener('submit', addGroceryItem);

// clear all items
groceryClearBtn.addEventListener('click', function () {
  localStorage.clear();
  groceryItemsContainer.classList.remove('grocery-bud__items--container--show');
});

function displayGroceryItems() {
  const groceryList = getItemsFromLocalStorage();
  if (groceryList.length > 0) {
    // show grocery items container
    groceryItemsContainer.classList.add('grocery-bud__items--container--show');

    // display each item
    groceryList.forEach(function (groceryListItem) {
      addGroceryItemElement(groceryListItem.id, groceryListItem.value);
    });
  }
}

function addGroceryItem(e) {
  e.preventDefault();
  let groceryItem = groceryItemInput.value;
  if (groceryItem && !editFlag) {
    groceryItemsContainer.classList.add('grocery-bud__items--container--show');
    const groceryItemId = new Date().getTime().toString();

    addGroceryItemElement(groceryItemId, groceryItem);

    alertMessage('Added an item to the list!', 'success');

    addToLocalStorage(groceryItemId, groceryItem);

    groceryItemInput.value = '';
  } else if (groceryItem && editFlag) {
    editElement.textContent = groceryItemInput.value;

    const id = editElement.parentElement.dataset.id;
    let groceryItems = getItemsFromLocalStorage();

    editId = id;

    const groceryItemIndex = groceryItems.findIndex(function (item) {
      return item.id === id;
    });

    groceryItems[groceryItemIndex].value = groceryItemInput.value;

    localStorage.setItem('groceryList', JSON.stringify(groceryItems));

    groceryItemInput.value = '';
    grocerySubmitBtn.textContent = 'Submit';
    editFlag = false;
  } else {
    alertMessage(`You didn't enter an item.`, 'danger');
  }
}

function addGroceryItemElement(id, value) {
  const groceryItem = document.createElement('div');
  groceryItem.classList.add('grocery-bud__item');
  groceryItem.setAttribute('data-id', id);
  groceryItem.innerHTML = `
    <p class="grocery-bud__item-title">${value}</p>
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

  // edit item
  const groceryEditBtns = document.querySelectorAll(
    '.grocery-bud__item-edit-btn'
  );

  groceryEditBtns.forEach(function (editBtn) {
    editBtn.addEventListener('click', function (e) {
      editFlag = true;

      const element = e.currentTarget.parentElement.parentElement;
      editElement = element.querySelector('.grocery-bud__item-title');

      grocerySubmitBtn.textContent = 'edit';

      groceryItemInput.value = editElement.textContent;

      groceryForm.addEventListener('submit', addGroceryItem);
    });
  });

  // delete item
  const groceryDeleteBtns = document.querySelectorAll(
    '.grocery-bud__item-delete-btn'
  );

  groceryDeleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener('click', function (e) {
      const element = e.currentTarget.parentElement.parentElement;
      const id = element.dataset.id;
      let groceryItems = getItemsFromLocalStorage();

      const groceryItem = groceryItems.find(function (item) {
        return item.id === id;
      });

      groceryItems.pop(groceryItem);
      localStorage.setItem('groceryList', JSON.stringify(groceryItems));

      element.style.display = 'none';
    });
  });
}

function editGroceryItem(id, value) {
  // console.log(id);
  // console.log(value);
  let groceryItems = getItemsFromLocalStorage();
  groceryItem = groceryItems.find(function (item) {
    return item.id === id;
  });

  groceryItems.value = value;
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
