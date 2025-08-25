//q3
//Break a whole number into digits 4562 -> 4,5,6,2

let num = 4562;
let digits = num.toString().split("").map(Number);

console.log(digits); 
