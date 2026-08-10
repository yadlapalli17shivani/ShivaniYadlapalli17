let array = [1, 2, 3, 4, 5];
let k = 2;
let rotated = [...array.slice(k), ...array.slice(0, k)];
console.log(rotated);