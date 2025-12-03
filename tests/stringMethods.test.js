const {
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
} = require('../src/stringMethods');

describe('String Methods', () => {
  describe('toUpperCase', () => {
    test('should convert to uppercase', () => {
      expect(toUpperCase('hello')).toBe('HELLO');
    });

    test('should handle mixed case', () => {
      expect(toUpperCase('HeLLo WoRLd')).toBe('HELLO WORLD');
    });
  });

  describe('toLowerCase', () => {
    test('should convert to lowercase', () => {
      expect(toLowerCase('HELLO')).toBe('hello');
    });

    test('should handle mixed case', () => {
      expect(toLowerCase('HeLLo WoRLd')).toBe('hello world');
    });
  });

  describe('trimString', () => {
    test('should trim whitespace', () => {
      expect(trimString('  hello  ')).toBe('hello');
    });

    test('should handle tabs and newlines', () => {
      expect(trimString('\t\nhello\n\t')).toBe('hello');
    });
  });

  describe('splitString', () => {
    test('should split by comma', () => {
      expect(splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
    });

    test('should split by space', () => {
      expect(splitString('hello world', ' ')).toEqual(['hello', 'world']);
    });
  });

  describe('includesSubstring', () => {
    test('should return true when substring exists', () => {
      expect(includesSubstring('hello world', 'world')).toBe(true);
    });

    test('should return false when substring not found', () => {
      expect(includesSubstring('hello world', 'foo')).toBe(false);
    });
  });

  describe('replaceAll', () => {
    test('should replace all occurrences', () => {
      expect(replaceAll('hello hello', 'hello', 'hi')).toBe('hi hi');
    });

    test('should handle no matches', () => {
      expect(replaceAll('hello', 'x', 'y')).toBe('hello');
    });
  });

  describe('getSubstring', () => {
    test('should get substring', () => {
      expect(getSubstring('hello world', 0, 5)).toBe('hello');
    });

    test('should handle middle substring', () => {
      expect(getSubstring('hello world', 6, 11)).toBe('world');
    });
  });

  describe('padStart', () => {
    test('should pad string from start', () => {
      expect(padStart('5', 3, '0')).toBe('005');
    });

    test('should not pad if already long enough', () => {
      expect(padStart('hello', 3, '0')).toBe('hello');
    });
  });

  describe('startsWithPrefix', () => {
    test('should return true when starts with prefix', () => {
      expect(startsWithPrefix('hello world', 'hello')).toBe(true);
    });

    test('should return false when not starts with prefix', () => {
      expect(startsWithPrefix('hello world', 'world')).toBe(false);
    });
  });

  describe('repeatString', () => {
    test('should repeat string', () => {
      expect(repeatString('ab', 3)).toBe('ababab');
    });

    test('should return empty string when repeat 0 times', () => {
      expect(repeatString('hello', 0)).toBe('');
    });
  });
});
