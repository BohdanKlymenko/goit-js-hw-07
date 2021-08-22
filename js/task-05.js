const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);
function onInputChange(e) {
  e.preventDefault();
  outputName.textContent = e.currentTarget.value.trim() || "незнакомец";
}
