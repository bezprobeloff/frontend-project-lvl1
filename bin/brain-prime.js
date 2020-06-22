#!usr/bin/env node
import readlineSync from 'readline-sync';
import { NUMBER_OF_STEPS, getRandomInt, isPrime } from '../src/common.js';
import printName from '../src/cli.js';

const name = printName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
  const number = getRandomInt();
  const trueAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (trueAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${name}!`);
    break;
  }
}

console.log(`Congratulations, ${name}!`);
