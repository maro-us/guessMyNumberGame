'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
const number = document.querySelector('.number');
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const checkButton = document.querySelector('.check');
const again = document.querySelector('.again');
const scoreElement = document.querySelector('.score');
const guess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
let highestScore = 0;
let score = Number(scoreElement.textContent);
checkButton.addEventListener('click', e => {
  const guessNumber = Number(guess.value);
  if (guessNumber > 0 && guessNumber < 21) {
    if (score > 0) {
      scoreElement.textContent = score;
      if (guessNumber === randomNumber) {
        number.textContent = guessNumber;
        number.style.width = '30rem';
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor =
          'rgb(96, 179, 71)';
        highestScore < score ? (highestScore = score) : highestScore;
        highScore.textContent = highestScore;
      } else {
        score--;
        guessNumber > randomNumber
          ? displayMessage('↗️ high!')
          : displayMessage('↘️ low!');
      }
    } else {
      displayMessage('😔 Game Over!');
      scoreElement.textContent = '0';
    }
  } else {
    displayMessage('⛔ invalid number');
  }
});
again.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  guess.value = '';
  score = '10';
  scoreElement.textContent = '10';
  number.textContent = '?';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
