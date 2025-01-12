var userString = prompt("Enter the string");
var caseSens = confirm("Case-sensitive ? (yes/no)");

if (caseSens) {
  userString = userString.toLowerCase();
}

var arrayOfUserString = userString.split("");
var arrayOfUserStringForReverse = userString.split("");
var reversedArray = arrayOfUserStringForReverse.reverse();

console.log(arrayOfUserString);
console.log(reversedArray);

var correctedReverse = 1;
for (var i = 0; i < arrayOfUserString.length; i++) {
  if (arrayOfUserString[i] != reversedArray[i]) {
    document.writeln(`<h3>${userString} is not palindrome</h3>`);
    correctedReverse = 0;
    break;
  }
}

if (correctedReverse == 1) {
  document.writeln(`<h3>${userString} is palindrome</h3>`);
}

// Another way of palindrome
// reverse string by looping reversly to take the characters of string reversly and then compare normally between strings