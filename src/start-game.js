import greetings from "./cli.js";

const startGame = () => {
  const name = greetings();
  return name;
};

export default startGame;
