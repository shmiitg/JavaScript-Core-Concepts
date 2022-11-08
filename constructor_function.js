//constructor function
function BankAccount(customerName, balance = 0) {
    // in oops terms these variable are called properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    // in oops terms these functions are called methods
    this.deposit = function (amount) {
        this.balance += amount;
    };
    this.withdraw = (amount) => {
        this.balance -= amount;
    };
}

const shmAccount = new BankAccount("Shm", 1000);

console.log(shmAccount);

// shmAccount.balance = 2000;
// console.log(shmAccount);

shmAccount.deposit(1000);
console.log(shmAccount);

shmAccount.withdraw(1500);
console.log(shmAccount.balance);
