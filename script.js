const email = document.getElementById("email");
const password = document.getElementById("password");
const forms = document.getElementById("forms");

forms.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(email.value, password.value);
});
