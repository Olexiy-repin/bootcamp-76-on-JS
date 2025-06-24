/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - getName();
TODO: - changeName(title);
TODO: - updateRating(newRating);
*/

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName: function (newName) {
    if (typeof newName === 'string' && newName.length !== 0) {
      this.name = newName;
    }
  },

  getName() {
    return this.name;
  },

  updateRating(newRating) {
    if (typeof newRating === 'number' && newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },
};

console.log(playlist);

playlist.changeName('New amazing playlist!');
playlist.updateRating(3);

console.log(playlist);
