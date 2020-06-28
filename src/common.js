const NUMBER_OF_STEPS = 3;
const MIN = 0;
const MAX = 100;

const getRandomInt = (min = MIN, max = MAX) => Math.floor(min + Math.random() * (max + 1 - min));

export {
  NUMBER_OF_STEPS,
  getRandomInt,
};
