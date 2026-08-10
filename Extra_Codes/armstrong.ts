function isArmstrong(num: number): boolean {
    let sum = 0;
    const digits = num.toString().length;
    let temp = num;

    while (temp > 0) {
        const rem = temp % 10;
        sum += rem ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153));