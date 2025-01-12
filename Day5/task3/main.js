var inputs = document.getElementsByTagName("input");
var country = document.getElementById("country");
var nameRequired = document.querySelector(".name-required");
var emailValid = document.querySelector(".email-valid");
var passValid = document.querySelector(".pass-valid");
var genderRequierd = document.querySelector(".gender-required");
var sportsRequired = document.querySelector(".sports-required");
var countryRequired = document.querySelector(".country-required");

function showAndClearError(
  input,
  message,
  MessageElement,
  messageElementDisplay,
  ElementMessageStyle
) {
  input.style.border = ElementMessageStyle;
  MessageElement.innerText = message;
  MessageElement.style.visibility = messageElementDisplay;
}

function submitBtn(e) {
  e.preventDefault();
  var submitSuccess = true;

  if (inputs[0].value.length > 3) {
    showAndClearError(inputs[0], "", nameRequired, "hidden", "2px green solid");
  } else if (inputs[0].value.length == 0) {
    showAndClearError(
      inputs[0],
      "Student Name is required",
      nameRequired,
      "visible",
      "2px red solid"
    );
  } else {
    showAndClearError(
      inputs[0],
      "Name Length must be greater than 3",
      nameRequired,
      "visible",
      "2px red solid"
    );
    submitSuccess = false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(inputs[1].value)) {
    showAndClearError(inputs[1], "", emailValid, "hidden", "2px green solid");
  } else {
    showAndClearError(
      inputs[1],
      "Email is not valid",
      emailValid,
      "visible",
      "2px red solid"
    );
    submitSuccess = false;
  }

  if (inputs[2].value.length < 8) {
    showAndClearError(
      inputs[2],
      "Password must be 8 characters at least",
      passValid,
      "visible",
      "2px red solid"
    );
    submitSuccess = false;
  } else {
    showAndClearError(inputs[2], "", passValid, "hidden", "2px green solid");
  }

  if (!inputs[3].checked && !inputs[4].checked) {
    showAndClearError(
      inputs[3],
      "Please select your gender",
      genderRequierd,
      "visible"
    );
    submitSuccess = false;
  } else {
    showAndClearError(inputs[3], "", genderRequierd, "hidden");
  }

  if (
    (inputs[5].checked && inputs[6].checked) ||
    (inputs[5].checked && inputs[7].checked) ||
    (inputs[6].checked && inputs[7].checked) ||
    (inputs[5].checked && inputs[6].checked && inputs[7].checked)
  ) {
    showAndClearError(inputs[5], "", sportsRequired, "hidden");
  } else {
    showAndClearError(
      inputs[5],
      "Please select at least two sports",
      sportsRequired,
      "visible",
      "2px red solid"
    );
    submitSuccess = false;
  }

  if (country.value == "") {
    showAndClearError(
      country,
      "Please select country",
      countryRequired,
      "visible",
      "2px red solid"
    );
    submitSuccess = false;
  } else {
    showAndClearError(
      country,
      "",
      countryRequired,
      "hidden",
      "2px green solid"
    );
  }

  if (submitSuccess) {
    alert("Form is submitted");
  }
}

function changeColorFocus(e) {
  e.target.style.border = "2px orange solid";
}

function changeColorBlur(e) {
  e.target.style.border = "2px black solid";
}

function resetBtn(e) {
  e.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "radio" || inputs[i].type === "checkbox") {
      inputs[i].checked = false;
    } else {
      inputs[i].value = "";
    }
  }
  country.value = "";
}
