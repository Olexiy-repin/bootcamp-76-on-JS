/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// const fn1 = function (callback) {
//   console.log('Hello from fn1!');

//   callback(100);
// };

// const fn2 = function (num) {
//   console.log('Hello from fn2!');

//   console.log(num);
// };

// fn1(fn2);

/*
TODO: Функція calc(a, b, callback)
 */

// const calc = function (numA, numB, callback) {
//   if (typeof numA === 'number' && typeof numB === 'number') {
//     console.log(callback(numA, numB));
//   }
// };

// const multiply = function (a, b) {
//   return a * b;
// };

// const add = function (a, b) {
//   return a + b;
// };

// const divide = function (a, b) {
//   return a / b;
// };

// calc(10, 2, multiply);
// calc(20, 2, add);
// calc(100, 2, divide);

//~ Інлайнові колбек функції

// calc(10, 2, function (a, b) {
//   return a * b;
// });

// calc(20, 2, function (a, b) {
//   return a + b;
// });

// calc(100, 2, function (a, b) {
//   return a / b;
// });

/*
TODO: Напишіть функцію each(array, callback), яка першим параметром очікує масив,
TODO: а другим - функцію, яка застосовується до кожного елемента масиву. Функція
TODO: each повинна повернути новий масив, елементами якого будуть
TODO: результати виклику коллбека.
 */

// const each = function (array, callback) {
//   /*
//     let array = [64, 49, 36, 25, 16];
//     let callback = function (value) {return value * 2;}
//   */
//   const newArr = [];

//   for (const item of array) {
//     newArr.push(callback(item));
//   }

//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
