var sum = 0;
do {
  var result = Number(prompt("Enter the number"));
  if (isNaN(result)) {
    alert("Unvalid number. Try again.");
  } else {
    sum += result;
  }
  // console.log(result);
  // console.log(sum);
} while (result != 0 && sum <= 100);
document.writeln("The sum is : " + sum);