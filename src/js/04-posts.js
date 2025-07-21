import { fetchAllPosts, createNewPost, deletePostById } from './mockapi';
import { createPostCardTemplate } from './render-functions';
import iziToast from 'izitoast';

const refs = {
  postsList: document.querySelector('.js-posts-list'),
  postForm: document.querySelector('.js-post-form'),
};

const renderPosts = async () => {
  try {
    const { data } = await fetchAllPosts();

    const postsCardsTemplate = data.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.innerHTML = postsCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

const onPostFormSubmit = async event => {
  try {
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

    const { data } = await createNewPost(formData);

    iziToast.success({
      message: `${data.post_title} успішно додано!`,
      position: 'topRight',
    });

    event.target.reset();

    renderPosts();
  } catch (err) {
    console.log(err);
  }
};

const onDeleteBtnClick = async event => {
  try {
    const deleteBtnEl = event.target.closest('button[data-delete]');

    if (deleteBtnEl === null) {
      return;
    }

    const postId = deleteBtnEl.dataset.postId;

    const { data } = await deletePostById(postId);

    iziToast.success({
      message: `${data.post_title} було успішно видалено!`,
      position: 'topRight',
    });

    renderPosts();
  } catch (err) {
    console.log(err);
  }
};

refs.postForm.addEventListener('submit', onPostFormSubmit);
refs.postsList.addEventListener('click', onDeleteBtnClick);
