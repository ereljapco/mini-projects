// select menu__items, menu__filter
const menuContainer = document.querySelector('.menu__items');
const menuFilterContainer = document.querySelector('.menu__filter');

// add event listener of DOMContentLoaded to window
window.addEventListener('DOMContentLoaded', function() {
  
  displayMenuItems(menu);
  displayFilteredMenuItems(menu);
  
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

function displayFilteredMenuItems(menuItems) {
  // create a category array
  let category = menuItems.reduce(function(menuCategories, cat) {
    if (!menuCategories.includes(cat.category)) {
      menuCategories.push(cat.category);
    }
    return menuCategories;
  }, ['All']);
  
  let displayCategories = category.map(function(category) {
    return `<button class="menu__filter-btn btn" data-category="${category}">${category}</button>`;
  });
  
  displayCategories = displayCategories.join('');
  
  menuFilterContainer.innerHTML = displayCategories;
  
  // display menu items based on category selected
  const filterBtns = document.querySelectorAll('.menu__filter-btn');
  
  filterBtns.forEach(function(btn) {
    let filteredMenu = menuItems.reduce(function(filtered, item) {
      
      if (btn.dataset.category === item.category) {
        filtered.push(item);
      }
      
      return filtered;
    }, []);
    
    let currentMenuItems = menuItems;
    
    if (btn.dataset.category !== 'All') {
      currentMenuItems = filteredMenu;
    }
    
    btn.addEventListener('click', function() {
      displayMenuItems(currentMenuItems);
    });
  });
}