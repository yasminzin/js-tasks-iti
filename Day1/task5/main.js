do {
  var color = prompt("Enter the color");
} while (!/^(blue|red|green)$/.test(color));

do {
  var yourName = prompt("Enter your name");
  document.writeln(
    "<h3 " +
      "style='color:" +
      color +
      "'" +
      ">Your Name is : " +
      "<span style= 'color:black'>" +
      yourName +
      "</span>" +
      "</h3>"
  );
} while (!/^[a-zA-Z]+$/.test(yourName));

do {
  var yourPhone = prompt("Enter your phone");
  document.writeln(
    "<h3 " +
      "style='color:" +
      color +
      "'" +
      ">Your Phone is : " +
      "<span style= 'color:black'>" +
      yourPhone +
      "</span>" +
      "</h3>"
  );
} while (!/^\d{8}$/.test(yourPhone));

do {
  var yourMobileNumber = prompt("Enter your mobile number");
  document.writeln(
    "<h3 " +
      "style='color:" +
      color +
      "'" +
      ">Your Mobile Number is : " +
      "<span style= 'color:black'>" +
      yourMobileNumber +
      "</span>" +
      "</h3>"
  );
} while (!/^(010|011|012)\d{8}$/.test(yourMobileNumber));

do {
  var yourEmail = prompt("Enter your email");
  document.writeln(
    "<h3 " +
      "style='color:" +
      color +
      "'" +
      ">Your Email is : " +
      "<span style= 'color:black'>" +
      yourEmail +
      "</span>" +
      "</h3>"
  );
} while (!/^[a-zA-z]+@\d+\.com$/.test(yourEmail));
