function passTwoParameters(one, two) {
  if (arguments.length > 2 || arguments.length < 2) {
    throw "must pass two arguments";
  }
  console.log(arguments.length);
  console.log(one);
  console.log(two);
}

passTwoParameters("one", "two");
