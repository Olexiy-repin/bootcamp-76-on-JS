/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами

// const foo = function () {};

// foo.test = 100;

// console.dir(foo);

// console.log(foo.test);

// TODO: Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, number) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(number);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Welcome', 1000);
// showFullName.apply(user, ['Welcome', 1000]);

// TODO: Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser, 'Hello', 250);
// showFullName.apply(anotherUser, ['Hello', 250]);

// TODO: Викличте функцію changeColor в контексті різних обʼєктів

// const changeColor = function (color) {
//   console.log('this:', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'yellow');

// console.log('hat:', hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.apply(sweater, ['blue']);

// console.log('sweater:', sweater);

/*
TODO:
*/

// const sum = function () {
//   console.log('arguments:', arguments);

//   const total = [].reduce.call(arguments, (acc, el) => acc + el);

//   return total;
// };

// console.log(sum(10, 20, 30));
// console.log(sum(100, 22, 30, 44));

// TODO: Створіть копію функції changeColor з привʼязаним контекстом

const changeColor = function (color) {
  this.color = color;
};

// const hat = {
//   color: 'black',
// };

// console.log('hat:', hat);

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log('hat:', hat);

// const sweater = {
//   color: 'green',
// };

// console.log('sweater:', sweater);

// const changeSweaterColor = changeColor.bind(sweater);

// changeSweaterColor('blue');

// console.log('sweater:', sweater);

// TODO: Передайте метод обʼєкта в якості callback функції

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('this:', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   // let callback = ref ---> function () {console.log(this.name)}
//   callback();
// };

// someFunction(user.showName.bind(user));
