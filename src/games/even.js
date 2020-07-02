import { getRandomInt } from '../common.js';
import playGame from '../index.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGame = () => {
  const number = getRandomInt();
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = number.toString();

  return [question, trueAnswer];
};

const startGame = () => {
  playGame(generateGame, TASK);
};

export default startGame;
