// select .header__switch-btn
const switchBtn = document.querySelector('.header__switch-btn');

// move slider by adding .header__switch-btn--slide to switchBtn
switchBtn.addEventListener('click', function() {
  if (!switchBtn.classList.contains('header__switch-btn--slide')) {
    switchBtn.classList.add('header__switch-btn--slide');
  } else {
    switchBtn.classList.remove('header__switch-btn--slide');
  }
});