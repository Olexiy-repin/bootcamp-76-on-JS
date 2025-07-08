/*
TODO: Напиши функцію createContact(partialContact) так,
TODO: щоб вона повертала новий об'єкт контакту з доданими властивостями id і createdAt,
TODO: а також list зі значенням "default" якщо у partialContact немає такої властивості.
*/

const createContact = partialContact => {
  return {
    id: Date.now(),
    createdAt: new Date(),
    list: 'default',
    ...partialContact,
  };
};

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);

console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

console.log(
  createContact({
    name: 'Erik',
    email: 'ot@suci.mc',
  })
);
