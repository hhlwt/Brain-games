import readlineSync from "readline-sync";
import { cons } from "@hexlet/pairs";

export const wrongAnswer = (answer, correctAnswer, name) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
  console.log(`Let's try again, ${name}!`);
};

export const congratsWinner = (correctAnswersCount, name) => {
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const userAnswer = (question) =>
  readlineSync.question(`Question: ${question}\nYour answer: `);

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const generatePair = () => {
  const pair = cons(random(1, 101), random(1, 101));
  return pair;
};

export const theEuclideanAlgorithm = (fisrstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return fisrstNumber;
  }
  if (secondNumber === fisrstNumber) {
    return fisrstNumber;
  }
  if (fisrstNumber > secondNumber) {
    const remainder = fisrstNumber % secondNumber;
    return theEuclideanAlgorithm(secondNumber, remainder);
  }
  const remainder = secondNumber % fisrstNumber;
  return theEuclideanAlgorithm(fisrstNumber, remainder);
};

export const isPrime = (num) => {
  if (num === 1) {
    return "no";
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1)
    if (num % i === 0) return "no";
  return "yes";
};
