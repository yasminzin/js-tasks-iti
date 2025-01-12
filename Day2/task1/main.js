var userString = prompt("Enter the string");
function count(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == "e") {
      count++;
    }
  }
  document.writeln(`<h3>Number of e characters in string = ${count}</h3>`);
  console.log(count);
}

count(userString);
