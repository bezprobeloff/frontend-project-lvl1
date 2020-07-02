import readlineSync from 'readline-sync';
import { NUMBER_OF_STEPS } from './common.js';

const playGame = (getGame, task = 'Start game!') => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < NUMBER_OF_STEPS; i += 1) {
    const [question, trueAnswer] = getGame();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    if (trueAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
