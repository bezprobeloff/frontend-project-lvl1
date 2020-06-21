#!usr/bin/env node
import { NUMBER_OF_STEPS, getRandomInt, getRandomOperation, calc } from '../src/common.js';
import readlineSync from 'readline-sync';
import printName from '../src/cli.js';

const name = printName();

for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
//What is the result of the expression?
//  Question: 4 + 10
//Your answer: 145
//"145" is wrong answer ;(. Correct answer was "175".
 // Let's try again, Sam!