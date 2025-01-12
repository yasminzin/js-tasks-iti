function addNumbers(...arguments) {
  var sum = 0;
  if (arguments.length == 0) {
    throw "enter arguments";
  }
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") {
      console.log(arguments.length);
      throw "arguments must be numbers";
    }
    sum += arguments[i];
  }
  return sum;
}

console.log(addNumbers(4, 6, 4, 7, 2, 8));
