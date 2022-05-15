import readlineSync from 'readline-sync';

const runEngine = (mission, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(mission);

  const countOfRounds = 3;
  let correctAnswersCount = 0;

  for (let round = 1; round <= countOfRounds; round += 1) {
    const [question, correctAnswer] = generateRound();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runEngine;
