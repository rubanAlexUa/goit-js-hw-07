function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", (e) => {
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
});
