/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ['HTML', 'CSS', 'JS', 'React', 'NodeJs'];

console.log('courses:', courses);

// courses[0] = 'React';

// console.log('courses:', courses);

console.log(courses.length);

const firstElement = courses[0];

console.log('firstElement:', firstElement);

const lastElement = courses[courses.length - 1];

console.log('lastElement:', lastElement);
