#!usr/bin/env node
import { NUMBER_OF_STEPS, getRandomInt, getRandomOperation, calc } from '../src/common.js';
import readlineSync from 'readline-sync';
import printName from '../src/cli.js';

const name = printName();

console.log('What is the result of the expression?');

for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operation = getRandomOperation();
  const trueAnswer = calc(number1, number2, operation).toString();
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  if (trueAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${name}!`);
    break;
  }
}

console.log(`Congratulations, ${name}!`);
