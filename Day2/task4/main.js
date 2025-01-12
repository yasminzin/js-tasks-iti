var newArray = [];
for (var i = 0; i < 5; i++) {
  var userNumber = Number(prompt("Enter the number"));
  newArray.push(userNumber);
}

// Using Compare Function
// Ascending
newArray.sort(function (a, b) {
  return a - b;
});

document.writeln(`<h3>Ascending Sort ${newArray}</h3>`);

// Descending
newArray.sort(function (a, b) {
  return b - a;
});

document.writeln(`<h3>Descending Sort ${newArray}</h3>`);
