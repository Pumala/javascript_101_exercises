// write a function that takes in an array of numbers and returns the sum of the
// numbers in the array

function sumNumbers(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumNumbers([1, 4, 8]));
