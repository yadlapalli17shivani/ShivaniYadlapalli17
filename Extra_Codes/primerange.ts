export {}
function printPrimes(start: number, end: number): void {
    for (let i = start; i <= end; i++) {
        let prime = true;
        if (i < 2) prime = false;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) console.log(i);
    }
}

printPrimes(1, 20);