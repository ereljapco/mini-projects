// assign counter__btn to btns variable
// assign counter__count to a variable
const btns = document.querySelectorAll('.counter__btn');
const count = document.querySelector('.counter__count');

// initialize counter variable with 0 as value
let counter = 0;

// add event listener to each btn
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // check if btn has increase class
    if (btn.classList.contains('increase')) {
      counter++;
    // check if btn has decrease class and is greater than 0
    } else if (btn.classList.contains('decrease') && counter > 0) {
      counter--;
    } else {
      counter = 0;
    }

    // change text of count with the value of counter
    count.textContent = counter;
  });
});