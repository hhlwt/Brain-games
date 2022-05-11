import { engine, random } from '../index.js';

const theEuclideanAlgorithm = (fisrstNumber, secondNumber) => {
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

export const generatePair = () => {
  const pair = [random(1, 101), random(1, 101)];
  return pair;
};

const generateMission = () => {
  const pair = generatePair();
  const correctAnswer = theEuclideanAlgorithm(pair[0], pair[1]);
  const question = `${String(pair[0])} ${String(pair[1])}`;

  return [question, correctAnswer];
};

const brainGCD = () => {
  const toDo = 'Find the greatest common divisor of given numbers.';
  engine(toDo, generateMission);
};

export default brainGCD;
