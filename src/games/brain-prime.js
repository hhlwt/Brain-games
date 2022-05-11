import {
  wrongAnswer,
  congratsWinner,
  askUser,
  isPrime,
  random,
  greetUser,
} from '../index.js';

const brainPrime = () => {
  const name = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = random(1, 101);
    const correctAnswer = isPrime(number);

    const question = `${number}`;
    const answer = askUser(question);

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }
  }
  congratsWinner(correctAnswersCount, name);
};

export default brainPrime;
