const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

let feedbackFormData = {};

const fillFeedbackFormFields = feedbackForm => {
  try {
    const feedbackFormDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (feedbackFormDataFromLS === null) {
      return;
    }

    feedbackFormData = feedbackFormDataFromLS;

    const feedbackFormDataFromLSKeys = Object.keys(feedbackFormDataFromLS);

    feedbackFormDataFromLSKeys.forEach(key => {
      feedbackForm.elements[key].value = feedbackFormDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};

fillFeedbackFormFields(refs.feedbackForm);

const onFeedbackFormFieldChange = ({ target: feedbackFormField }) => {
  try {
    const feedbackFormFieldValue = feedbackFormField.value.trim();
    const feedbackFormFieldName = feedbackFormField.name;

    feedbackFormData[feedbackFormFieldName] = feedbackFormFieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
  } catch (err) {
    console.log(err);
  }
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};

refs.feedbackForm.addEventListener('change', onFeedbackFormFieldChange);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
