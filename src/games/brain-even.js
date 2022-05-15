import runEngine from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 101);
  let correctAnswer = 'no';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  const question = randomNumber;
  return [question, correctAnswer];
};

const startGame = () => {
  const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(mission, generateRound);
};

export default startGame;
