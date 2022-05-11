import engine from '../index.js';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const runGame = () => {
  const arrayLength = random(5, 11);
  const theCommonDifference = random(1, 6);
  const progressionArray = [random(1, 101)];

  for (let i = 1; i < arrayLength; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + theCommonDifference;
  }

  const unknownElement = random(1, arrayLength - 1);
  const correctAnswer = progressionArray[unknownElement];
  progressionArray[unknownElement] = '..';
  const question = progressionArray.join(' ');

  return [question, correctAnswer];
};

const brainProgression = () => {
  const mission = 'What number is missing in the progression?';
  engine(mission, runGame);
};

export default brainProgression;
