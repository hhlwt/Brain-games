import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generatePair = () => {
  const pair = [generateRandomNumber(1, 101), generateRandomNumber(1, 101)];
  return pair;
};

const generateRound = () => {
  const operands = generatePair();
  const mathOperations = ['+', '-', '*'];
  const operation = mathOperations[generateRandomNumber(0, 3)];
  let correctAnswer;

  if (operation === '+') {
    correctAnswer = operands[0] + operands[1];
  } else if (operation === '-') {
    correctAnswer = operands[0] - operands[1];
  } else if (operation === '*') {
    correctAnswer = operands[0] * operands[1];
  }

  const question = `${String(operands[0])} ${operation} ${String(operands[1])}`;

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const mission = 'What is the result of the expression?';
  playGame(mission, generateRound);
};

export default startGame;
