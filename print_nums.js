
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
