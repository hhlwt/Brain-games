import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

const mathOperations = ['+', '-', '*'];

const calculate = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown math operation: '${operation}'!`);
  }
};

const generateRound = () => {
  const firstOperand = generateRandomNumber(1, 101);
  const secondOperand = generateRandomNumber(1, 101);
  const operation = mathOperations[generateRandomNumber(0, mathOperations.length)];
  const correctAnswer = calculate(firstOperand, secondOperand, operation);

  const question = `${String(firstOperand)} ${operation} ${String(secondOperand)}`;

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const description = 'What is the result of the expression?';
  playGame(description, generateRound);
};

export default startGame;
