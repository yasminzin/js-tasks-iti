var number = Number(prompt("Enter the  number"));
if (number % 3 == 0 && number % 5 == 0) {
  document.writeln("fizz buzz");
} else if (number % 3 == 0) {
  document.writeln("fizz");
} else if (number % 5 == 0) {
  document.writeln("buzz");
} else {
  document.writeln("the number is not divided by 3 or 5");
}
