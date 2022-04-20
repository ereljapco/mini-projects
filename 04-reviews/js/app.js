// get the img, reviewer, job-title and text elements
const img = document.querySelector('.review__img');
const reviewer = document.querySelector('.review__reviewer');
const job = document.querySelector('.review__job-title');
const text = document.querySelector('.review__text');

// get review--btn and assign to variable
const btns = document.querySelectorAll('.review--btn');

// change img, reviwer, job-title, and text when a btn is clicked
let index = 0;
const reviewsLen = reviews.length;

btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const btnClass = e.currentTarget.classList;

    // show previous review
    if (btnClass.contains('review__prev-btn')) {
      if (index == 0) {
        index = reviewsLen - 1;
      } else {
        index--;
      }
    // next previous review
  } else if (btnClass.contains('review__next-btn')) {
    if (index == 3) {
      index = 0;
    } else {
      index++;
    }
    // random review
    } else {
      let num = randomIndex();
      // generate random number if the generated one is equal to index
      while (num == index) {
        num = randomIndex();
      }

      index = num;
    }

    // change the img, reviewer, job-title, and text
    img.src = reviews[index].img;
    reviewer.textContent = reviews[index].name;
    job.textContent = reviews[index].job;
    text.textContent = reviews[index].text;
    console.log(index);
  });
});

// random index from 0 to reviewsLen - 1
function randomIndex() {
  const indexNum = Math.floor(Math.random() * reviewsLen);
  
  return indexNum;
}