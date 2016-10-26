function printBanner(slogan) {
  var length = slogan.length;
  row = "*".repeat(length + 4);
  console.log(row);
  console.log("* " + slogan + " *");
  console.log(row);
}

printBanner("There is nothing better than the color yellow");
