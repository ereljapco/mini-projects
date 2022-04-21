// assign question, toggle-btn and text to variables
const questions = document.querySelectorAll('.question');

// for each question, show text when toggleBtn is clicked
questions.forEach((question) => {
  // select toggle-btn of question
  const toggleBtns = question.querySelectorAll('.question__toggle-btn');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // remove .question__text--open on all question
      questions.forEach((q) => {
        q.classList.remove('question__text--open');
      });
      // add .question __text--open on the selected question
      if (btn.classList.contains('toggle-btn--plus')) {
        question.classList.add('question__text--open');
      } else {
        question.classList.remove('question__text--open');
      }
      console.log(question);
    });
  });

});