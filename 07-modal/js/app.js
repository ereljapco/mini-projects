const getElement = (selector) => {
  const el = document.querySelector(selector)
  if (el) return el
  throw new Error(`Please double check the ${selector}`)
}

const modalBtn = getElement('.modal__open-btn')
const modal = getElement('.modal--overlay')
const closeBtn = getElement('.modal__close-btn')

modalBtn.addEventListener('click', function () {
  modal.classList.add('modal--overlay-open')
})
closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal')
})