import axios from 'axios';

axios
  .get('https://6879f000abb83744b7ea9778.mockapi.io/books')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
