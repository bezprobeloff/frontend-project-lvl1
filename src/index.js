#!usr/bin/env node
import readlineSync from 'readline-sync';
import { NUMBER_OF_STEPS } from './common.js';
import printName from './cli.js';
import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import prime from './games/prime.js';
import progression from './games/progression.js';

const gameStructure = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = printName();
  let selectedGame;

  switch (game) {
    case 'calc':
      selectedGame = calc;
      console.log('What is the result of the expression?');
      break;
    case 'even':
      selectedGame = even;
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'gcd':
      selectedGame = gcd;
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'prime':
      selectedGame = prime;
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case 'progression':
      selectedGame = progression;
      console.log('What number is missing in the progression?');
      break;
  }

  for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
    const [question, trueAnswer] = selectedGame();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    if (trueAnswer === answer) {
      i === NUMBER_OF_STEPS - 1 ? console.log(`Congratulations, ${name}!`) : console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default gameStructure;
