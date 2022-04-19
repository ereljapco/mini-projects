// color array
const colorPalette = ['#fffffe', '#2d334a', '#ffd803', '#bae8e8', '#e3f6f5', '#fbfbfb'];

// select main, btn, and color, and assign to a variable
const main = document.querySelector('.color-flipper__main');
const btn = document.querySelector('#btn');
const color = document.querySelector('.color-flipper--color');
console.log(btn);


// add event listener for btn
btn.addEventListener('click', function () {
  let randomColor = randomNumber();
  
  main.style.backgroundColor = colorPalette[randomColor];
  color.innerText = colorPalette[randomColor].toUpperCase();
});

// random number function
function randomNumber() {
  const number = Math.floor(Math.random() * colorPalette.length);
  console.log(number);
  return number;
}