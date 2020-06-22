const NUMBER_OF_STEPS = 3;
const MAX_NUMBER = 100;
const MAX_NUMBER_PROGRESSION = 10;
const OPERATIONS = ['+', '-', '*'];

const maxIndexArray = OPERATIONS.length - 1;

const getRandomInt = (max = MAX_NUMBER) => Math.floor(Math.random() * Math.floor(max));
const getRandomOperation = () => OPERATIONS[getRandomInt(maxIndexArray)];

export {
  NUMBER_OF_STEPS,
  getRandomInt,
  getRandomOperation,
};
