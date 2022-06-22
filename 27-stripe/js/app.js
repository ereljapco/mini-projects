import sublinks from './modules/sublinks.js';

const navSidebar = document.querySelector('.sidebar');
const sidebarOpenBtn = document.querySelector('.nav__open-btn');
const sidebarCloseBtn = document.querySelector('.sidebar__close-btn');
const navbarBtns = document.querySelectorAll('.navbar__btn');
const subItems = document.querySelector('.sub-items');
const subItemsTriangle = document.querySelector('.sub-items__triangle');
const subItemsContainer = document.querySelector('.sub-items-container');

sidebarOpenBtn.addEventListener('click', () => {
  navSidebar.classList.add('sidebar--show');
});

sidebarCloseBtn.addEventListener('click', () => {
  navSidebar.classList.remove('sidebar--show');
});

navbarBtns.forEach((btn) => {
  btn.addEventListener('mouseover', displaySubItems);
});

function displaySubItems(e) {
  const btn = e.target;

  const currentPage = sublinks.find((page) => page.page === btn.textContent);

  const { page: title, links } = currentPage;

  subItems.classList.add('sub-items--show');

  subItemsContainer.innerHTML = `<h3 class="sub-items__title">${title}</h3>
                                  <div class="sub-items__links sub-items__links--col-${
                                    links.length
                                  }">
                                  ${displayLinks(links)}
                                  </div>`;

  displayTriangle(btn);
}

function displayLinks(links) {
  const displayLinks = links
    .map((link) => {
      return `<a class="sub-items__link" href="${link.url}">
                <i class="sub-items__icon ${link.icon}"></i>
                ${link.label}
              </a>`;
    })
    .join('');

  return displayLinks;
}

function displayTriangle(btn) {
  const btnDOMRect = btn.getBoundingClientRect();
  const btnCenter = (btnDOMRect.left + btnDOMRect.right) / 2;

  subItemsTriangle.classList.add('sub-items__triangle--show');

  subItemsTriangle.style.left = `${btnCenter}px`;
}
