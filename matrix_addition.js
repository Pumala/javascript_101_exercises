function matrixAdd(matrix_1, matrix_2) {
  matrix_3 = [[],[]];
  for(var i = 0; i < matrix_1.length; i++) {
    for(var j = 0; i < matrix_1.length; i++) {
      matrix_3[i][j] = matrix_1[i][j] + matrix_2[i][j];
      matrix_3[i][j + 1] = matrix_1[i][j + 1] + matrix_2[i][j + 1];
    }
  }
  return matrix_3;
}

console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

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
