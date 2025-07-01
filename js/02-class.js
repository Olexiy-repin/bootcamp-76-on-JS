/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//* Функція конструктор

// const User = function (firstName, lastName, age, login, password) {
//   // let this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.login = login;
//   this.password = password;
//   // return this;
// };

// User.prototype.showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user1 = new User('Tom', 'Holt', 30, 'tomHolt@gmail.com', 'tom123');

// console.log('user1:', user1);

// const user2 = new User('Lottie', 'Green', 24, 'lottie@gmail.com', 'lottie123');

// console.log('user2:', user2);

//* Клас

class User {
  #login;
  #password;

  static minPasswordLength = 8;

  constructor(firstName, lastName, age, login, password) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#login = login;
    this.#password = password;
    // return this;
  }

  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  getLogin() {
    return this.#login;
  }

  setLogin(newLogin) {
    if (typeof newLogin === 'string') {
      this.#login = newLogin;
    }
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    if (typeof newPassword === 'string' && newPassword.length >= User.minPasswordLength) {
      this.#password = newPassword;
    } else {
      throw new Error('Password is not valid!');
    }
  }
}

const user1 = new User('Tom', 'Holt', 30, 'tomHolt@gmail.com', 'tom123456');

console.log('user1:', user1);

console.log(user1.password);
user1.password = '100';
console.log(user1.password);

// console.log(user1.getLogin());
// user1.setLogin('holtTom@gmail.com');
// console.log(user1.getLogin());

// const user2 = new User('Lottie', 'Green', 24, 'lottie@gmail.com', 'lottie123');

// console.log('user2:', user2);
// console.log(user2.getLogin());
