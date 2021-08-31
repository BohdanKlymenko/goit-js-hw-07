const inputNum = document.querySelector("#controls input");
const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');
const container = document.querySelector("#boxes");

const randomColour = () => {
  let r = Math.round(Math.random() * (255 - 0) + 0);
  let g = Math.round(Math.random() * (255 - 0) + 0);
  let b = Math.round(Math.random() * (255 - 0) + 0);
  return `rgb(${r},${g},${b})`;
};

buttonRender.addEventListener("click", () =>
  createBoxes(inputNum.valueAsNumber)
);

let count = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = randomColour();
    newBox.style.width = `${count}px`;
    newBox.style.height = `${count}px`;
    count += 10;
    container.appendChild(newBox);
  }
}

const destroyBoxes = () => {
  inputNum.value = "";
  container.innerHTML = "";
  count = 30;
};
buttonDestroy.addEventListener("click", destroyBoxes);
