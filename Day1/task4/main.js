var fly = prompt("Do you fly? (yes/no)");
if (fly === "yes") {
  var flyWild = prompt("Are you wild? (yes/no)");
  if (flyWild === "yes") {
    document.writeln(
      "<img src='./imgs/eagle.png' width = '200px' height = '200px'/>"
    );
    document.writeln("Eagle");
  } else {
    document.writeln(
      "<img src='./imgs/parrot.png' width = '200px' height = '200px'/>"
    );
    document.writeln("Parrot");
  }
} else {
  var underSea = prompt("Do you live undersea? (yes/no)");
  if (underSea === "yes") {
    var underSeaWild = prompt("Are you wild? (yes/no)");
    if (underSeaWild === "yes") {
      document.writeln(
        "<img src='./imgs/shark.png' width = '200px' height = '200px'/>"
      );
      document.writeln("Shark");
    } else {
      document.writeln(
        "<img src='./imgs/dolphin.png' width = '200px' height = '200px'/>"
      );
      document.writeln("Dolphin");
    }
  } else {
    var noUnderSeaWild = prompt("Are you wild (yes/no)");
    if (noUnderSeaWild === "yes") {
      document.writeln(
        "<img src='./imgs/lion.png' width = '200px' height = '200px'/>"
      );
      document.writeln("Lion");
    } else {
      document.writeln(
        "<img src='./imgs/cat.png' width = '200px' height = '200px'/>"
      );
      document.writeln("Cat");
    }
  }
}
