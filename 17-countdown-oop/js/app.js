function Counter(element, value) {
  this.value = value;
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;
  this.decreaseBtn = element.querySelector('.decrease-btn');
  this.resetBtn = element.querySelector('.reset-btn');
  this.increaseBtn = element.querySelector('.increase-btn');

  this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
  this.resetBtn.addEventListener('click', this.reset.bind(this));
}

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(
  checkSelect('.counter__first--container'),
  100
);
const secondCounter = new Counter(
  checkSelect('.counter__second--container'),
  200
);

function checkSelect(select) {
  const element = document.querySelector(select);

  if (element) {
    return element;
  } else {
    throw new Error(
      `Pleas check "${select}" selector. No such element exists.`
    );
  }
}
