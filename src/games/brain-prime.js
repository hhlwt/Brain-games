import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = generateRandomNumber(1, 101);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(description, generateRound);
};

export default startGame;
