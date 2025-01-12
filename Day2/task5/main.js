var userString = prompt("Enter the string");
var userLetter = prompt("Enter the letter");

var userArray = userString.split("");

var newArray = [];
function letterFreq() {
  for (var i = 0; i < userString.length; i++) {
    if (userArray[i] == userLetter) {
      newArray.push(i);
    }
  }
  document.writeln(`<h2>[${newArray}]</h2>`);
}

letterFreq();
