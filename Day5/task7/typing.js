var typing = document.getElementById("typing");
function showTyping(e) {
  console.log(typing);
    e.preventDefault();

  if (e.key == "Backspace") {
    typing.textContent = typing.textContent.slice(0, -1);
  } else if (e.key == "Enter") {
    typing.textContent = typing.textContent + "\n";
  } else if (e.key === " ") {
    typing.textContent = typing.textContent + " ";
  } else {
    typing.textContent = typing.textContent + e.key;
  }
}

document.addEventListener("keydown", showTyping);
