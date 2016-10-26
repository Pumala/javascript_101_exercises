// write a function that takes in a slogan and prints out that slogan in a
// banner that fits nicely around it

function printBanner(slogan) {
  var length = slogan.length;
  var row = "*".repeat(length + 4);
  console.log(row);
  console.log("* " + slogan + " *");
  console.log(row);
}

printBanner("There is nothing better than the color yellow");
