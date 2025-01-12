var createExpireDate = new Date();
createExpireDate.setDate(createExpireDate.getDate() + 3);

var deleteExpireDate = new Date();
deleteExpireDate.setDate(deleteExpireDate.getDate() - 1);

function createCookie(key, value, expire) {
  document.cookie = `${key}=${value};expires=${createExpireDate}`;
}

function deleteCookie(key) {
  document.cookie = `${key}=anything;expires=${deleteExpireDate}`;
}

function submitBtn(e) {
  e.preventDefault();

  var nameTyped = document.getElementById("name").value;
  var ageTyped = document.getElementById("age").value;
  var inputRadioChecked = document.querySelector("input[type='radio']:checked");
  var imageSrc = inputRadioChecked.previousElementSibling.getAttribute("src");
  var genderSelected = inputRadioChecked.getAttribute("id");
  var colorSelected = document.getElementById("color").value;

  createCookie("name", nameTyped, createExpireDate);
  createCookie("age", ageTyped, createExpireDate);
  createCookie("img", imageSrc, createExpireDate);
  createCookie("gender", genderSelected, createExpireDate);
  createCookie("color", colorSelected, createExpireDate);
  createCookie("count", 1, createExpireDate);

  location.href = "./yourpage.html";
}

function deleteBtn(e) {
  e.preventDefault();

  deleteCookie("name");
  deleteCookie("age");
  deleteCookie("img");
  deleteCookie("gender");
  deleteCookie("color");
  deleteCookie("count");
}

function hasCookie(e) {
  e.preventDefault();

  var cookieNameEntered = document.getElementById("cookie").value;
  var cookieExist = document.getElementById("cookie-exist");

  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    if (cookieNameEntered == cookies[i].trim().split("=")[0]) {
      cookieExist.innerHTML = `Found`;
      break;
    } else {
      cookieExist.innerHTML = `Not Found`;
    }
  }
}
