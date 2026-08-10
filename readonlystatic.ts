class BankBranch {

    // STATIC Properties
    public static readonly bankName: string = "ICICI Bank";
    public static totalAccountsCreated: number = 0;

    // READONLY Property
    public readonly accountNumber: string;
    public accountHolder: string;

    // Constructor
    constructor(name: string, accNo: string) {
        this.accountHolder = name;
        this.accountNumber = accNo;

        // Increase account count
        BankBranch.totalAccountsCreated++;
    }

    // STATIC Method
    public static getBankPolicy(): void {
        console.log(`Welcome to ${this.bankName}. Savings accounts earn attractive interest.`);
    }

    // Instance Method
    public showAccount(): void {
        console.log("----- Account Details -----");
        console.log(`Account Holder : ${this.accountHolder}`);
        console.log(`Account Number : ${this.accountNumber}`);
        console.log("---------------------------");
    }
}

// ----------- Execution ------------

// Accessing Static Members
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();

// Creating Account Objects
const customer1 = new BankBranch("Rahul Sharma", "ICICI100245");
const customer2 = new BankBranch("Priya Reddy", "ICICI100678");

// Display Account Details
customer1.showAccount();
customer2.showAccount();

// Testing Readonly Property
console.log(customer1.accountNumber);

// customer1.accountNumber = "ICICI999999"; // ERROR: Readonly property

// Total Accounts Created
console.log(`Total Accounts Created: ${BankBranch.totalAccountsCreated}`);