var input = document.getElementsByTagName("input")[0];

function getAscii(e) {
  var asciiCode = e.key.charCodeAt(0);

  var keyType;
  if (e.ctrlKey) {
    keyType = "Ctrl key";
  } else if (e.shiftKey) {
    keyType = "Shift key";
  } else {
    keyType = "Another key";
  }

  if (asciiCode >= 32) {
    alert(`Key : ${e.key}, ASCII Code : ${asciiCode}`);
  } else {
    alert(`Key : ${keyType}, ASCII Code : ${asciiCode}`);
  }
}

function reset(e) {
  e.preventDefault();
  input.value = "";
}
