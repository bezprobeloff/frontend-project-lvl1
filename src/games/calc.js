import gameStructure from '../index.js';
import { getRandomInt } from '../common.js';

const OPERATIONS = ['+', '-', '*'];
const MIN_NUMBER = 0;
const MAX_NUMBER_OPERATIONS = OPERATIONS.length - 1;
const TASK = 'What is the result of the expression?';

const getRandomOperation = () => OPERATIONS[getRandomInt(MIN_NUMBER, MAX_NUMBER_OPERATIONS)];
const sum = (item1, item2) => item1 + item2;
const subtraction = (item1, item2) => item1 - item2;
const mul = (item1, item2) => item1 * item2;

const calc = (item1, item2, operation) => {
  switch (operation) {
    case '+':
      return sum(item1, item2);
    case '-':
      return subtraction(item1, item2);
    case '*':
      return mul(item1, item2);
    default:
      return null;
  }
};

const generateGame = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operation = getRandomOperation();
  const trueAnswer = calc(number1, number2, operation).toString();
  const question = `${number1} ${operation} ${number2}`;

  return [question, trueAnswer];
};

const startGame = () => {
  gameStructure(generateGame, TASK);
};

export default startGame;
