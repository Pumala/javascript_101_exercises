// write 2 functions (using a while loop and a for loop) that takes in 2 arguments
// (a starting value and an ending value). Then depending on those two values, it
// will print out a list of numbers from the starting value to the ending value in ascending order

// using a while loop
function printNumbers(startNum, endNum) {
  var counter = startNum;
  while (counter !== (endNum + 1)) {
    console.log(counter);
    counter ++;
  }
}

// printNumbers(1, 10);

// using a for loop
function printNums(startNum, endNum) {
  for(var i = startNum; i <= endNum; i++) {
    console.log(i);
  }
}

printNums(1, 10);
