function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

console.log(gcd(12, 18));
console.log(lcm(12, 18));