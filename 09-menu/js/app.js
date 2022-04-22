// select menu__items and menu__filter
const menuContainer = document.querySelector('.menu__items');
const menuFilterContainer = document.querySelector('.menu__filter');

// add event listener of DOMContentLoaded to window
window.addEventListener('DOMContentLoaded', function() {
  
  // create a category array
  let category = menu.reduce(function(menuCategories, cat) {
    if (!menuCategories.includes(cat.category)) {
      menuCategories.push(cat.category);
    }
    return menuCategories;
  }, ['all']);

  let displayCategories = category.map(function(category) {
    return `<button class="menu__filter-btn btn" data-category="${category}">${category}</button>`;
  });

  displayCategories = displayCategories.join('');
  
  menuFilterContainer.innerHTML = displayCategories;
  
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  // create a displayMenu array using map method
  let displayMenu = menuItems.map(function(item) {
    return `<!-- menu item -->
            <article class="menu__item">
              <!-- menu item img -->
              <img
                class="menu__item-img img"
                src="${item.img}"
                alt="${item.title}"
              />
              <!-- menu item info -->
              <div class="menu__item-info">
                <div class="menu__item-header">
                  <h2 class="menu__item-title">${item.title}</h2>
                  <p class="menu__item-price">&#8369; ${item.price}</p>
                </div>
                <p class="menu__item-text">
                  ${item.description}
                </p>
              </div>
            </article>
            <!-- end of menu item -->`;
  });
  // remove comma between items using join('')
  displayMenu = displayMenu.join('');

  menuContainer.innerHTML = displayMenu;
}
