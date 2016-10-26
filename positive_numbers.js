function positiveNumbers(arr) {
  new_arr = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
}

console.log(positiveNumbers([1, -3, 5, -3, 0]));
console.log(positiveNumbers([1, 2, 3]));
console.log(positiveNumbers([-1, -3, -5]));
