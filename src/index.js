#!usr/bin/env node
import readlineSync from 'readline-sync';
import { NUMBER_OF_STEPS, getRandomInt } from './common.js';
import printName from './cli.js';

const gameStructure = () => {
  console.log('Welcome to the Brain Games!');
  const name = printName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
    // const question;
    const number = getRandomInt();
    const trueAnswer = number % 2 === 0 ? 'yes' : 'no';


    console.log(`Question: ${number}`);
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
