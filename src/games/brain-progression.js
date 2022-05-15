import runEngine from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateRound = () => {
  const arrayLength = generateRandomNumber(5, 11);
  const theCommonDifference = generateRandomNumber(1, 6);
  const progressionArray = [generateRandomNumber(1, 101)];

  for (let i = 1; i < arrayLength; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + theCommonDifference;
  }

  const unknownElement = generateRandomNumber(1, arrayLength - 1);
  const correctAnswer = progressionArray[unknownElement];
  progressionArray[unknownElement] = '..';
  const question = progressionArray.join(' ');

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const mission = 'What number is missing in the progression?';
  runEngine(mission, generateRound);
};

export default startGame;
