var inputs = document.getElementsByTagName("input");
var button = document.querySelector("button");
var nameRequired = document.querySelector(".name-required");
var ageRequired = document.querySelector(".age-required");

function changeColorFocus(e) {
  e.target.style.border = "2px orange solid";
}

function changeColorBlur(e) {
  e.target.style.border = "2px black solid";
}

function deleteStudent(e) {
  e.target.parentNode.remove();
}

function showAndClearError(
  inputNumber,
  message,
  MessageElement,
  messageElementDisplay,
  ElementMessageStyle
) {
  inputNumber.style.border = ElementMessageStyle;
  MessageElement.innerText = message;
  MessageElement.style.visibility = messageElementDisplay;
}

function changeColorName() {
  if (inputs[0].value.length > 3) {
    showAndClearError(inputs[0], "", nameRequired, "hidden", "2px green solid");
    return true;
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
  }
}

function changeColorAge() {
  if (inputs[1].value > 18 && inputs[1].value > 0) {
    showAndClearError(inputs[1], "", ageRequired, "hidden", "2px green solid");
    return true;
  } else if (inputs[1].value == "") {
    showAndClearError(
      inputs[1],
      "Age is required",
      ageRequired,
      "visible",
      "2px red solid"
    );
  } else {
    showAndClearError(
      inputs[1],
      "Age must be greater than 18",
      ageRequired,
      "visible",
      "2px red solid"
    );
  }
}

inputs[0].addEventListener("input", changeColorName);
inputs[1].addEventListener("input", changeColorAge);

function getRandomId() {
  var tdsOne = document.getElementsByClassName("td-one");
  var randomId = Math.floor(Math.random() * 200);
  for (var i = 0; i < tdsOne.length; i++) {
    while (randomId == tdsOne[i].innerText) {
      var randomId = Math.floor(Math.random() * 200);
      i = 0;
    }
  }
  stringRandomId = String(randomId);
  if (stringRandomId.length == 1) {
    stringRandomId = "00" + stringRandomId;
  } else if (stringRandomId.length == 2) {
    stringRandomId = "0" + stringRandomId;
  }
  return stringRandomId;
}

function addStudent(e) {
  var table = document.querySelector("table");
  e.preventDefault();
  if (changeColorName() && changeColorAge()) {
    var newTr = document.createElement("tr");
    newTr.innerHTML = `<td class="td-one">2018${getRandomId()}</td>
    <td>${inputs[0].value}</td>
    <td>${inputs[1].value}</td>
    <td class="td-created" onclick="deleteStudent(event)">Delete Student</td>`;
    table.appendChild(newTr);
  }
}
