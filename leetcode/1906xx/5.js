// 反转图形
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  for (i = 0; i < A.length; i++) {
    A[i] = A[i].reverse();
    for (j = 0; j < A.length; j++) {
      A[i][j] = A[i][j] ^ 1;
    }
  }
  return A;
};
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
