const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(
    `Elements : ${elem.querySelector("ul").querySelectorAll("li").length}`
  );
});
