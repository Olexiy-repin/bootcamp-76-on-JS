/*
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

/*
 * Read (GET)
 */

// const getBooks = () => {
//   return fetch('https://6879f000abb83744b7ea9778.mockapi.io/books').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// getBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//~

// const getBookById = bookId => {
//   return fetch(`https://6879f000abb83744b7ea9778.mockapi.io/books/${bookId}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// getBookById(1)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// getBookById(8)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Create (POST)
 */

// const addBook = bookInfo => {
//   const fetchOptions = {
//     method: 'POST',
//     body: JSON.stringify(bookInfo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch('https://6879f000abb83744b7ea9778.mockapi.io/books', fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// addBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Update (PUT/PATCH)
 */

// const updateBookById = (bookInfoForUpdate, bookId) => {
//   const fetchOptions = {
//     method: 'PUT',
//     body: JSON.stringify(bookInfoForUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(`https://6879f000abb83744b7ea9778.mockapi.io/books/${bookId}`, fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 9)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ rating: 1 }, 8)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ rating: 4, author: 'Манго', test: 10 }, 7)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Delete (DELETE)
 */

// const deleteBookById = bookId => {
//   const fetchOptions = {
//     method: 'DELETE',
//   };

//   return fetch(`https://6879f000abb83744b7ea9778.mockapi.io/books/${bookId}`, fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// deleteBookById(12)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
