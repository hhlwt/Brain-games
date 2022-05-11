import { random, engine } from '../index.js';

export const generatePair = () => {
  const pair = [random(1, 101), random(1, 101)];
  return pair;
};

const generateMission = () => {
  const operands = generatePair();
  const mathOperations = ['+', '-', '*'];
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

  return [question, correctAnswer];
};

const brainCalc = () => {
  const toDo = 'What is the result of the expression?';
  engine(toDo, generateMission);
};

export default brainCalc;
