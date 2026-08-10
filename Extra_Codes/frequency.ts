let str = "programming";
let freq: any = {};

for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
}

console.log(freq);