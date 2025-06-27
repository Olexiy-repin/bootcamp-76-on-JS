/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://symbl.cc/en/unicode-table/)
 */

// const numbers = [1, 10, 9, 20, 6, 2, 3];
// const sortedNumbers = numbers.toSorted();

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'W'];
// const sortedLetters = letters.toSorted();

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// const numbers = [1, 6, 2, 3, 9, 10, 22, 34];
// const sortedNumbers = numbers.toSorted((currentEl, nextEl) => {
//   return nextEl - currentEl;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X', 'Y', 'A'];
// const sortedLetters = letters.toSorted((currentEl, nextEl) => {
//   return nextEl.localeCompare(currentEl);
// });

// console.log('letters:', letters);
// console.log('sortedLetters:', sortedLetters);

// console.log('a'.localeCompare('b'));
// console.log('b'.localeCompare('a'));
// console.log('a'.localeCompare('a'));

// console.log('X'.localeCompare('b'));
// console.log('b'.localeCompare('A'));

/*
 * Сортування масиву об'єктів
 */

// const players = [
//   { id: 'player-1', name: 'Mangso', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Mango', timePlayed: 470, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

// TODO: За ігровим часом
// const sortedByBestPlayers = players.toSorted((currentPlayer, nextPlayer) => {
//   return nextPlayer.timePlayed - currentPlayer.timePlayed;
// });

// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players.toSorted((currentPlayer, nextPlayer) => {
//   return currentPlayer.timePlayed - nextPlayer.timePlayed;
// });

// console.table(sortedByWorstPlayers);

// TODO: За першою літерою імені
// const byName = players.toSorted((currentPlayer, nextPlayer) => {
//   return currentPlayer.name.localeCompare(nextPlayer.name);
// });

// console.table(byName);
