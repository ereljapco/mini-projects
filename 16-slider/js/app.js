// select children of .slider__imgs
const sliderImgs = document.querySelectorAll('.slider__imgs > div');

// console.log(sliderImgs);

// select .slider__prev-btn and .slider__next-btn
const sliderPrevBtn = document.querySelector('.slider__prev-btn');
const sliderNextBtn = document.querySelector('.slider__next-btn');

console.log(sliderPrevBtn);
console.log(sliderNextBtn);

// set counter to 0

let counter = 0;
// add click event listener to btns
// increment counter when next-btn is click
showHideBtn();

sliderNextBtn.addEventListener('click', function () {
  counter++;
  console.log(counter);
  slide();
  showHideBtn();
});
// decreament counter when prev-btn is click
sliderPrevBtn.addEventListener('click', function () {
  counter--;
  console.log(counter);
  slide();
  showHideBtn();
});

function showHideBtn() {
  if (counter > 0) {
    sliderPrevBtn.style.visibility = 'visible';
  } else {
    sliderPrevBtn.style.visibility = 'hidden';
  }

  if (counter < sliderImgs.length - 1) {
    sliderNextBtn.style.visibility = 'visible';
  } else {
    sliderNextBtn.style.visibility = 'hidden';
  }
}

function slide() {
  sliderImgs.forEach(function (sliderImg) {
    sliderImg.style.transform = `translateX(-${counter * 100}%)`;
  });
}
