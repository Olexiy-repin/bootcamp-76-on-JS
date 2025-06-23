/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const filmHarryPotter = [
//   'Harry Potter',
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo. Eius similique repellendus cumque repellat?',
//   9,
//   ['Flora Hampton', 'Ora Alexander', 'Rosa Roberson'],
// ];

const filmHarryPotter = {
  title: 'Harry Potter',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo. Eius similique repellendus cumque repellat?',
  rating: 9,
  actors: ['Flora Hampton', 'Ora Alexander', 'Rosa Roberson'],
  translations: {
    ua: 'https://films.com/harry-potter/ua',
    en: 'https://films.com/harry-potter/en',
  },
};

console.log(filmHarryPotter);

const filmTitle = filmHarryPotter.title;

console.log('filmTitle:', filmTitle);

const key = 'rating';

const filmRating = filmHarryPotter[key];

console.log('filmRating:', filmRating);

filmHarryPotter.rating = 8;

filmHarryPotter.bannerUrl = 'https://image.com/harry-potter';

console.log(filmHarryPotter);

const translationUa = filmHarryPotter.translations.ua;

console.log('translationUa:', translationUa);
