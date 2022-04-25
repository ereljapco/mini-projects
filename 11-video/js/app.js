// select .header__switch-btn, .header__video--container, and .preloader
const switchBtn = document.querySelector('.header__switch-btn');
const videoContainer = document.querySelector('.header__video--container');
const preloader = document.querySelector('.preloader');

// move slider by adding .header__switch-btn--slide to switchBtn
switchBtn.addEventListener('click', function() {
  if (!switchBtn.classList.contains('header__switch-btn--slide')) {
    switchBtn.classList.add('header__switch-btn--slide');
    videoContainer.pause();
  } else {
    switchBtn.classList.remove('header__switch-btn--slide');
    videoContainer.play();
  }
});

window.addEventListener('load', function() {
  preloader.classList.add('preloader--hide');
});