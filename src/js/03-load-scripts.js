// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */

//~ Рішення через колбеки
// const loadScript = (scriptSrc, onSuccess, onError) => {
//   const scriptEl = document.createElement('script');

//   scriptEl.src = scriptSrc;
//   scriptEl.defer = true;

//   scriptEl.addEventListener('load', event => {
//     onSuccess(`${scriptSrc} завантажився успішно!`);
//   });

//   scriptEl.addEventListener('error', event => {
//     onError(`${scriptSrc} не завантажився!`);
//   });

//   document.head.append(scriptEl);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

//~ Рішення через проміси
const loadScript = scriptSrc => {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');

    scriptEl.src = scriptSrc;
    scriptEl.defer = true;

    scriptEl.addEventListener('load', event => {
      resolve(`${scriptSrc} завантажився успішно!`);
    });

    scriptEl.addEventListener('error', event => {
      reject(`${scriptSrc} не завантажився!`);
    });

    document.head.append(scriptEl);
  });
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(result => {
    console.log(result);

    return loadScript('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js');
  })
  .then(result => {
    console.log(result);

    return loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
