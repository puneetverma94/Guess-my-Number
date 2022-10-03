'use strict';
let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = ' Enter no between 1 to 20';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score != 0) {
    if (!guess) {
      document.querySelector('.message').textContent = ' No Number entered ⛔';
    } else if (guess > 20) {
      document.querySelector('.message').textContent =
        ' Enter no between 0 and 20';
    } else if (guess == secretNumber) {
      document.querySelector('.message').textContent = ' Correct Answer 🥳';
      document.querySelector('.number').textContent = secretNumber;
      if (highScore < score) highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = ' No to high ⏫';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = ' No to low ⏬';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = ' You lost the game';
  }
});
