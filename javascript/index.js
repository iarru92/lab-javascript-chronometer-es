const chronometer = new Chronometer();

const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  // BONUS
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
  } else {
    printSplit();
  }
});

function printSplit() {
  const splitTime = chronometer.split();
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}


btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime(); // Added to reset the clock display
  } else {
    printSplit();
  }
});