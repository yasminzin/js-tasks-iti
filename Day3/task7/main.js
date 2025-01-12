function applyOperation(num1, num2, operationFunc) {
  return operationFunc(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(applyOperation(4, 5, add));
console.log(applyOperation(4, 5, multiply));

function applyOperationTwo(num1, num2, operationFunc) {
  return operationFunc(num1, num2);
}

console.log(
  applyOperationTwo(10, 2, function substract(num1, num2) {
    return num1 - num2;
  })
);
console.log(
  applyOperationTwo(10, 2, function divide(num1, num2) {
    return num1 / num2;
  })
);
