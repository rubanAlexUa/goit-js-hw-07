const form = document.querySelector(".login-form");
let user = {};
form.addEventListener("submit", (e) => {
  if (
    e.target.elements.email.value.trim() === "" ||
    e.target.elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
    e.preventDefault();
  } else {
    e.preventDefault();
    user.email = e.target.elements.email.value.trim();
    user.password = e.target.elements.password.value.trim();
    e.target.reset();
    console.log(user);
  }
});
