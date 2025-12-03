/**
 * Object Methods Practice
 * 자바스크립트 객체 메소드 연습
 */

/**
 * Get all keys from an object
 * @param {Object} obj - Input object
 * @returns {string[]} Array of keys
 */
function getKeys(obj) {
  return Object.keys(obj);
}

/**
 * Get all values from an object
 * @param {Object} obj - Input object
 * @returns {Array} Array of values
 */
function getValues(obj) {
  return Object.values(obj);
}

/**
 * Get all entries from an object
 * @param {Object} obj - Input object
 * @returns {Array} Array of [key, value] pairs
 */
function getEntries(obj) {
  return Object.entries(obj);
}

/**
 * Create an object from entries
 * @param {Array} entries - Array of [key, value] pairs
 * @returns {Object} Object created from entries
 */
function fromEntries(entries) {
  return Object.fromEntries(entries);
}

/**
 * Merge multiple objects
 * @param {...Object} objects - Objects to merge
 * @returns {Object} Merged object
 */
function mergeObjects(...objects) {
  return Object.assign({}, ...objects);
}

/**
 * Check if object has a property
 * @param {Object} obj - Input object
 * @param {string} prop - Property name
 * @returns {boolean} True if property exists
 */
function hasProperty(obj, prop) {
  return Object.hasOwn(obj, prop);
}

/**
 * Freeze an object (make it immutable)
 * @param {Object} obj - Input object
 * @returns {Object} Frozen object
 */
function freezeObject(obj) {
  return Object.freeze(obj);
}

/**
 * Check if an object is frozen
 * @param {Object} obj - Input object
 * @returns {boolean} True if object is frozen
 */
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

/**
 * Deep clone an object using JSON
 * Note: This method has limitations - it doesn't handle functions,
 * undefined values, symbols, or circular references
 * @param {Object} obj - Input object
 * @returns {Object} Cloned object
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Create an object with spread operator
 * @param {Object} obj - Source object
 * @param {Object} additions - Properties to add
 * @returns {Object} New object with additions
 */
function spreadAndAdd(obj, additions) {
  return { ...obj, ...additions };
}

module.exports = {
  getKeys,
  getValues,
  getEntries,
  fromEntries,
  mergeObjects,
  hasProperty,
  freezeObject,
  isFrozen,
  deepClone,
  spreadAndAdd,
};
