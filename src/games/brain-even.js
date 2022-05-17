import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

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
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(description, generateRound);
};

export default startGame;
