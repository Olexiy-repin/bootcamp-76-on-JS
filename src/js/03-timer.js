const timer = {
  deadline: new Date('2025-07-15T00:00:00'),
  intervalId: null,
  refs: {
    days: document.querySelector('.js-timer-days'),
    hours: document.querySelector('.js-timer-hours'),
    minutes: document.querySelector('.js-timer-minutes'),
    seconds: document.querySelector('.js-timer-seconds'),
  },

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (this.deadline <= Date.now()) {
        this.stop();

        return;
      }

      let { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.refs.days.textContent = this.pad(days);
      this.refs.hours.textContent = this.pad(hours);
      this.refs.minutes.textContent = this.pad(minutes);
      this.refs.seconds.textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

timer.start();
