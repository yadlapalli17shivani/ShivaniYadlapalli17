let values = [1, 2, 2, 3, 1, 4];
let count: any = {};

for (let val of values) {
    count[val] = (count[val] || 0) + 1;
}

console.log(count);