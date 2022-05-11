import {
  wrongAnswer, congratsWinner, askUser, random, greetUser,
} from '../index.js';

const brainEven = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = random(1, 101);
    let correctAnswer = 'no';
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    }
    const answer = askUser(randomNumber);

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }

    congratsWinner(correctAnswersCount, name);
  }
};

export default brainEven;
