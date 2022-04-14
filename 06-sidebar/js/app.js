const getElement = (selector) => {
  const el = document.querySelector(selector)
  if (el) return el
  throw new Error(`Please check your classes : ${selector} does not exist`)
}

const sidebarToggle = getElement('.nav__toggle-btn')
const sidebar = getElement('.sidebar')
const closeBtn = getElement('.sidebar__close-btn')

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar--show')
})

closeBtn.addEventListener('click',()=>{
  sidebar.classList.remove('sidebar--show')

})