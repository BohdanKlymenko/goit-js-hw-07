const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredients = document.querySelector("#ingredients");

const addElemLi = ingredients.map((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  return li;
});
ulIngredients.append(...addElemLi);
