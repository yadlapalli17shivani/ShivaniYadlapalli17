class BankAccount {
    balance = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log(this.balance);
    }
}

let acc = new BankAccount();
acc.deposit(1000);
acc.withdraw(300);
acc.displayBalance();