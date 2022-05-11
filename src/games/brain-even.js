import { random, engine } from '../index.js';

const generateMission = () => {
  const randomNumber = random(1, 101);
  let correctAnswer = 'no';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  const question = randomNumber;
  return [question, correctAnswer];
};

const brainEven = () => {
  const toDo = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(toDo, generateMission);
};

export default brainEven;
