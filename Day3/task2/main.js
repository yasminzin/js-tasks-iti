function circleArea() {
  var radius = prompt("Enter the radius");
  var circleArea = Math.pow(radius, 2) * Math.PI;
  alert(`Circle Area = ${circleArea}`);
}

function squareRoot() {
  var number = prompt("Enter the number");
  var sqrt = Math.sqrt(number);
  alert(`Square Root of Number = ${sqrt}`);
}

function cosOfAngle() {
  var angle = prompt("Enter the angle");
  var cos = Math.cos((angle * Math.PI / 180));
  alert(`Cos of Angle = ${cos}`);
}

circleArea();
squareRoot();
cosOfAngle();
