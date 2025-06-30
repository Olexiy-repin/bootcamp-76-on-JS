/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах

// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',

//   showThis: function () {
//     console.log('this:', this);
//   },

//   showFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.showThis();
// user.showFullName();

//* Розглянемо як this поводиться у звичайних функціях.
//~ Function expression

// const foo = function () {
//   console.log('this:', this);
// };

// foo();

//~ Function declaration

// function foo() {
//   console.log('this:', this);
// }

// foo();

//* Присвоєння функції як методу об'єкта

// const showThis = function () {
//   console.log('this:', this);
// };

// showThis();

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// showFullName();

// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',

//   showUserThis: showThis,
//   showUserFullName: showFullName,
// };

// user.showUserThis();
// user.showUserFullName();

// const anotherUser = {
//   firstName: 'Henry',
//   lastName: 'Sparks',

//   showAnotherUserThis: showThis,
//   showAnotherUserFullName: showFullName,
// };

// anotherUser.showAnotherUserThis();
// anotherUser.showAnotherUserFullName();

//* Виклик методу об'єкта без контексту

// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',

//   showUserThis: function () {
//     console.log('this:', this);
//   },

//   showUserFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.showUserThis();
// user.showUserFullName();

// const showThis = user.showUserThis;

// showThis();

// const showFullName = user.showUserFullName;

// showFullName();

//* This в callback функціях

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   // let callback = ref ---> function () {console.log(this.name);}
//   callback();
// };

// someFunction(user.showName);

//* This у стрілочних функціях. Стрілочні функції не мають свого this, this в стрілках завжди посилається на батьківський this.

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: () => {
//     console.log('This --->', this);
//   },
// };

// user.showThis();

// const showThis = function () {
//   // let this = user;

//   const showUserThis = () => {
//     console.log('this:', this);
//   };

//   showUserThis();
// };

// const user = {
//   firstName: 'Oleksii',

//   showUserThis: showThis,
// };

// user.showUserThis();
