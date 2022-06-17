import people from './modules/data.js';

const reviewsContainer = document.querySelector('.reviews-container');

const reviews = people
  .map((people) => {
    const { img, name, job, text } = people;

    return `<article class="review">
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

reviewsContainer.innerHTML = reviews;
