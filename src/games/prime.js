import { getRandomInt } from '../common.js';
import playGame from '../index.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGame = () => {
  const number = getRandomInt();
  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();

  return [question, trueAnswer];
};

const startGame = () => {
  playGame(generateGame, TASK);
};

export default startGame;
