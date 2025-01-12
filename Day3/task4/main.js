var userString = prompt("Enter the string");
var userArray = userString.split(" ");

function upperCaseFirstLetter() {
  for (var i = 0; i < userArray.length; i++) {
    // userArray[i] = userArray[i].charAt(0).toUpperCase() + userArray[i].slice(1);
    userArray[i] = userArray[i].replace(
      userArray[i].charAt(0),
      userArray[i].charAt(0).toUpperCase()
    );
    console.log(userArray[i]);
  }
  var userStringTwo = userArray.join(" ");
  document.writeln(userStringTwo);
}

upperCaseFirstLetter();
