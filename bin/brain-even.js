#!usr/bin/env node
import readlineSync from 'readline-sync';
import printName from '../src/cli.js';

const NUMBER_OF_STEPS = 3;
const MAX_NUMBER = 100;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

console.log('Welcome to the Brain Games!');
const name = printName();

for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = getRandomInt(MAX_NUMBER);
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
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
