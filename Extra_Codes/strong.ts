function factorial(n: number): number {
    let fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;
    return fact;
}

function isStrong(num: number): boolean {
    let temp = num, sum = 0;

    while (temp > 0) {
        const rem = temp % 10;
        sum += factorial(rem);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isStrong(145));