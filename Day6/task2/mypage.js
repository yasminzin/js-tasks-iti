var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 3);

var data = document.getElementById("data");

function getAllCookies() {
  var docCookie = document.cookie.split(";");
  var cookiesObj = {};
  for (var i = 0; i < docCookie.length; i++) {
    var key = docCookie[i].trim().split("=")[0];
    var value = docCookie[i].trim().split("=")[1];
    cookiesObj[key] = value;
  }
  return cookiesObj;
}

var cookies = getAllCookies();

var count = cookies.count;

count++;
document.cookie = `count=${count};expires=${expireDate}`;

data.innerHTML = `<img src="${cookies.img}" alt="gender-photo"><p>Welcome <span style="color:${cookies.color}">${cookies.name}</span> you have visited this site <span style="color:${cookies.color}" id="count">${cookies.count}</span> times :)</p>`;
