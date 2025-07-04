/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
TODO: Оброби форму та збережи відгук користувача в об'єкт
*/

const refs = {
  form: document.querySelector('.js-form'),
};

const onFormSubmit = event => {
  event.preventDefault();

  const formData = {
    email: refs.form.elements.email.value.trim(),
    password: refs.form.elements.password.value.trim(),
    comment: refs.form.elements.comment.value.trim(),
  };

  if (Object.values(formData).includes('')) {
    alert('Усі поля форми, мають бути заповнені!');

    return;
  }

  console.log(formData);

  refs.form.reset();
};

refs.form.addEventListener('submit', onFormSubmit);
