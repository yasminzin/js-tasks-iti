var output = document.querySelector("#output");

function showData() {
  var tagName = document.querySelector(".tag-name").value;
  var className = document.querySelector(".class-name").value;
  var idName = document.querySelector(".id-name").value;
  var Name = document.querySelector(".name").value;

  var tagNameSelector = document.getElementsByTagName(`${tagName}`);
  var classNameSelector = document.getElementsByClassName(`${className}`);
  var idNameSelector = document.getElementById(`${idName}`);
  var NameSelector = document.getElementsByName(`${Name}`);

  var idExistt;
  if (idNameSelector) {
    idExist = true;
  } else {
    idExist = false;
  }

  output.innerHTML = `<p>Number of element ${tagName}: ${tagNameSelector.length} <br>
  Number of class ${className}: ${classNameSelector.length} <br>   
  Id ${idName}: ${idExist} <br>
  Name ${Name}: ${NameSelector.length}</p>`;
}
