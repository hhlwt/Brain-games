import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
  const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(mission, generateRound);
};

export default startGame;
