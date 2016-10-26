function printSquare(size) {
  var star = "*";
  for(var i = 0; i < size; i++) {
    console.log(star.repeat(size));
  }
}

printSquare(5);
