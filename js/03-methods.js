/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop, shift()/unshift()
 */

//~ Використання метода join()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const coursesStr = courses.join(', ');

// console.log('courses:', courses);
// console.log('coursesStr:', coursesStr);

//~ Використання метода split()
// const phoneNumbers = '+380961111111,+380961111111,+380961111111,+380961111111';
// const phoneNumbersArr = phoneNumbers.split(',');

// console.log('phoneNumbers:', phoneNumbers);
// console.log('phoneNumbersArr:', phoneNumbersArr);

//~ Використання метода slice()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const coursesCopy = courses.slice(2, 4);

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

// coursesCopy[0] = 'PHP';

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

//~ Використання метода concat()
// const oldCourses = ['HTML', 'CSS'];
// const newCourses = ['JavaScript', 'React', 'NodeJS'];
// const allCourses = oldCourses.concat(newCourses, ['PHP']);

// console.log('oldCourses:', oldCourses);
// console.log('newCourses:', newCourses);
// console.log('allCourses:', allCourses);

//~ Використання метода indexOf()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const idxOfJS = courses.indexOf('JavaScript');

// console.log('courses:', courses);
// console.log('idxOfJS:', idxOfJS);

//~ Використання методів push()/pop() та unshift()/shift()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

// courses.shift();
// courses.shift();

// console.log('courses:', courses);
