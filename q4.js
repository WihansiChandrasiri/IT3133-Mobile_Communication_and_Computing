//q4
//scale a matrix
function scaleMatrix(matrix, scalar) {
  return matrix.map(row => row.map(value => value * scalar));
}


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let scaled = scaleMatrix(matrix, 3);

console.log(scaled);
