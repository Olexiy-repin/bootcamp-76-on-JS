/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// TODO: Порахуйте загальну кількість відгуків.

//~ Через цикл for...in
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// let totalFeedback = 0;

// for (const feedbackKey in feedbacks) {
//   totalFeedback += feedbacks[feedbackKey];
// }

// console.log('totalFeedback:', totalFeedback);

//~ Через метод Object.keys()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// let totalFeedback = 0;

// const feedbacksKeys = Object.keys(feedbacks);

// console.log('feedbacksKeys:', feedbacksKeys);

// for (const feedbackKey of feedbacksKeys) {
//   totalFeedback += feedbacks[feedbackKey];
// }

// console.log('totalFeedback:', totalFeedback);

//~ Через метод Object.values()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// let totalFeedback = 0;

// const feedbacksValues = Object.values(feedbacks);

// console.log('feedbacksValues:', feedbacksValues);

// for (const feedbackValue of feedbacksValues) {
//   totalFeedback += feedbackValue;
// }

// console.log('totalFeedback:', totalFeedback);
