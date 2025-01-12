var darkBtn = document.getElementById("dark-mode-btn");
var formClass = document.querySelector(".form");
var inputs = document.getElementsByTagName("input");

function darkMode() {
  console.log(darkBtn);
  console.log(formClass);
  console.log(inputs);
  document.body.classList.toggle("dark-mode");
  darkBtn.classList.toggle("dark-mode");
  formClass.classList.toggle("dark-mode");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.toggle("dark-mode");
  }
}
