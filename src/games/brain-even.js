import engine from '../index.js';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const runGame = () => {
  const randomNumber = random(1, 101);
  let correctAnswer = 'no';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  const question = randomNumber;
  return [question, correctAnswer];
};

const brainEven = () => {
  const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(mission, runGame);
};

export default brainEven;
