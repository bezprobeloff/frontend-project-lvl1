import { getRandomInt } from '../src/common.js';

const arithProgression = (number, step) => {
  const arithProgressionList = [];
  for (let i = 1; i <= MAX_NUMBER_PROGRESSION; i += 1) {
    const numberProgression = number + (i - 1) * step;
    arithProgressionList.push(numberProgression);
  }

  return arithProgressionList;
};


  const numberBase = getRandomInt(5);
  const step = getRandomInt(10);
  const progressionList = arithProgression(numberBase, step);
  const index = getRandomInt(progressionList.length - 1);
  const trueAnswer = progressionList[index].toString();
  progressionList[index] = '..';
  console.log(`Question: ${progressionList.join(' ')}`);

