/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   console.log('Hello from class Promise!');

//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// console.log('promise:', promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .finally(() => {
//     console.log('Hello from finally!');
//   })
//   .then(result => {
//     console.log('promise:', promise);

//     console.log('result:', result);

//     return 'Hello from first callback';
//   })
//   .then(result => {
//     console.log('result:', result);
//   })
//   .catch(err => {
//     console.log('promise:', promise);

//     console.log('err:', err);
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

// TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });

//~ Event loop
// console.log('Start');

// const promise = new Promise((resolve, reject) => {
//   console.log('Hello from class Promise');

//   setTimeout(() => {
//     console.log('Hello from setTimeout');

//     resolve('Done!');
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

// console.log('End');
