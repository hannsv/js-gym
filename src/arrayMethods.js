/**
 * Array Methods Practice
 * 자바스크립트 배열 메소드 연습
 */

/**
 * Filter even numbers from an array
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Array of even numbers
 */
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

/**
 * Map each number to its square
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Array of squared numbers
 */
function mapToSquares(arr) {
  return arr.map((num) => num * num);
}

/**
 * Sum all numbers in an array using reduce
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of all numbers
 */
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Find the first element greater than a threshold
 * @param {number[]} arr - Array of numbers
 * @param {number} threshold - Threshold value
 * @returns {number|undefined} First element greater than threshold
 */
function findGreaterThan(arr, threshold) {
  return arr.find((num) => num > threshold);
}

/**
 * Check if all elements are positive
 * @param {number[]} arr - Array of numbers
 * @returns {boolean} True if all elements are positive
 */
function allPositive(arr) {
  return arr.every((num) => num > 0);
}

/**
 * Check if some elements are negative
 * @param {number[]} arr - Array of numbers
 * @returns {boolean} True if some elements are negative
 */
function someNegative(arr) {
  return arr.some((num) => num < 0);
}

/**
 * Sort array in ascending order
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Sorted array
 */
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}

/**
 * Flatten a nested array
 * Note: Using Infinity depth may cause performance issues with very deeply nested arrays
 * @param {Array} arr - Nested array
 * @param {number} depth - Maximum depth to flatten (default: Infinity)
 * @returns {Array} Flattened array
 */
function flattenArray(arr, depth = Infinity) {
  return arr.flat(depth);
}

module.exports = {
  filterEvenNumbers,
  mapToSquares,
  sumArray,
  findGreaterThan,
  allPositive,
  someNegative,
  sortAscending,
  flattenArray,
};
