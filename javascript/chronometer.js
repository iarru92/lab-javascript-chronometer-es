class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        this.milliseconds++;
        if (callback) {
          callback();
        }
      }, 1);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(
      Math.floor(this.getMilliseconds() / 10)
    );
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 60000) / 1000);
  }

  getMilliseconds() {
    return this.milliseconds % 1000;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
