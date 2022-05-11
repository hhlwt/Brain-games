import {
  generatePair,
  wrongAnswer,
  congratsWinner,
  askUser,
  theEuclideanAlgorithm,
  greetUser,
} from '../index.js';

const brainGCD = () => {
  const name = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const pair = generatePair();
    const correctAnswer = theEuclideanAlgorithm(pair[0], pair[1]);

    const question = `${String(pair[0])} ${String(pair[1])}`;
    const answer = askUser(question);

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }
    congratsWinner(correctAnswersCount, name);
  }
};

export default brainGCD;
