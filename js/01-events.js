/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
TODO: Натискаючи на кнопку "Click me" змусь
TODO: червоний квадрат зміщуватись на 50px по діагоналі
*/

const refs = {
  clickBtn: document.querySelector('.js-click'),
  box: document.querySelector('.js-box'),
  resetBtn: document.querySelector('.js-reset'),
};

let step = 0;

const onClickBtnClick = () => {
  step += 50;

  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  if (step === 200) {
    refs.clickBtn.removeEventListener('click', onClickBtnClick);
  }
};

const onResetBtnClick = () => {
  step = 0;

  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  refs.clickBtn.addEventListener('click', onClickBtnClick);
};

refs.clickBtn.addEventListener('click', onClickBtnClick);
refs.resetBtn.addEventListener('click', onResetBtnClick);
