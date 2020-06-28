import { getRandomInt } from '../common.js';
import gameStructure from '../index.js';

const TASK = 'What number is missing in the progression?';
const MIN_NUMBER = 0;
const MAX_NUMBER_PROGRESSION = 10;
const MAX_NUMBER_STEP = 10;
const MAX_START_NUMBER = 5;

const calcArithmeticProgression = (number, step) => {
  const arithProgressionList = [];
  for (let i = 0; i < MAX_NUMBER_PROGRESSION; i += 1) {
    const numberProgression = number + i * step;
    arithProgressionList.push(numberProgression);
  }

  return arithProgressionList;
};

const generateGame = () => {
  const startNumber = getRandomInt(MIN_NUMBER, MAX_START_NUMBER);
  const step = getRandomInt(MIN_NUMBER, MAX_NUMBER_STEP);
  const progression = calcArithmeticProgression(startNumber, step);
  const index = getRandomInt(MIN_NUMBER, progression.length - 1);
  const trueAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');

  return [question, trueAnswer];
};

const startGame = () => {
  gameStructure(generateGame, TASK);
};

export default startGame;
