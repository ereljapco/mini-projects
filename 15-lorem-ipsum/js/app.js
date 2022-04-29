// select .lorem-ipsum__form, .lorem-ipsum__parnum, and .lorem-ipsum__paragraphs
const paragraphNum = document.querySelector('.lorem-ipsum__parnum');
const loremForm = document.querySelector('.lorem-ipsum__form');
const loremParagraphs = document.querySelector('.lorem-ipsum__paragraphs');

// add submit event listener to loremSubmitBtn
loremForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // assign value of paragraphNum to paragraphNumValue
  const paragraphNumValue = parseInt(paragraphNum.value);

  let randomParagraphs = [];

  generateRandomParagraphs(randomParagraphs, paragraphNumValue);

  displayParagraphs(randomParagraphs);
});

function generateRandomParagraphs(parArray, parNum) {
  const randomNum = Math.floor(Math.random() * paragraphs.length);

  if (isNaN(parNum) || parNum < 1) {
    parArray.push(paragraphs[randomNum]);
  }

  let pastNum;

  for (let i = 0; i < parNum; i++) {
    // generate random number different from the previously generated
    let num;
    do {
      const randomNum = Math.floor(Math.random() * paragraphs.length);
      num = randomNum;
    } while (pastNum == num);

    parArray.push(paragraphs[num]);
    pastNum = num;
  }

  return parArray;
}

function displayParagraphs(parArray) {
  const displayParagraphs = parArray
    .map(function (paragraph) {
      return `
    <p class="lorem-ipsum__paragraph">${paragraph}</p>
    `;
    })
    .join('');

  loremParagraphs.innerHTML = displayParagraphs;
}
