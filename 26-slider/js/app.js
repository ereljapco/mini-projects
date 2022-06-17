import people from './modules/data.js';

const reviewsContainer = document.querySelector('.reviews-container');
const reviewsPrevBtn = document.querySelector('.slider__prev-btn');
const reviewsNextBtn = document.querySelector('.slider__next-btn');

displayReviews();

function displayReviews() {
  const displayReviews = people
    .map((person, index) => {
      const { img, name, job, text } = person;
      let position = 'review--next';

      if (index == 0) {
        position = 'review--active';
      }

      if (index == people.length - 1) {
        position = 'review--last';
      }

      return `<article class="review ${position}">
                <img
                class="review__img"
                src="${img}"
                alt="${name}"
                />
                <h2 class="review__name">${name}</h2>
                <p class="review__job">${job}</p>
                <p class="review__text">
                ${text}
                </p>
              </article>`;
    })
    .join('');

  reviewsContainer.innerHTML = displayReviews;

  reviewsPrevBtn.addEventListener('click', () => {
    slideReviews('prev');
  });

  reviewsNextBtn.addEventListener('click', () => {
    slideReviews();
  });
}

function slideReviews(action) {
  const active = document.querySelector('.review--active');
  const last = document.querySelector('.review--last');
  let next = active.nextElementSibling;

  if (!next) {
    next = reviewsContainer.firstElementChild;
  }

  active.classList.remove('review--active');
  next.classList.remove('review--next');
  last.classList.remove('review--last');

  if (action == 'prev') {
    active.classList.add('review--next');
    next.classList.add('review--last');
    last.classList.add('review--active');

    return;
  }

  active.classList.add('review--last');
  next.classList.add('review--active');
  last.classList.add('review--next');
}
