const {
  filterEvenNumbers,
  mapToSquares,
  sumArray,
  findGreaterThan,
  allPositive,
  someNegative,
  sortAscending,
  flattenArray,
} = require('../src/arrayMethods');

describe('Array Methods', () => {
  describe('filterEvenNumbers', () => {
    test('should filter even numbers from array', () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('should return empty array when no even numbers', () => {
      expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
    });

    test('should handle empty array', () => {
      expect(filterEvenNumbers([])).toEqual([]);
    });
  });

  describe('mapToSquares', () => {
    test('should map numbers to their squares', () => {
      expect(mapToSquares([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
    });

    test('should handle negative numbers', () => {
      expect(mapToSquares([-2, -1, 0, 1, 2])).toEqual([4, 1, 0, 1, 4]);
    });

    test('should handle empty array', () => {
      expect(mapToSquares([])).toEqual([]);
    });
  });

  describe('sumArray', () => {
    test('should sum all numbers', () => {
      expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should return 0 for empty array', () => {
      expect(sumArray([])).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(sumArray([-1, 1, -2, 2])).toBe(0);
    });
  });

  describe('findGreaterThan', () => {
    test('should find first element greater than threshold', () => {
      expect(findGreaterThan([1, 5, 10, 15], 7)).toBe(10);
    });

    test('should return undefined when no element found', () => {
      expect(findGreaterThan([1, 2, 3], 10)).toBeUndefined();
    });
  });

  describe('allPositive', () => {
    test('should return true when all positive', () => {
      expect(allPositive([1, 2, 3, 4])).toBe(true);
    });

    test('should return false when some negative', () => {
      expect(allPositive([1, -2, 3, 4])).toBe(false);
    });

    test('should return false when zero present', () => {
      expect(allPositive([1, 0, 3])).toBe(false);
    });
  });

  describe('someNegative', () => {
    test('should return true when some negative', () => {
      expect(someNegative([1, -2, 3])).toBe(true);
    });

    test('should return false when all positive', () => {
      expect(someNegative([1, 2, 3])).toBe(false);
    });
  });

  describe('sortAscending', () => {
    test('should sort array in ascending order', () => {
      expect(sortAscending([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
    });

    test('should not modify original array', () => {
      const original = [3, 1, 4];
      sortAscending(original);
      expect(original).toEqual([3, 1, 4]);
    });
  });

  describe('flattenArray', () => {
    test('should flatten nested array', () => {
      expect(flattenArray([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should flatten deeply nested array', () => {
      expect(flattenArray([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    });
  });
});
