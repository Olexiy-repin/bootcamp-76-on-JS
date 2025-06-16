/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//~ 6 хибних значень: false, NaN, null, undefined, 0, ''.

// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));

// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));

/*
 ~ Оператор &&
 */

/*
'' = false
'Hello world!' = true
*/

// console.log('' && 0);

// const num = 60;

// if (num >= 10) {
//   if (num <= 50) {
//     console.log('Done!');
//   }
// }

// if (num >= 10 && num <= 50) {
//   console.log('Done!');
// }

/*
 ~ Оператор ||
 */

/*
 10 = true
 '' = false
 */

// console.log(10 || 'Hello');

// const username = prompt('Введіть своє імʼя') || 'Anonumys';

// console.log(username);

/*
 ~ Оператор !
 */

// console.log(!true);
// console.log(!false);
// console.log(!'Done!');
// console.log(!0);

/*
 TODOD: Що буде виведено до консолі?
 */

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
