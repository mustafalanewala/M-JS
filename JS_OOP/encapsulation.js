// Encapsulation
class BankAccount {
  #balance; // Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
    else console.log("Invalid deposit amount");
  }

  getBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}
const account = new BankAccount(1000);
account.deposit(500);
account.getBalance();
