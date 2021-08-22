const elemCat = document.querySelector("#categories");

const elemItems = elemCat.querySelectorAll(".item");
console.log(`В списке ${elemItems.length} категории`);

const titles = [];
elemItems.forEach((element) => {
  console.log(
    "Категория : ",
    element.getElementsByTagName("h2")[0].textContent
  );
  console.log(
    "Количество элементов : ",
    element.getElementsByTagName("li").length
  );
});
