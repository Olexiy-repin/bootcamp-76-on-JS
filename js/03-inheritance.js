/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Timer {
  #deadline;
  #rootSelector;
  #refs;

  constructor(deadline, selector) {
    // let this = {};
    this.#deadline = deadline;
    this.#rootSelector = document.querySelector(selector);
    this.#refs = {
      days: this.#rootSelector.querySelector('.js-days'),
      hours: this.#rootSelector.querySelector('.js-hours'),
      minutes: this.#rootSelector.querySelector('.js-minutes'),
      seconds: this.#rootSelector.querySelector('.js-seconds'),
    };
    // return this;
  }

  start() {
    console.log('Timer start!');
  }

  stop() {
    console.log('Timer stop!');
  }
}

class PrettyTimer extends Timer {
  #cssOptions;

  constructor(deadline, selector, cssOptions) {
    // let this = super();
    super(deadline, selector);

    this.#cssOptions = cssOptions;
    // return this;
  }

  stop() {
    alert('Congratulations, timer stoped!');

    super.stop();
  }
}

const timer = new Timer('20-08-2025', '.js-timer1');

console.log('timer:', timer);

const prettyTimer = new PrettyTimer('20-08-2025', '.js-timer1', { fontSize: '24px', color: 'teal' });

console.log('prettyTimer:', prettyTimer);

prettyTimer.stop();
