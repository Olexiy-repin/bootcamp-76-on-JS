/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', event => {
//   console.log(`event.code: ${event.code}, event.key: ${event.key}`);
// });

/*
 * Обробка комбінацій клавіш
 */

// document.addEventListener('keydown', event => {
//   if (event.code === 'KeyF' && (event.ctrlKey || event.metaKey)) {
//     event.preventDefault();

//     console.log('Pressed ctrl/command + f');
//   }
// });
