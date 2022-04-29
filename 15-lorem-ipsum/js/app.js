// select .lorem-ipsum__form, .lorem-ipsum__parnum, and .lorem-ipsum__paragraphs
const paragraphNum = document.querySelector('.lorem-ipsum__parnum');
const loremForm = document.querySelector('.lorem-ipsum__form');
const loremParagraphs = document.querySelector('.lorem-ipsum__paragraphs');

// add submit event listener to loremSubmitBtn
loremForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // assign value of paragraphNum to paragraphNumValue
  const paragraphNumValue = parseInt(paragraphNum.value);
  const randomNum = Math.floor(Math.random() * paragraphs.length);

  let randomParagraphs = [];

  for (let i = 0; i < paragraphNumValue; i++) {
    randomParagraphs.push(paragraphs[randomNum]);
  }

  const displayParagraphs = randomParagraphs
    .map(function (paragraph) {
      return `
    <p class="lorem-ipsum__paragraph">${paragraph}</p>
    `;
    })
    .join('');

  loremParagraphs.innerHTML = displayParagraphs;
});
