import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

/* const findGreatestCommonDivisior = (fisrstNumber, secondNumber) => {
  if (fisrstNumber > secondNumber) {
    for (let i = secondNumber; i > 0; i -= 1) {
      if (fisrstNumber % i === 0 && secondNumber % i === 0) {
        return i;
      }
    }
  } else {
    for (let i = fisrstNumber; i > 0; i -= 1) {
      if (fisrstNumber % i === 0 && secondNumber % i === 0) {
        return i;
      }
    }
  }
};
Expected to return a value at the end of arrow function.
Линтер ругается на такое построение функции и говорит,
что ожидается return в конце нее (как я понимаю).
На сколько это критично и можно ли проигнорировать эту ошибку?
Напишите плиз в ревью))
*/

const findGreatestCommonDivisior = (fisrstNumber, secondNumber) => {
  let divisor;
  if (fisrstNumber > secondNumber) {
    for (let i = secondNumber; i > 0; i -= 1) {
      if (fisrstNumber % i === 0 && secondNumber % i === 0) {
        divisor = i;
        break;
      }
    }
  } else {
    for (let i = fisrstNumber; i > 0; i -= 1) {
      if (fisrstNumber % i === 0 && secondNumber % i === 0) {
        divisor = i;
        break;
      }
    }
  }
  return divisor;
};

const generateRound = () => {
  const pair = [generateRandomNumber(1, 101), generateRandomNumber(1, 101)];
  const correctAnswer = findGreatestCommonDivisior(pair[0], pair[1]);
  const question = `${String(pair[0])} ${String(pair[1])}`;

  return [question, String(correctAnswer)];
};

const startGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  playGame(description, generateRound);
};

export default startGame;
