import {
  wrongAnswer, congratsWinner, askUser, random, greetUser,
} from '../index.js';

const brainProgression = () => {
  const name = greetUser();
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
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
    const answer = askUser(question);

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }
  }
  congratsWinner(correctAnswersCount, name);
};

export default brainProgression;
