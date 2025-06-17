/*
TODO: За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//   console.log(i);
//   }
// }

/*
TODO: Напиши цикл for, який виводить у консоль браузера
TODO: числа за зростанням від min до max, але тільки якщо число кратне 5.
*/

// let min = 1;
// const max = 201;

// for (let i = min; i <= max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/*
TODO: Напиши скрипт, який підраховує суму всіх парних чисел,
TODO: які входять в діапазон чисел у змінних від min до max.
TODO: Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
*/

// const min = 0;
// const max = 5;

// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

/*
TODO: Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
TODO: Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
TODO: а для чисел, що діляться на 5 – 'Buzz'.
TODO: Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

/*
TODO: Пошук першого кратного 7
TODO:
TODO: Знайди перше число від 100 до 200, яке ділиться на 7 без остачі.
TODO: Зупини цикл після знаходження.
*/

// let firstEvenNumber = 0;

// for (let i = 100; i <= 200; i++) {
//   if (i % 7 === 0) {
//     firstEvenNumber = i;

//     break;
//   }
// }

// console.log(firstEvenNumber);

/*
TODO: Паліндром
TODO:
TODO: Напиши функцію isPalindrome(str), яка повертає true, якщо str — паліндром.
TODO: Наприклад: "level", "madam".
*/

// function isPalindrome(str) {
//   let reversedStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return str.toLowerCase() === reversedStr.toLowerCase();
// }

// console.log(isPalindrome('level'));
// console.log(isPalindrome('cat'));
// console.log(isPalindrome('madam'));

// const firstName = 'Oleksii';

// console.log(firstName);

// for (let i = firstName.length - 1; i >= 0; i--) {
//   console.log(firstName[i]);
// }

/*
TODO: Створіть функцію countVowelsInStr(str), яка буде повертати кількість голосних в рядку.
TODO: Голосні в англійській мові: A, E, I, O, U.
*/

// console.log(countVowelsInStr('Hello world')); // 3
// console.log(countVowelsInStr('Lorem ipsum dolor sit amet.')); // 9
