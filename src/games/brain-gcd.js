import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

const gcd = (fisrstDividend, secondDividend, divisor) => {
  if (fisrstDividend % divisor === 0 && secondDividend % divisor === 0) {
    return divisor;
  }
  return gcd(fisrstDividend, secondDividend, divisor - 1);
};

const generateRound = () => {
  const fisrstDividend = generateRandomNumber(1, 101);
  const secondDividend = generateRandomNumber(1, 101);
  const correctAnswer = gcd(fisrstDividend, secondDividend, fisrstDividend);
  const question = `${String(fisrstDividend)} ${String(secondDividend)}`;

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  playGame(description, generateRound);
};

export default startGame;
