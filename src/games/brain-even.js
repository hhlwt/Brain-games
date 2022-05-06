import greetings from "../cli.js";
import { wrongAnswer, congratsWinner, userAnswer, random } from "../index.js";

const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const braineven = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = random(1, 101);
    let correctAnswer = "no";
    if (randomNumber % 2 === 0) {
      correctAnswer = "yes";
    }
    const answer = userAnswer(randomNumber);

    if (answer === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }

    congratsWinner(correctAnswersCount, name);
  }
};

export default braineven;
