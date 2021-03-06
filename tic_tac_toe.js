// write a function that takes in a 2 three by three dimensional array of values
// either ('X', 'O', or null). Then the function checks if there is any 3 in a row
// combination of either the 'X' or the 'O'. If so, it returns the value of the
// winning combination. Else, if there's no 3 in a row of either 'X' or 'O', it returns null
function checkRowCol(board) {
  for(var i = 0; i <= 2; i++) {
    if ((board[i][0] === board[i][1]) &&
      (board[i][1] === board[i][2]) &&
      (board[i][2] !== "")) {
        return board[i][0];
    } else if ((board[0][i] === board[1][i]) &&
      (board[1][i] === board[2][i]) &&
      (board[2][i] !== "")) {
        return board[1][i];
    }
  }
  return null;
}
function tictactoe(board) {
  if ((board[0][0] === board[1][1]) &&
    (board[0][0] === board[2][2]) &&
    (board[0][0] !== "")) {
      return board[0][0];
  } else if ((board[0][2] === board[1][1]) &&
    (board[0][2] === board[2][0]) &&
    (board[0][2] !== "")) {
      return board[0][2];
  }
  var hasRowCol = checkRowCol(board);
  if (hasRowCol === null) {
    return null;
  } else {
    return hasRowCol;
  }
}


// function tictactoe(board) {
//   if ((board[0][0] === board[1][1]) &&
//     (board[0][0] === board[2][2]) &&
//     (board[0][0] !== "")) {
//       return board[0][0];
//   } else if ((board[0][2] === board[1][1]) &&
//     (board[0][2] === board[2][0]) &&
//     (board[0][2] !== "")) {
//       return board[0][2];
//   }
//   for(var i = 0; i <= 2; i++) {
//     if ((board[i][0] === board[i][1]) &&
//       (board[i][1] === board[i][2]) &&
//       (board[i][2] !== "")) {
//         return board[i][0];
//     } else if ((board[0][i] === board[1][i]) &&
//       (board[1][i] === board[2][i]) &&
//       (board[2][i] !== "")) {
//       return board[1][i];
//     }
//   }
//   return null;
// }


// function tictactoe(board) {
//   for(var i = 0; i <= 2; i++) {
//     if ((board[i][0] === board[i][1]) &&
//       (board[i][1] === board[i][2]) &&
//       (board[i][2] !== "")) {
//         return "3 in a Row: one: " + board[i][0];
//     } else if ((board[0][i] === board[1][i]) &&
//       (board[1][i] === board[2][i]) &&
//       (board[2][i] !== "")) {
//       return "3 in a Row: two: " + board[1][i];
//     }
//   }
//   if ((board[0][0] === board[1][1]) &&
//     (board[0][0] === board[2][2]) &&
//     (board[0][0] !== "")) {
//       return "3 in a Row: three: " + board[i][0];
//   } else if ((board[0][2] === board[1][1]) &&
//     (board[0][2] === board[2][0]) &&
//     (board[0][2] !== "")) {
//       return "3 in a Row: four: " + board[0][2];
//   }
//   return null;
// }

// function tictactoe(board) {
//   for(var i = 0; i <= 2; i++) {
//     if ((board[i][0] === board[i][1]) &&
//       (board[i][1] === board[i][2]) &&
//       (board[i][2] !== "")) {
//         return "3 in a Row: one: " + board[i][0];
//     } else if ((board[0][i] === board[1][i]) &&
//       (board[1][i] === board[2][i]) &&
//       (board[2][i] !== "")) {
//       return "3 in a Row: two: " + board[1][i];
//     } else if ((board[0][0] === board[1][1]) &&
//     (board[0][0] === board[2][2]) &&
//     (board[0][0] !== "")) {
//       return "3 in a Row: three: " + board[i][0];
//     } else if ((board[0][2] === board[1][1]) &&
//     (board[0][2] === board[2][0]) &&
//     (board[0][2] !== "")) {
//       return "3 in a Row: four: " + board[0][2];
//     }
//   }
//   return null;
// }


// function tictactoe(board) {
//   for(var i = 0; i < 2; i++) {
//     if ((board[i][0] === board[i][1]) &&
//       (board[i][1] === board[i][2]) &&
//       (board[i][2] !== null)) {
//         return "3 in a Row: " + board[i][0];
//     } else if ((board[0][i] === board[1][i]) &&
//       (board[1][i] === board[2][i]) &&
//       (board[2][i] !== null)) {
//       return "3 in a Row: " + board[1][i];
//     } else if ((board[i][0] === board[i + 1][1]) &&
//     (board[i][0] === board[i + 2][2]) &&
//     (board[i][0] !== null)) {
//       return "3 in a Row: " + board[i][0];
//     } else if ((board[i][2] === board[i + 1][1]) &&
//     (board[i][2] === board[i + 2][0]) &&
//     (board[i][2] !== null)) {
//       return "3 in a Row: " + board[i][2];
//     }
//   }
//   return null;
// }



console.log(tictactoe([
  ['O', 'O', 'O'],
  ['', '', ''],
  ['', '', '']
]));
console.log(tictactoe([
  ['', '', ''],
  ['O', 'O', 'O'],
  ['', '', '']
]));
console.log(tictactoe([
  ['', '', ''],
  ['', '', ''],
  ['O', 'O', 'O']
]));
console.log(tictactoe([
  ['X', 'X', 'X'],
  ['', '', ''],
  ['', '', '']
]));
console.log(tictactoe([
  ['', '', ''],
  ['X', 'X', 'X'],
  ['', '', '']
]));
console.log(tictactoe([
  ['', '', ''],
  ['', '', ''],
  ['X', 'X', 'X']
]));
console.log(tictactoe([
  ['O', '', ''],
  ['O', '', ''],
  ['O', '', ''],
]));
console.log(tictactoe([
  ['', 'O', ''],
  ['', 'O', ''],
  ['', 'O', ''],
]));
console.log(tictactoe([
  ['', '', 'O'],
  ['', '', 'O'],
  ['', '', 'O'],
]));
console.log(tictactoe([
  ['X', '', ''],
  ['X', '', ''],
  ['X', '', ''],
]));
console.log(tictactoe([
  ['', 'X', ''],
  ['', 'X', ''],
  ['', 'X', ''],
]));
console.log(tictactoe([
  ['', '', 'X'],
  ['', '', 'X'],
  ['', '', 'X'],
]));
console.log(tictactoe([
  ['O', '', ''],
  ['', 'O', ''],
  ['', '', 'O']
]));
console.log(tictactoe([
  ['', '', 'O'],
  ['', 'O', ''],
  ['O', '', '']
]));
console.log(tictactoe([
  ['X', '', ''],
  ['', 'X', ''],
  ['', '', 'X']
]));
console.log(tictactoe([
  ['', '', 'X'],
  ['', 'X', ''],
  ['X', '', '']
]));
console.log(tictactoe([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]));
console.log(tictactoe([
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'X', 'O'],
]));

// console.log(ticTacToe([
//   ['X', 'O', 'X'],
//   [null, 'X', 'X'],
//   ['O', 'X', 'X']
// ]));
// console.log(ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
// ]));
// console.log(ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
// ]));
// console.log(ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
// ]));
// console.log(ticTacToe([
//   ['O', 'X', 'O'],
//   [null, 'O', null],
//   ['O', 'X', 'X']
// ]));

// function ticTacToe(board) {
//   for(var i = 0; i < board.length; i++) {
//     for(var j = 0; j < board.length; j++) {
//       if ((board[i][0] === board[i][1]) &&
//         (board[i][1] === board[i][2]) &&
//         (board[i][2] !== null)) {
//           return "3 in a Row: " + board[i][0];
//       } else if ((board[0][i] === board[1][i]) &&
//         (board[1][i] === board[2][i]) &&
//         (board[2][i] !== null)) {
//         return "3 in a Row: " + board[1][i];
//       } else if ((board[i][0] === board[i + 1][1]) &&
//       (board[i][0] === board[i + 2][2]) &&
//       (board[i][0] !== null)) {
//         return "3 in a Row: " + board[i][0];
//       } else if ((board[i][2] === board[i + 1][1]) &&
//       (board[i][2] === board[i + 2][0]) &&
//       (board[i][2] !== null)) {
//         return "3 in a Row: " + board[i][2];
//       }
//     }
//   }
//   return null;
// }



// ((board[i][0] === board[i + 1][1]) &&
// (board[i][0] === board[i + 2][2]) &&
// (board[i][0] !== null))

// ((board[i][2] === board[i + 1][1]) &&
// (board[i][2] === board[i + 2][0]) &&
// (board[i][2] !== null))




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
