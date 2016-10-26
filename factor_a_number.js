function factors(num) {
  var arr = [];
  var half = Math.floor(num);
  for(var i = 1; i <= half; i++) {
    var num1 = num / i;
    var num2 = num / num1
    if ((Math.floor(num1) * Math.floor(num2)) === num) {
      arr.push(i);
      half = Math.floor(num1);
      arr.push(half);
      half--;
    }
  }
  return arr;
}

console.log(factors(24));

// function factors(num) {
//   var arr = [];
//   var half = Math.floor(num);
//   arr.push(1);
//   for(var i = 2; i <= half; i++) {
//     var num1 = num / i;
//     var num2 = num / num1
//     if ((Math.floor(num1) * Math.floor(num2)) === num) {
//       arr.push(i);
//       half = Math.floor(num1);
//       arr.push(half);
//       half--;
//     }
//   }
//   return arr;
// }
//
// console.log(factors(12));

// function factors(num) {
//   var arr = [];
//   var half = Math.floor(num);
//   arr.push(1);
//   for(var i = 2; i <= half; i++) {
//     var num1 = num / i;
//     var num2 = num / num1
//     if ((Math.floor(num1) * Math.floor(num2)) === num) {
//       arr.push(i);
//       half = Math.floor(num2);
//     }
//   }
//   return arr;
// }
//
// console.log(factors(27));
//
// 15 / 3 = 5
// 15 / 5 = 3


// function factors(num) {
//   var arr = [];
//   arr.push(num);
//   arr.push(num / num);
//   var half = Math.floor(num);
//   for(var i = 2; i <= half; i++) {
//     if ((num / i) % 2 === 0) {
//       arr.push(i);
//       arr.push(num / i);
//     }
//   }
//   return arr;
// }
//
// console.log(factors(15));

// function factors(num) {
//   var arr = [];
//   arr.push(num);
//   arr.push(num / num);
//   if ((num / 2) % 2 === 0) {
//     var half = num / 2;
//     arr.push(half);
//     arr.push(num / half)
//   } else {
//     var half = Math.floor(num);
//   }
//   return arr;
// }
//
// console.log(factors(12));
