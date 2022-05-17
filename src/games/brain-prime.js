import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return 'no';
  return 'yes';
};

const generateRound = () => {
  const number = generateRandomNumber(1, 101);
  const correctAnswer = isPrime(number);
  const question = `${number}`;

  return [question, correctAnswer];
};

const startGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(description, generateRound);
};

export default startGame;
