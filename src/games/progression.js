import { getRandomInt } from '../common.js';

const MAX_NUMBER_PROGRESSION = 10;
const MAX_NUMBER_STEP = 10;
const MAX_NUMBER_BASE = 5;

const arithmeticProgression = (number, step) => {
  const arithProgressionList = [];
  for (let i = 1; i <= MAX_NUMBER_PROGRESSION; i += 1) {
    const numberProgression = number + (i - 1) * step;
    arithProgressionList.push(numberProgression);
  }

  return arithProgressionList;
};

const generateProgression = () => {
  const numberBase = getRandomInt(MAX_NUMBER_BASE);
  const step = getRandomInt(MAX_NUMBER_STEP);
  const progressionList = arithmeticProgression(numberBase, step);
  const index = getRandomInt(progressionList.length - 1);
  const trueAnswer = progressionList[index].toString();
  progressionList[index] = '..';
  const textQuestion = `${progressionList.join(' ')}`;

  return [textQuestion, trueAnswer];
};

export default generateProgression;
