var contentClass = document.querySelectorAll(".content");
var divTag = document.getElementsByTagName("div");
var chooseName = document.getElementsByName("choose");

function showData() {
  output.innerHTML = `<p>Number of div: ${divTag.length} <br>
  Class Content: ${contentClass.length} <br>
  Choose Name: ${chooseName.length}</p>`;
}

