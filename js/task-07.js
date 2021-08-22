const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onInputChange);
function onInputChange(e) {
  text.style.fontSize = e.currentTarget.value + "px";
}
