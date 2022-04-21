// assign question, toggle-btn and text to variables
const questions = document.querySelectorAll('.question');

// for each question, show text when toggleBtn is clicked
questions.forEach((question) => {
  // select toggle-btn of question
  const toggleBtns = question.querySelectorAll('.question__toggle-btn');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // remove .question__text--open to other questions if current one is clicked
      questions.forEach((q) => {
        if (question != q) {
          q.classList.remove('question__text--open');
        }
      });
      // add .question __text--open if toggle-btn--plus is clicked
      if (btn.classList.contains('toggle-btn--plus')) {
        question.classList.add('question__text--open');
      // remove .question __text--open if toggle-btn--plus is clicked
      } else {
        question.classList.remove('question__text--open');
      }
    });
  });

});