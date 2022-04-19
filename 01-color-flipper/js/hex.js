// create hex array with 0 - 9 and 'A' to 'F'
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// assign btn, main, color to variables
const btn = document.querySelector('.color-flipper__btn');
const main = document.querySelector('.color-flipper__main');
const color = document.querySelector('.color-flipper--color');

// generate random number within 0 to length - 1 of hex array
function randomNumber() {
  const number = Math.floor(Math.random() * hex.length);
  console.log(number);
  return number;
}

randomNumber();