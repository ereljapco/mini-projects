const getElement = (selector) => {
  const el = document.querySelector(selector)
  if (el) return el
  throw new Error(`Please check your classes : ${selector} does not exist`)
}

const navToggle = getElement('.navbar__toggle-btn')
const links = getElement('.navbar__links')

navToggle.addEventListener('click', function () {
  links.classList.toggle('.navbar__links--show')
})