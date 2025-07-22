// https://unsplash.com/documentation
import iziToast from 'izitoast';
import { fetchPhotosByQuery } from './unsplash-api';
import { createGalleryCardTemplate } from './render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  targetElement: document.querySelector('.js-target-element'),
};

const perPage = 8;
let totalPages = null;
let currentPage = 38;
let searchedValue = null;

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1.0,
};

const observerCallback = async (entries, observer) => {
  if (entries[0].isIntersecting) {
    try {
      currentPage++;

      const { data } = await fetchPhotosByQuery(searchedValue, currentPage, perPage);

      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

      if (currentPage === totalPages) {
        observer.unobserve(refs.targetElement);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

console.log(observer);

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

    refs.galleryList.innerHTML = '';
    currentPage = 38;

    const { data } = await fetchPhotosByQuery(searchedValue, currentPage, perPage);

    totalPages = Math.ceil(data.total / perPage);

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;

    if (totalPages > 1) {
      observer.observe(refs.targetElement);
    }
  } catch (err) {
    console.log(err);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
