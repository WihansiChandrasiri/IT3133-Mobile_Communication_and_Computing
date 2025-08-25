//Question2
//find 3 large numbers among given array of numbers

let arr = [12, 5, 45, 32, 98, 56, 7];

let top3 = arr.sort((a, b) => b - a).slice(0, 3);

console.log(top3); 
