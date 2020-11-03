'use strict';

let highscore, secretNumber, score;

const init = function () {
  reInit();
  highscore = 0;
};

const reInit = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
};

init();

const elements = {
  resultMessage: document.querySelector('.message'),
  resultScore: document.querySelector('.score'),
  body: document.querySelector('body'),
  secretNumber: document.querySelector('.number'),
  checkButton: document.querySelector('.check'),
  inputGuess: document.querySelector('.guess'),
  resultHighscore: document.querySelector('.highscore'),
  againButton: document.querySelector('.again'),
};

const displayMessage = function (message) {
  elements.resultMessage.textContent = message;
};

const displayScore = function (score) {
  elements.resultScore.textContent = score;
};

const setBackgroundColor = function (score) {
  elements.body.style.backgroundColor = score;
};

const setSecretNumber = function (secretNumber) {
  elements.secretNumber.textContent = secretNumber;
};

const setSecretBoxWidth = function (boxWidth) {
  elements.secretNumber.style.width = boxWidth;
};

const resetGuessInput = function () {
  elements.inputGuess.value = '';
};

const restartGame = function () {
  reInit();

  resetGuessInput();
  displayScore(score);

  setContent('Start guessing...', '?', '#222', '15rem');
};

const setContent = function (message, number, color, width) {
  displayMessage(message);

  setSecretNumber(number);

  setBackgroundColor(color);

  setSecretBoxWidth(width);
};

const playAgain = function () {
  resetGuessInput();
  elements.inputGuess.type = 'hidden';
  elements.againButton.hidden = true;
  elements.checkButton.textContent = 'Play Again?';
};

elements.checkButton.addEventListener('click', function () {
  const guess = elements.inputGuess;
  const guessVal = Number(guess.value);

  if (guess.type === 'hidden') {
    elements.inputGuess.type = 'number';
    elements.againButton.hidden = false;

    elements.checkButton.textContent = 'Check!';

    return restartGame();
  }

  if (!guessVal) {
    displayMessage('⛔️ No number!');
  } else if (guessVal > 20 || guessVal < 0) {
    displayMessage(
      `⛔️ ${guessVal} number are not on the allowed range(between 1 to 20)`
    );
    resetGuessInput();
  } else if (guessVal === secretNumber) {
    setContent(
      `🎉 ${guessVal} Correct Number!`,
      secretNumber,
      '#60b347',
      '30rem'
    );

    if (score > highscore) {
      highscore = score;
      elements.resultHighscore.textContent = highscore;
    }

    playAgain();
  } else if (guessVal !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessVal > secretNumber
          ? `📈 ${guessVal} Too high!`
          : `📉 ${guessVal} Too low!`
      );
      score--;
      displayScore(score);
      resetGuessInput();
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);

      playAgain();
    }
  }
});

elements.againButton.addEventListener('click', function () {
  restartGame();
});
