// select .features__btn
const featuresBtnsContainer = document.querySelector('.features__btns');

featuresBtnsContainer.addEventListener('click', function(e) {
  const featuresBtns = document.querySelectorAll('.features__btn');
  const featuresContents = document.querySelectorAll('.features__content');
  // get the data-set value of the current btn and assign to variable 'id'
  const id = e.target.dataset.id;
  // select .features__content with the value of the 'id'
  const featuresContent = document.querySelector(`#${id}`);

  // add .features__btn--active only to the current btn
  featuresBtns.forEach(function(btn) {
    if (btn !== e.target) {
      btn.classList.remove('features__btn--active');
    }
  });

  e.target.classList.add('features__btn--active');

  // add .features__content--active to the selected .features__content only
  
  featuresContents.forEach(function(content) {
    if (content !== featuresContent) {
      content.classList.remove('features__content--active');
    }
  });
  
  featuresContent.classList.add('features__content--active');
  // console.log(featuresContent.classList);
});