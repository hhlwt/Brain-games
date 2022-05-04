#!/usr/bin/env node

import startGame from "../src/start-game.js";
import { wrongAnswer, congratsWinner, userAnswer } from "../src/index.js";

const name = startGame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let correctAnswer = "no";
  if (randomNumber % 2 === 0) {
    correctAnswer = "yes";
  }
  const answer = userAnswer(randomNumber);

  if (answer === correctAnswer) {
    console.log("Correct!");
    correctAnswersCount += 1;
  } else {
    wrongAnswer(answer, correctAnswer, name);
    break;
  }

  congratsWinner(correctAnswersCount, name);
}
