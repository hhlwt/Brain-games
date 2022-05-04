#!/usr/bin/env node

import { cons, car, cdr } from "@hexlet/pairs";
import readlineSync from "readline-sync";
import startGame from "../src/start-game.js";

const name = startGame();
console.log("What is the result of the expression?");

let correctAnswers = 0;
const mathOperations = ["+", "-", "*"];

while (correctAnswers < 3) {
  const pair = cons(
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1
  );
  const operation = mathOperations[Math.floor(Math.random() * 3)];
  let resoult;
  if (operation === "+") {
    resoult = car(pair) + cdr(pair);
  } else if (operation === "-") {
    resoult = car(pair) - cdr(pair);
  } else if (operation === "*") {
    resoult = car(pair) * cdr(pair);
  }

  const question = `${String(car(pair))} ${operation} ${String(cdr(pair))}`;
  const answer = readlineSync.question(`Question: ${question}\nYour answer:`);

  if (Number(answer) === resoult) {
    console.log("Correct!");
    correctAnswers += 1;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${resoult}'.`
    );
    console.log(`Let's try again, ${name}!`);
    break;
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
