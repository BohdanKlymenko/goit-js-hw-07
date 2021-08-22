let counter = 0;

function decrement() {
  counter = counter - 1;
  return counter;
}

function increment() {
  counter = counter + 1;
  return counter;
}

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById("value");

const decrementButtonClick = decrementButton.addEventListener("click", (e) => {
  let value = decrement();
  counterValue.textContent = value;
  return value;
});

const incrementButtonClick = incrementButton.addEventListener("click", (e) => {
  let value = increment();
  counterValue.textContent = value;
  return value;
});
