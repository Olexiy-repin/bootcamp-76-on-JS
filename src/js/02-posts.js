import { fetchAllPosts, createNewPost, deletePostById } from './mockapi';
import { createPostCardTemplate } from './render-functions';
import iziToast from 'izitoast';

const refs = {
  postsList: document.querySelector('.js-posts-list'),
  postForm: document.querySelector('.js-post-form'),
};

const renderPosts = () => {
  fetchAllPosts()
    .then(({ data }) => {
      const postsCardsTemplate = data.map(post => createPostCardTemplate(post)).join('');

      refs.postsList.innerHTML = postsCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

renderPosts();

const onPostFormSubmit = event => {
  event.preventDefault();

  const formData = {
    [event.target.elements.post_title.name]: event.target.elements.post_title.value.trim(),
    [event.target.elements.post_body.name]: event.target.elements.post_body.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    iziToast.error({
      message: 'Усі поля для введення мають бути заповненими!',
      position: 'topRight',
    });

    return;
  }

  createNewPost(formData)
    .then(({ data }) => {
      iziToast.success({
        message: `${data.post_title} успішно додано!`,
        position: 'topRight',
      });

      event.target.reset();

      renderPosts();
    })
    .catch(err => {
      console.log(err);
    });
};

const onDeleteBtnClick = event => {
  const deleteBtnEl = event.target.closest('button[data-delete]');

  if (deleteBtnEl === null) {
    return;
  }

  const postId = deleteBtnEl.dataset.postId;

  deletePostById(postId)
    .then(({ data }) => {
      iziToast.success({
        message: `${data.post_title} було успішно видалено!`,
        position: 'topRight',
      });

      renderPosts();
    })
    .catch(err => {
      console.log(err);
    });
};

refs.postForm.addEventListener('submit', onPostFormSubmit);
refs.postsList.addEventListener('click', onDeleteBtnClick);
