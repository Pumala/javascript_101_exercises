function sumNumbers(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumNumbers([1, 4, 8]));
