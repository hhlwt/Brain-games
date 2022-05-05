#!/usr/bin/env node

import { car, cdr } from "@hexlet/pairs";
import {
  generatePair,
  wrongAnswer,
  congratsWinner,
  userAnswer,
} from "../src/index.js";
import startGame from "../src/start-game.js";

const name = startGame();
console.log("What is the result of the expression?");

let correctAnswersCount = 0;
const mathOperations = ["+", "-", "*"];

while (correctAnswersCount < 3) {
  const pair = generatePair();
  const operation = mathOperations[Math.floor(Math.random() * 3)];
  let correctAnswer;
  if (operation === "+") {
    correctAnswer = car(pair) + cdr(pair);
  } else if (operation === "-") {
    correctAnswer = car(pair) - cdr(pair);
  } else if (operation === "*") {
    correctAnswer = car(pair) * cdr(pair);
  }

  const question = `${String(car(pair))} ${operation} ${String(cdr(pair))}`;
  const answer = userAnswer(question);

  if (Number(answer) === correctAnswer) {
    console.log("Correct!");
    correctAnswersCount += 1;
  } else {
    wrongAnswer(answer, correctAnswer, name);
    break;
  }

  congratsWinner(correctAnswersCount, name);
}
