/**
 * String Methods Practice
 * 자바스크립트 문자열 메소드 연습
 */

/**
 * Convert string to uppercase
 * @param {string} str - Input string
 * @returns {string} Uppercase string
 */
function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Convert string to lowercase
 * @param {string} str - Input string
 * @returns {string} Lowercase string
 */
function toLowerCase(str) {
  return str.toLowerCase();
}

/**
 * Trim whitespace from both ends
 * @param {string} str - Input string
 * @returns {string} Trimmed string
 */
function trimString(str) {
  return str.trim();
}

/**
 * Split string by delimiter
 * @param {string} str - Input string
 * @param {string} delimiter - Delimiter to split by
 * @returns {string[]} Array of substrings
 */
function splitString(str, delimiter) {
  return str.split(delimiter);
}

/**
 * Check if string includes a substring
 * @param {string} str - Input string
 * @param {string} substring - Substring to search for
 * @returns {boolean} True if substring is found
 */
function includesSubstring(str, substring) {
  return str.includes(substring);
}

/**
 * Replace all occurrences of a substring
 * Note: replaceAll() requires Node.js 15+ or modern browsers
 * @param {string} str - Input string
 * @param {string} search - String to search for
 * @param {string} replacement - Replacement string
 * @returns {string} String with replacements
 */
function replaceAll(str, search, replacement) {
  return str.replaceAll(search, replacement);
}

/**
 * Get a substring from start to end index
 * @param {string} str - Input string
 * @param {number} start - Start index
 * @param {number} end - End index
 * @returns {string} Substring
 */
function getSubstring(str, start, end) {
  return str.substring(start, end);
}

/**
 * Pad string to a certain length from the start
 * @param {string} str - Input string
 * @param {number} length - Target length
 * @param {string} padChar - Character to pad with
 * @returns {string} Padded string
 */
function padStart(str, length, padChar) {
  return str.padStart(length, padChar);
}

/**
 * Check if string starts with a prefix
 * @param {string} str - Input string
 * @param {string} prefix - Prefix to check
 * @returns {boolean} True if string starts with prefix
 */
function startsWithPrefix(str, prefix) {
  return str.startsWith(prefix);
}

/**
 * Repeat a string n times
 * @param {string} str - Input string
 * @param {number} times - Number of times to repeat
 * @returns {string} Repeated string
 */
function repeatString(str, times) {
  return str.repeat(times);
}

module.exports = {
  toUpperCase,
  toLowerCase,
  trimString,
  splitString,
  includesSubstring,
  replaceAll,
  getSubstring,
  padStart,
  startsWithPrefix,
  repeatString,
};
