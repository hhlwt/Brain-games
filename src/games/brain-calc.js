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
    const operands = generatePair();
    const operation = mathOperations[random(0, 3)];
    let correctAnswer;
    if (operation === '+') {
      correctAnswer = operands[0] + operands[1];
    } else if (operation === '-') {
      correctAnswer = operands[0] - operands[1];
    } else if (operation === '*') {
      correctAnswer = operands[0] * operands[1];
    }

    const question = `${String(operands[0])} ${operation} ${String(operands[1])}`;
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
