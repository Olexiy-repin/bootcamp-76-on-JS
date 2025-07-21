// https://unsplash.com/documentation
import iziToast from 'izitoast';
import { fetchPhotosByQuery, fetchRandomPhotos } from './unsplash-api';
import { createGalleryCardTemplate } from './render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const renderRandomPhotos = async () => {
  try {
    const { data } = await fetchRandomPhotos();

    const galleryCardsTemplate = data.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

renderRandomPhotos();

const onSearchFormSubmit = async event => {
  try {
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
    refs.galleryList.innerHTML = '';

    const { data } = await fetchPhotosByQuery(searchedValue);

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  } finally {
    refs.loader.classList.add('is-hidden');
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
