import { getRandomInt } from '../common.js';
import playGame from '../index.js';

const TASK = 'What number is missing in the progression?';
const MIN_NUMBER = 0;
const MAX_NUMBER_PROGRESSION = 10;
const MAX_NUMBER_STEP = 10;
const MAX_START_NUMBER = 5;

const generateProgression = (number, step) => {
  const progression = [];
  for (let i = 0; i < MAX_NUMBER_PROGRESSION; i += 1) {
    const numberProgression = number + i * step;
    progression.push(numberProgression);
  }

  return progression;
};

const generateGame = () => {
  const startNumber = getRandomInt(MIN_NUMBER, MAX_START_NUMBER);
  const step = getRandomInt(MIN_NUMBER, MAX_NUMBER_STEP);
  const progression = generateProgression(startNumber, step);
  const index = getRandomInt(MIN_NUMBER, progression.length - 1);
  const trueAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');

  return [question, trueAnswer];
};

const startGame = () => {
  playGame(generateGame, TASK);
};

export default startGame;
