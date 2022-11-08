// prototype allows us to share methods across all instances of a function
// they use less memory

function BankAccount(customerName, balance = 0) {
    // in oops terms these variable are called properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    // in oops terms these functions are called methods
    // this.deposit = function (amount) {
    //     this.balance += amount;
    // };
    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}

// console.log(BankAccount.prototype);
// console.log(Array.prototype);

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

const shm = new BankAccount("Shm", 200);

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
};

shm.deposit(300);
console.log(shm.balance);

shm.withdraw(100);
console.log(shm.balance);
