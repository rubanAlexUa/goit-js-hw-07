document.querySelector("#name-input").addEventListener("input", (e) => {
  console.log(e);
  document.querySelector("#name-output").textContent = e.target.value;
});
