const {
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
} = require('../src/objectMethods');

describe('Object Methods', () => {
  describe('getKeys', () => {
    test('should get all keys', () => {
      expect(getKeys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
    });

    test('should return empty array for empty object', () => {
      expect(getKeys({})).toEqual([]);
    });
  });

  describe('getValues', () => {
    test('should get all values', () => {
      expect(getValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
    });

    test('should return empty array for empty object', () => {
      expect(getValues({})).toEqual([]);
    });
  });

  describe('getEntries', () => {
    test('should get all entries', () => {
      expect(getEntries({ a: 1, b: 2 })).toEqual([
        ['a', 1],
        ['b', 2],
      ]);
    });
  });

  describe('fromEntries', () => {
    test('should create object from entries', () => {
      expect(
        fromEntries([
          ['a', 1],
          ['b', 2],
        ])
      ).toEqual({ a: 1, b: 2 });
    });
  });

  describe('mergeObjects', () => {
    test('should merge multiple objects', () => {
      expect(mergeObjects({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({
        a: 1,
        b: 2,
        c: 3,
      });
    });

    test('should override with later values', () => {
      expect(mergeObjects({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
    });
  });

  describe('hasProperty', () => {
    test('should return true when property exists', () => {
      expect(hasProperty({ a: 1 }, 'a')).toBe(true);
    });

    test('should return false when property not exists', () => {
      expect(hasProperty({ a: 1 }, 'b')).toBe(false);
    });
  });

  describe('freezeObject', () => {
    test('should freeze object', () => {
      const obj = { a: 1 };
      const frozen = freezeObject(obj);
      expect(Object.isFrozen(frozen)).toBe(true);
    });
  });

  describe('isFrozen', () => {
    test('should return true for frozen object', () => {
      const obj = Object.freeze({ a: 1 });
      expect(isFrozen(obj)).toBe(true);
    });

    test('should return false for non-frozen object', () => {
      expect(isFrozen({ a: 1 })).toBe(false);
    });
  });

  describe('deepClone', () => {
    test('should create deep clone', () => {
      const original = { a: { b: { c: 1 } } };
      const cloned = deepClone(original);
      cloned.a.b.c = 2;
      expect(original.a.b.c).toBe(1);
    });
  });

  describe('spreadAndAdd', () => {
    test('should spread and add properties', () => {
      expect(spreadAndAdd({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });

    test('should override existing properties', () => {
      expect(spreadAndAdd({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
    });
  });
});
