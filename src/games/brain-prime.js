import { random, engine } from '../index.js';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return 'no';
  return 'yes';
};

const runGame = () => {
  const number = random(1, 101);
  const correctAnswer = isPrime(number);
  const question = `${number}`;

  return [question, correctAnswer];
};

const brainPrime = () => {
  const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine(mission, runGame);
};

export default brainPrime;
