var circles = document.getElementsByClassName("circle");
var sign = document.getElementById("sign");

var i = 0;

var colors = [
  { color: "red", message: "Stop" },
  { color: "orange", message: "Steady" },
  { color: "green", message: "Go" },
];

function start() {
  i = 0;
  changeColorInterval = setInterval(() => {
    if (i >= circles.length) {
      clearInterval(changeColorInterval);
      return;
    }
    changeColor(i);
    i++;
  }, 3000);
}

function resetColors() {
  for (var j = 0; j < circles.length; j++) {
    circles[j].style.backgroundColor = "gray";
  }
}

function changeColor(i) {
  resetColors();
  console.log(`circle index : ${i}`);
  circles[i].style.backgroundColor = colors[i].color;
  sign.innerText = colors[i].message;
  sign.style.color = colors[i].color;
}