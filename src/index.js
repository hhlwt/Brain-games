import readlineSync from "readline-sync";

export const wrongAnswer = (answer, correctAnswer, name) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
  console.log(`Let's try again, ${name}!`);
};

export const congratsWinner = (correctAnswersCount, name) => {
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const userAnswer = (question) =>
  readlineSync.question(`Question: ${question}\nYour answer: `);
