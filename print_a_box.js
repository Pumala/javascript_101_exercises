function printBox(width, height) {
  row = "*".repeat(width);
  console.log(row);
  counter = 0;
  space = width - 2;
  space = " ".repeat(space);
  while (counter < (height - 2)) {
    console.log("*" + space + "*");
    counter ++;
  }
  console.log(row);
}

printBox(6, 4)
