import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

const generatePair = () => {
  const pair = [generateRandomNumber(1, 101), generateRandomNumber(1, 101)];
  return pair;
};

const generateRound = () => {
  const pair = generatePair();
  const correctAnswer = theEuclideanAlgorithm(pair[0], pair[1]);
  const question = `${String(pair[0])} ${String(pair[1])}`;

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const mission = 'Find the greatest common divisor of given numbers.';
  playGame(mission, generateRound);
};

export default startGame;
