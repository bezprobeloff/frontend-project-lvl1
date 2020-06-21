const NUMBER_OF_STEPS = 3;
const MAX_NUMBER = 100;
const OPERATIONS = ['+', '-', '*'];

const getRandomInt = (max = MAX_NUMBER) => Math.floor(Math.random() * Math.floor(max));

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

export {
  NUMBER_OF_STEPS,
  getRandomInt,
  getRandomOperation,
  calc,
};
