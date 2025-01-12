function openWindow() {
  var newWindow = window.open("./typing.html");
}
function showTyping(e) {
  var typing = document.getElementById("typing");
  console.log(typing);
  e.preventDefault();

  if (e.ctrlKey || e.shiftKey || e.altKey) {
    return;
  } else if (e.key == "Backspace") {
    typing.innerText = typing.innerText.slice(0, -1);
  } else if (e.key == "Enter") {
    typing.innerText = typing.innerText + "\n";
  } else if ((e.key = " ")) {
    typing.innerText = typing.innerText + " ";
  } else {
    typing.innerText = e.tartyping.innerText + e.key;
  }
}
