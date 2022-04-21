// assign question, toggle-btn and text to variables
const questions = document.querySelectorAll('.question');

// for each question, show text when toggleBtn is clicked
questions.forEach((question) => {
  // select toggle-btn of question
  const toggleBtn = question.querySelector('.question__toggle-btn');

  toggleBtn.addEventListener('click', () => {
    // remove .question__text--open on all question
    questions.forEach((q) => {
      q.classList.remove('question__text--open');
    });
    // add .question __text--open on the selected question
    question.classList.toggle('question__text--open');
  });
});