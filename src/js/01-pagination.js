// https://jsonplaceholder.typicode.com/
import iziToast from 'izitoast';
import { fetchPosts } from './jsonplaceholder-api';
import { createPostCardTemplate } from './render-functions';

const refs = {
  postsList: document.querySelector('.js-posts'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let currentPage = 1;

const renderPosts = async () => {
  try {
    const { data: postsArr } = await fetchPosts(currentPage);

    const postsCardsTemplate = postsArr.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.innerHTML = postsCardsTemplate;

    refs.loadMoreBtn.classList.remove('is-hidden');

    refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

const onLoadMoreBtnClick = async event => {
  try {
    event.target.blur();

    currentPage++;

    const { data: postsArr } = await fetchPosts(currentPage);

    if (postsArr.length === 0) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);

      iziToast.info({
        message: 'Більше постів немає!',
        position: 'topRight',
      });

      return;
    }

    const postsCardsTemplate = postsArr.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.insertAdjacentHTML('beforeend', postsCardsTemplate);
  } catch (err) {
    console.log(err);
  }
};
