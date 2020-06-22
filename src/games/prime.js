#!usr/bin/env node
import { getRandomInt } from '../common.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

const generatePrime = () => {
  const number = getRandomInt();
  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  const textQuestion = `${number}`;

  return [textQuestion, trueAnswer];
};

export default generatePrime;
