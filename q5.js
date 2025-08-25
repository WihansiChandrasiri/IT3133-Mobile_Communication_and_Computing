//q5
//Multiply 2 matrix
function multiplyMatrices(A, B) {
  // Check if multiplication is possible (cols of A == rows of B)
  if (A[0].length !== B.length) {
    throw new Error("Number of columns in A must equal number of rows in B");
  }

  let result = Array.from({ length: A.length }, () =>
    Array(B[0].length).fill(0)
  );

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
      for (let k = 0; k < B.length; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}

let A = [
  [1, 2, 3],
  [4, 5, 6]
];

let B = [
  [7, 8],
  [9, 10],
  [11, 12]
];

console.log(multiplyMatrices(A, B));
