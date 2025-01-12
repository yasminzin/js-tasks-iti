var NamesArray = [];
function inputNamesFunc() {
  for (var i = 0; i < 5; i++) {
    var names = prompt("Enter the name");
    NamesArray.push(names);
  }
}

var randomNames = [];
function randomNamesFunc() {
  var randomNameOne = Math.floor(Math.random() * 5);
  var randomNameTwo;
  do {
    randomNameTwo = Math.floor(Math.random() * 5);
  } while (randomNameTwo == randomNameOne);
  randomNames.push(NamesArray[randomNameOne]);
  randomNames.push(NamesArray[randomNameTwo]);
  document.writeln(`<h3>${randomNames}</h3>`);
}

inputNamesFunc();
randomNamesFunc();
