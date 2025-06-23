/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 */

const user = {
  firstName: 'Olekii',
};
const userCopy = user;

console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.firstName = 'Virginia';

console.log('user:', user);
console.log('userCopy:', userCopy);

console.log(user === userCopy);
