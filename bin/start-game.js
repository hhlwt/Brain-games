import greetings from "../src/cli.js";

const startGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = greetings();
  return name;
};

export default startGame;
