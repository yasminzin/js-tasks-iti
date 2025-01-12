var numbersArray = [];
function numbersArrayFunc() {
  for (var i = 0; i < 12; i++) {
    var number = Number(prompt("Enter the number"));
    numbersArray.push(number);
  }
}

function sortArrayFunc() {
  // Ascending
  numbersArray.sort(function (a, b) {
    return a - b;
  });
}

function findGreatestAndLowestFunc() {
  while (numbersArray[0] === numbersArray[1]) {
    numbersArray.shift();
  }
  while (
    numbersArray[numbersArray.length - 1] ===
    numbersArray[numbersArray.length - 2]
  ) {
    numbersArray.pop();
  }
  console.log(numbersArray[1]);
  console.log(numbersArray[numbersArray.length - 2]);
}

numbersArrayFunc();
sortArrayFunc();
findGreatestAndLowestFunc();
