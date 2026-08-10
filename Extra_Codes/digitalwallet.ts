class DigitalWallet {
    // PUBLIC: Anyone can access
    public holderName: string;

    // PRIVATE: Accessible only inside this class
    private balance: number;
    private secretPin: number;

    // PROTECTED: Accessible in this class and child classes
    protected loyaltyPoints: number = 0;

    // Constructor
    constructor(name: string, initialDeposit: number, pin: number) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }

    // Deposit Money
    public depositMoney(amount: number): void {
        this.balance += amount;
        console.log(`₹${amount} deposited successfully.`);
        console.log(`Current Balance: ₹${this.balance}`);
    }

    // Withdraw Money
    public withdrawMoney(amount: number, enteredPin: number): void {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn successfully. Remaining Balance: ₹${this.balance}`);
            } else {
                console.log("Insufficient balance in your wallet!");
            }
        } else {
            console.log("Incorrect PIN. Transaction declined!");
        }
    }

    // Check Balance
    public checkBalance(enteredPin: number): void {
        if (this.verifyPin(enteredPin)) {
            console.log(`Available Balance: ₹${this.balance}`);
        } else {
            console.log("Incorrect PIN!");
        }
    }

    // Private Method
    private verifyPin(pin: number): boolean {
        return this.secretPin === pin;
    }
}

// Child Class
class PremiumWallet extends DigitalWallet {
    public addBonus(): void {
        this.loyaltyPoints += 150;
        console.log(`Bonus Added! Total Loyalty Points: ${this.loyaltyPoints}`);
    }
}

// -------------------- Execution --------------------

const myWallet = new DigitalWallet("Rahul Verma", 10000, 5678);

// Accessing public property
console.log(`Welcome, ${myWallet.holderName}`);

// Deposit money
myWallet.depositMoney(3000);

// Withdraw money
myWallet.withdrawMoney(2500, 5678);

// Check balance
myWallet.checkBalance(5678);

// Premium Wallet
const premiumUser = new PremiumWallet("Kavya Reddy", 20000, 9876);
premiumUser.addBonus();