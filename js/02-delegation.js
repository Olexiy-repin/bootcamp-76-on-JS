/*
 * Додавання прослуховувача подій на кожен елемент
 */

// TODO: Отримай колір квадрата по якому було здійснено клік

// const refs = {
//   boxItems: document.querySelectorAll('.js-box'),
// };

// console.log(refs.boxItems);

// refs.boxItems.forEach(box => {
//   box.addEventListener('click', event => {
//     const boxColor = event.currentTarget.dataset.color;

//     console.log(boxColor);
//   });
// });

/*
 ~ Дегегування подій
 */

// TODO: Отримай колір квадрата по якому було здійснено клік

const refs = {
  boxesContainer: document.querySelector('.js-container'),
};

refs.boxesContainer.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const boxColor = event.target.dataset.color;

  console.log(boxColor);
});
