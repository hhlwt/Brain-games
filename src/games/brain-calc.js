import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

const calculate = (firstNumber, secondNumber, operation) => {
  let result;
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else if (operation === '*') {
    result = firstNumber * secondNumber;
  }
  return result;
};

const generateRound = () => {
  const operands = [generateRandomNumber(1, 101), generateRandomNumber(1, 101)];
  const mathOperations = ['+', '-', '*'];
  const operation = mathOperations[generateRandomNumber(0, 3)];
  const correctAnswer = calculate(operands[0], operands[1], operation);

  const question = `${String(operands[0])} ${operation} ${String(operands[1])}`;

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const description = 'What is the result of the expression?';
  playGame(description, generateRound);
};

export default startGame;
