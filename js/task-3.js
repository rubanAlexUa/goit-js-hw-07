document.querySelector("#name-input").addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    document.querySelector("#name-output").textContent = "Anonymous";
  } else {
    document.querySelector("#name-output").textContent = e.target.value;
  }
});
