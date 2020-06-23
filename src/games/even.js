import { getRandomInt } from '../common.js';

const generateEven = () => {
  const number = getRandomInt();
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  const textQuestion = `${number}`;

  return [textQuestion, trueAnswer];
};

export default generateEven;
