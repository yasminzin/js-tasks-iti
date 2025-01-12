function makeXMLHttpRequest(url, callbackFunc) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send("");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var response = JSON.parse(xhr.response);
        callbackFunc(response);
      }
    }
  };
}

function getAllUsersResponse(response) {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  for (var i = 0; i < response.length; i++) {
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${response[i].id}</td>
    <td>${response[i].name}</td>
    <td>${response[i].email}</td>
    <td onclick="getUserDetails(${response[i].id})" id="details">View Details</td>`;
    tbody.appendChild(tr);
  }
}

function getUserDetailsResponse(response) {
  var userDetails = document.getElementById("user-details");
  userDetails.style.display = "block";
  userDetails.innerHTML = `<p>User Name : ${response.name}</p>
        <p>User Email : ${response.email}</p>
        <p>User Website : ${response.website}</p>
        <p>User Address : ${response.address.city}, ${response.address.street}, ${response.address.suite}</p>`;
}

function getAllUsers() {
  makeXMLHttpRequest(
    "https://jsonplaceholder.typicode.com/users",
    getAllUsersResponse
  );
}

function getUserDetails(i) {
  makeXMLHttpRequest(
    `https://jsonplaceholder.typicode.com/users/${i}`,
    getUserDetailsResponse
  );
}
