// assign counter__btn to btns variable
// assign counter__count to a variable
const btns = document.querySelectorAll('.counter__btn');
const count = document.querySelector('.counter__count');

// initialize counter variable with 0 as value
let counter = 0;

// add event listener to each btn
btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const currentBtn = e.currentTarget.classList;
    // check if btn has increase class
    if (currentBtn.contains('increase')) {
      counter++;
    // check if btn has decrease class and is greater than 0
    } else if (currentBtn.contains('decrease')) {
      counter--;
    } else {
      counter = 0;
    }

    let color = '#ffd803';

    if (counter > 0) {
      color = '#587246';
    } else if (counter < 0) {
      color = '#b44c43';
    } else {
      color = '#ffd803';
    }

    count.style.color = color;
    // change text of count with the value of counter
    count.textContent = counter;
  });
});