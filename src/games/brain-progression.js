import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

const createProgression = (firstElement, commonDifference, progressionLength) => {
  const progression = [firstElement];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + commonDifference;
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = generateRandomNumber(5, 11);
  const commonDifference = generateRandomNumber(1, 6);
  const firstElement = generateRandomNumber(1, 101);

  const progression = createProgression(firstElement, commonDifference, progressionLength);

  const hiddenNumberIndex = generateRandomNumber(1, progressionLength - 1);
  const correctAnswer = progression.splice(hiddenNumberIndex, 1, '..');
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const description = 'What number is missing in the progression?';
  playGame(description, generateRound);
};

export default startGame;
