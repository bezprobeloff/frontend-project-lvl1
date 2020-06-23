import { getRandomInt } from '../common.js';


const OPERATIONS = ['+', '-', '*'];
const maxIndexArray = OPERATIONS.length - 1;

const getRandomOperation = () => OPERATIONS[getRandomInt(maxIndexArray)];
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

const generateCalculate = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operation = getRandomOperation();
  const trueAnswer = calc(number1, number2, operation).toString();
  const textQuestion = `${number1} ${operation} ${number2}`;

  return [textQuestion, trueAnswer];
};

export default generateCalculate;
