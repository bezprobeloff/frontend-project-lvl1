#!usr/bin/env node
import readlineSync from 'readline-sync';
import { NUMBER_OF_STEPS, getRandomInt, NOD } from '../src/common.js';
import printName from '../src/cli.js';

const name = printName();

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const trueAnswer = NOD(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  if (trueAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${name}!`);
    break;
  }
}

console.log(`Congratulations, ${name}!`);
