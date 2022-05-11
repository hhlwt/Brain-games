import { car, cdr } from '@hexlet/pairs';
import {
  generatePair,
  wrongAnswer,
  congratsWinner,
  askUser,
  random,
  greetUser,
} from '../index.js';

const brainCalc = () => {
  const name = greetUser();
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;
  const mathOperations = ['+', '-', '*'];

  while (correctAnswersCount < 3) {
    const pair = generatePair();
    const operation = mathOperations[random(0, 3)];
    let correctAnswer;
    if (operation === '+') {
      correctAnswer = car(pair) + cdr(pair);
    } else if (operation === '-') {
      correctAnswer = car(pair) - cdr(pair);
    } else if (operation === '*') {
      correctAnswer = car(pair) * cdr(pair);
    }

    const question = `${String(car(pair))} ${operation} ${String(cdr(pair))}`;
    const answer = askUser(question);

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }

    congratsWinner(correctAnswersCount, name);
  }
};

export default brainCalc;
