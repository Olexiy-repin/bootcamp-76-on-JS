// https://unsplash.com/documentation
import iziToast from 'izitoast';
import { fetchPhotosByQuery, fetchRandomPhotos } from './unsplash-api';
import { createGalleryCardTemplate } from './render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

const perPage = 8;
let totalPages = null;
let currentPage = 1;
let searchedValue = null;
let cardHeight = null;

const renderRandomPhotos = async () => {
  try {
    const { data } = await fetchRandomPhotos();

    const galleryCardsTemplate = data.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

// renderRandomPhotos();

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedValue = event.target.elements.user_query.value.trim();

    if (searchedValue === '') {
      iziToast.error({
        message: 'Поле для пошуку має бути обовʼязково заповненим!',
        position: 'topRight',
      });

      return;
    }

    refs.loader.classList.remove('is-hidden');
    refs.galleryList.innerHTML = '';
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    currentPage = 1;

    const { data } = await fetchPhotosByQuery(searchedValue, currentPage, perPage);

    totalPages = Math.ceil(data.total / perPage);

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;

    cardHeight = refs.galleryList.querySelector('li').getBoundingClientRect().height;

    if (totalPages > 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    console.log(err);
  } finally {
    refs.loader.classList.add('is-hidden');
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const { data } = await fetchPhotosByQuery(searchedValue, currentPage, perPage);

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    scrollBy({
      top: cardHeight * 2 + 40,
      behavior: 'smooth',
    });

    if (currentPage === totalPages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    console.log(err);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
