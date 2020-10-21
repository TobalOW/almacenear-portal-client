/**
 * @method getRandom
 * @description Get a random number inside a range
 * @usage getRandom(0, 100)
 */
export default (min = 0, max = 10) => {
  return Math.floor(Math.random() * max) + min;
};
