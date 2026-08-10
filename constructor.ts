class FixedDeposit {
    // Properties
    public customerName: string;
    public principalAmount: number;
    public interestRate: number;
    public tenureYears: number;

    // Constructor Overloading
    constructor(name: string, amount: number);
    constructor(name: string, amount: number, rate: number, years: number);

    constructor(name: string, amount: number, rate?: number, years?: number) {
        this.customerName = name;
        this.principalAmount = amount;

        // Default values
        this.interestRate = rate ?? 7.0;
        this.tenureYears = years ?? 2;
    }

    // Method to calculate maturity amount
    public calculateMaturity(): number {
        const interest = (this.principalAmount * this.interestRate * this.tenureYears) / 100;
        return this.principalAmount + interest;
    }

    // Method to display details
    public displayDetails(): void {
        console.log("----- FD Receipt -----");
        console.log(`Customer: ${this.customerName}`);
        console.log(`Principal: ₹${this.principalAmount}`);
        console.log(`Rate: ${this.interestRate}%`);
        console.log(`Tenure: ${this.tenureYears} year(s)`);
        console.log(`Maturity Amount: ₹${this.calculateMaturity()}`);
        console.log("----------------------\n");
    }
}

// Using Default Constructor
const standardFD = new FixedDeposit("Rohit Verma", 80000);

// Using Overloaded Constructor
const premiumFD = new FixedDeposit("Priya Reddy", 150000, 8.2, 4);

// Display Details
standardFD.displayDetails();
premiumFD.displayDetails();

// Updating Principal Amount
premiumFD.principalAmount = 160000;

console.log(`Updated Maturity for Priya: ₹${premiumFD.calculateMaturity()}`);