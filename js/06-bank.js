/*
TODO: Клас BankAccount
TODO:
TODO: Створи клас BankAccount з:
TODO: - приватним полем #balance
TODO: - методами deposit(amount) і withdraw(amount)
TODO:   - deposit(amount) - додає amount до #balance, якщо amount > 0.
TODO:   - withdraw(amount) - віднімає amount від #balance, якщо amount < #balance і amount > 0.
TODO: - гетером balance, який повертає значення балансу.
*/

class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance && amount > 0) {
      this.#balance -= amount;
    }
  }
}

const account = new BankAccount(1000);

console.log('account:', account);

console.log(account.balance);

account.deposit(200);

console.log(account.balance);

account.withdraw(300);

console.log(account.balance);
