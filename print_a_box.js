// write a function that takes in two parameters (width, height), then
// uses those values to create and return a box

function printBox(width, height) {
  var row = "*".repeat(width);
  console.log(row);
  var counter = 0;
  var space = width - 2;
  space = " ".repeat(space);
  while (counter < (height - 2)) {
    console.log("*" + space + "*");
    counter ++;
  }
  console.log(row);
}

printBox(6, 4)
