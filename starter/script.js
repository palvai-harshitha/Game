'use strict';
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const score0 = document.getElementById('current--0');
const score1 = document.getElementById('current--1');
const p0 = document.querySelector('.player--0');
const p1 = document.querySelector('.player--1');
const s0 = document.querySelector('.score--0');
const s1 = document.querySelector('.score--1');
let currentScore = 0;
let score = [0, 0];
let activePlayer = 0;
btnRoll.addEventListener('click', function () {
  //random number
  let r = Math.trunc(Math.random() * 6 + 1);
  console.log(r);
  //display image
  dice.src = `dice-${r}.png`;
  //addscore
  if (r !== 1) {
    currentScore += r;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    p0.classList.toggle('player--active');
    p1.classList.toggle('player--active');
  }
});
btnHold.addEventListener('click', function () {
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  p0.classList.toggle('player--active');
  p1.classList.toggle('player--active');
});
btnNew.addEventListener('click', function () {
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;

  document.getElementById(`current--1`).textContent = 0;
  activePlayer = 0;
  p0.classList.add('player--active');
  p1.classList.remove('player--active');
});
