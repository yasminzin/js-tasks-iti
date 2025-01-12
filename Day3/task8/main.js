var numbersArray = [1, 2, 3, 4, 5];

function processArray(array, callback) {
  return callback(array);
}

function pow(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
  }
  return array;
}

console.log(processArray(numbersArray, pow));
