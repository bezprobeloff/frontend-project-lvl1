import { getRandomInt } from '../common.js';
import gameStructure from '../index.js';

const TASK = 'Find the greatest common divisor of given numbers.';

const calcGCD = (x, y) => {
  if (y > x) {
    return calcGCD(y, x);
  }

  if (!y) {
    return x;
  }

  return calcGCD(y, x % y);
};

const generateGame = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const trueAnswer = calcGCD(number1, number2).toString();
  const question = `${number1} ${number2}`;

  return [question, trueAnswer];
};

const startGame = () => {
  gameStructure(generateGame, TASK);
};

export default startGame;
