import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askUser = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export const wrongAnswer = (answer, correctAnswer, name) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);
};

export const congratsWinner = (correctAnswersCount, name) => {
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const engine = (toDo, runGame) => {
  const name = greetUser();
  console.log(toDo);

  let correctAnswersCount = 0;
  const correctAnswersToWin = 3;

  while (correctAnswersCount < correctAnswersToWin) {
    const [question, correctAnswer] = runGame();
    const userAnswer = askUser(question);
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      wrongAnswer(userAnswer, correctAnswer, name);
      break;
    }
  }
  congratsWinner(correctAnswersCount, name);
};
