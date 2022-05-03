#!/usr/bin/env node

import readlineSync from "readline-sync";
import startGame from "./brain-games.js";

const name = startGame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;

while (correctAnswers < 3) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let isTheNumberEven = false;
  if (randomNumber % 2 === 0) {
    isTheNumberEven = true;
  }
  const answer = readlineSync.question(
    `Question: ${randomNumber}\nYour answer: `
  );

  if (isTheNumberEven) {
    if (answer.toLowerCase() === "yes") {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } else if (!isTheNumberEven) {
    if (answer.toLowerCase() === "no") {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
