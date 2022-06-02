const numberValues = document.querySelectorAll('.number__value');

numberValues.forEach((numberValue) => {
  updateCount(numberValue);
});

function updateCount(number) {
  const value = parseInt(number.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      number.textContent = `${value}+`;
      clearInterval(increaseCount);

      return;
    }

    number.textContent = initialValue;
  }, 1);
}
