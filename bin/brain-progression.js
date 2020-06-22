#!usr/bin/env node
import readlineSync from 'readline-sync';
import { NUMBER_OF_STEPS, getRandomInt, arithProgression } from '../src/common.js';
import printName from '../src/cli.js';

const name = printName();

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
  const numberBase = getRandomInt(5);
  const step = getRandomInt(10);
  const progressionList = arithProgression(numberBase, step);
  const index = getRandomInt(progressionList.length - 1);
  const trueAnswer = progressionList[index].toString();
  progressionList[index] = '..';
  console.log(`Question: ${progressionList.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (trueAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${name}!`);
    break;
  }
}

console.log(`Congratulations, ${name}!`);
