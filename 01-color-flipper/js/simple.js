// color array
const colorPalette = ['#fffffe', '#2d334a', '#ffd803', '#bae8e8', '#e3f6f5', '#fbfbfb'];

// select main and btn, and assign to a variable
const main = document.querySelector('.color-flipper__main');
const btn = document.querySelector('#btn');
console.log(btn);

// add event listener for btn
btn.addEventListener('click', function () {
  const randomColor = 3;
  
  main.style.backgroundColor = colorPalette[randomColor];
});
// get a random color from colorPalette when btn is clicked