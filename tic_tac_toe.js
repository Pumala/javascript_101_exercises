function ticTacToe(board) {
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board.length; j++) {
      if ((board[i][0] === board[i][1]) &&
        (board[i][1] === board[i][2]) &&
        (board[i][2] !== null)) {
          return "3 in a Row: " + board[i][0];
      } else if ((board[0][i] === board[1][i]) &&
        (board[1][i] === board[2][i]) &&
        (board[2][i] !== null)) {
        return "3 in a Row: " + board[1][i];
      }
    }
  }
  return null;
}

console.log(ticTacToe([['X', 'O', 'X'], [null, 'X', 'X'], ['O', 'X', 'X']]));
console.log(ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
]));
console.log(ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
]));
console.log(ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X']
]));


// function ticTacToe(board) {
//   for(var i = 0; i < board.length; i++) {
//     for(var j = 0; j < board.length; j++) {
//       if (((board[i][0] === board[i][1]) &&
//         (board[i][1] === board[i][2]) &&
//         (board[i][2] !== null)) ||
//         ((board[0][i] === board[1][i]) &&
//         (board[1][i] === board[2][i]) &&
//         (board[2][i] !== null))) {
//         return "3 in a Row: " + board[i][0];
//       }
//     }
//   }
//   return null;
// }
//
// console.log(ticTacToe([['X', 'O', 'X'], [null, 'X', 'X'], ['O', 'X', 'X']]));

// for(var k = 0; k < board.length; k++) {
//
// }

// var spot1 = board[i][j][0];
// var spot2 = board[i][j][1];
// var spot3 = board[i][j][2];
// if (spot1 === spot2 && spot1 === spot3) {
//   return spot1;
// }