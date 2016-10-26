// write a function that takes in one argument (size) that determines the size of
// the square that it prints

function printSquare(size) {
  var star = "*";
  for(var i = 0; i < size; i++) {
    console.log(star.repeat(size));
  }
}

printSquare(5);
