// select .features__btn
const featuresBtnsContainer = document.querySelector('.features__btns');

featuresBtnsContainer.addEventListener('click', function(e) {
  const featuresBtns = document.querySelectorAll('.features__btn');
  // get the data-set value of the current btn and assign to variable 'id'
  // select .features__content with the value of the 'id'
  
  // add .features__btn--active only to the current btn
  featuresBtns.forEach(function(btn) {
    if (btn !== e.target) {
      btn.classList.remove('features__btn--active');
    }

    e.target.classList.add('features__btn--active');
  });

  // add .features__content--active to the selected .features__content

});