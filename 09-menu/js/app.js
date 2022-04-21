// select menu__items
const menuContainer = document.querySelector('.menu__items');

// add event listener of DOMContentLoaded to window
window.addEventListener('DOMContentLoaded', function() {
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
