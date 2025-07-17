// https://unsplash.com/documentation
import iziToast from 'izitoast';
import { fetchPhotosByQuery } from './unsplash-api';
import { createGalleryCardTemplate } from './render-functions';

console.log(iziToast);

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = event.target.elements.user_query.value.trim();

  if (searchedValue === '') {
    iziToast.error({
      message: 'Поле для пошуку має бути обовʼязково заповненим!',
      position: 'topRight',
    });

    return;
  }

  refs.loader.classList.remove('is-hidden');

  fetchPhotosByQuery(searchedValue)
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    })
    .then(data => {
      console.log(data);

      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
