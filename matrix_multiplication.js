function matrixMultiply(matrix_1, matrix_2) {
  var matrix_3 = [[],[]];
  console.log(matrix_1.length);
  for(var i = 0; i < matrix_1.length; i++) {
    for(var j = 0; j < matrix_1.length; j++) {
      matrix_3[i][j] = (matrix_1[i][0] * matrix_2[0][j]) + (matrix_1[i][1] * matrix_2[1][j]);
    }
  }
  return matrix_3;
}

console.log(matrixMultiply([[2, -2], [5, 3]], [[-1, 4], [7, -6]]));
console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));


// matrix_3[i][j] = (matrix_1[i][0] * matrix_2[0][j]) + (matrix_1[i][1] * matrix_2[1][j]);

// matrix_3[1][0] = (matrix_1[1][0] * matrix_2[0][0]) = 5 * -1 = -5
//                + (matrix_1[1][1] * matrix_2[1][0]) = 3 * 7 = 21
//                = -5 + 21 = -16
//
// matrix_3[1][1] = (matrix_1[1][0] * matrix_2[0][1]) = 5 * 4 = 20
//               + (matrix_1[1][1] * matrix_2[1][1]) = 3 * -6 = -18
//               = 20 + -18 = 2

// matrix_3[0][0] = (matrix_1[0][0] * matrix_2[0][0]) = 2 * -1 = -2
//                + (matrix_1[0][1] * matrix_2[1][0]) = -2 * 7 = -14
//                = -2 + -14 = -16
//
// matrix_3[0][1] = (matrix_1[0][0] * matrix_2[0][1]) = 2 * 4 = 8
//               + (matrix_1[0][1] * matrix_2[1][1]) = -2 * -6 = 12
//               = 8 + 12 = 20
//
// matrix_3[1][0] = (matrix_1[1][0] * matrix_2[0][0]) = 5 * -1 = -5
//                + (matrix_1[1][1] * matrix_2[1][0]) = 3 * 7 = 21
//                = -5 + 21 = -16
//
// matrix_3[1][1] = (matrix_1[1][0] * matrix_2[0][1]) = 5 * 4 = 20
//               + (matrix_1[1][1] * matrix_2[1][1]) = 3 * -6 = -18
//               = 20 + -18 = 2




// matrix_3[0][] = (matrix_1[0][0] * matrix_2[0][0]) = 2 * -1





// matrix_1[0][1] + matrix_2[0][1] = (3 + 2) = 5
// matrix_1[1][0] + matrix_2[1][0] = (2 + 1) = 3
// matrix_1[1][1] + matrix_2[1][1] = (4, 0) = 4


// matrix_1[0][0] + matrix_2[0][0] = (1 + 5) = 6
// matrix_1[0][1] + matrix_2[0][1] = (3 + 2) = 5
// matrix_1[1][0] + matrix_2[1][0] = (2 + 1) = 3
// matrix_1[1][1] + matrix_2[1][1] = (4, 0) = 4
// // add to matrix 3
// matrix_3 = [[], []]
//
// [0, 0], [0, 1],
// [1, 0], [1, 1]
  // matrix_1[i][1] + matrix_2[0][1]
