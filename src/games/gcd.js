#!usr/bin/env node
import { getRandomInt } from '../common.js';

const NOD = (x, y) => {
  if (y > x) {
    return NOD(y, x);
  }

  if (!y) {
    return x;
  }

  return NOD(y, x % y);
};

const generateGcd = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const trueAnswer = NOD(number1, number2).toString();
  const textQuestion = `${number1} ${number2}`;

  return [textQuestion, trueAnswer];
};

export default generateGcd;
