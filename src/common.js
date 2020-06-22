const NUMBER_OF_STEPS = 3;
const MAX_NUMBER = 100;
const MAX_NUMBER_PROGRESSION = 10;
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

const NOD = (x, y) => {
  if (y > x) {
    return NOD(y, x);
  }

  if (!y) {
    return x;
  }

  return NOD(y, x % y);
};

const arithProgression = (number, step) => {
  const arithProgressionList = [];
  for (let i = 1; i <= MAX_NUMBER_PROGRESSION; i += 1) {
    const numberProgression = number + (i - 1) * step;
    arithProgressionList.push(numberProgression);
  }

  return arithProgressionList;
};

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

export {
  NUMBER_OF_STEPS,
  getRandomInt,
  getRandomOperation,
  calc,
  NOD,
  arithProgression,
  isPrime,
};
