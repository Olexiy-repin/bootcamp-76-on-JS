/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const userMethods = {
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },

//   changeAge(newAge) {
//     this.age = newAge;
//   },
// };

// const user1 = Object.create(userMethods);

// user1.firstName = 'Betty';
// user1.lastName = 'Lindsey';
// user1.age = 30;

// user1.showFullName();
// user1.changeAge(28);

// console.log('user1:', user1);

// const user2 = Object.create(userMethods);

// user2.firstName = 'Lettie';
// user2.lastName = 'Copeland';
// user2.age = 23;

// user2.showFullName();
// user2.changeAge(25);

// console.log('user2:', user2);

// console.log(user2.test);

/*
 * Перебір власних властивостей з hasOwnProperty()
 */

// const objC = {
//   propC: 'C',
// };

// const objB = Object.create(objC);

// objB.propB = 'B';

// const objA = Object.create(objB);

// objA.propA = 'A';

// console.log('objA:', objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(`${key}: ${objA[key]}`);
//   }
// }
