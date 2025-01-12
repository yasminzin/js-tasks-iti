var newArray = [];
for (var i = 0; i < 3; i++) {
  var field = Number(prompt("Enter field one"));
  newArray.push(field)
}

function sumMultiplyDivide() {
  var sumResult = newArray[0] + newArray[1] + newArray[2];
  var multiplyResult = newArray[0] * newArray[1] * newArray[2];
  var divideResult = newArray[0] / newArray[1] / newArray[2];

  document.writeln("<h3>Sum of the three values : " + sumResult + "</h3>");
  document.writeln(
    "<h3>Multiplicaation of the three values : " + multiplyResult + "</h3>"
  );
  document.writeln(
    "<h3>Divide of the three values : " + divideResult + "</h3>"
  );
}

sumMultiplyDivide();
