const form = document.querySelector(".login-form");
let user = {};
form.addEventListener("submit", (e) => {
  if (
    e.target.elements.email.value === "" ||
    e.target.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
    e.preventDefault();
  } else {
    e.preventDefault();
    user.email = e.target.elements.email.value;
    user.password = e.target.elements.password.value;
    e.target.reset();
    console.log(user);
  }
});
