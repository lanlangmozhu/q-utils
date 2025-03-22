import { unique, uniqueBy, flatten, shuffle, chunk, intersection, difference, groupBy, sortBy } from '../../src/array';

describe('Array Utils', () => {
  describe('unique', () => {
    it('should remove duplicate values from array', () => {
      expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('uniqueBy', () => {
    it('should remove duplicate objects by property', () => {
      const arr = [{ id: 1 }, { id: 1 }, { id: 2 }];
      expect(uniqueBy(arr, 'id')).toEqual([{ id: 1 }, { id: 2 }]);
    });
  });

  describe('flatten', () => {
    it('should flatten nested arrays', () => {
      expect(flatten([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe('shuffle', () => {
    it('should shuffle array elements', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle([...arr]);
      expect(shuffled).toHaveLength(arr.length);
      expect(shuffled).not.toEqual(arr);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
  });

  describe('intersection', () => {
    it('should return common elements between arrays', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });
  });

  describe('difference', () => {
    it('should return elements in first array not in second array', () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    });
  });

  describe('groupBy', () => {
    it('should group array elements by key', () => {
      const arr = [1, 2, 3, 4];
      const result = groupBy(arr, n => n % 2 === 0 ? 'even' : 'odd');
      expect(result).toEqual({
        even: [2, 4],
        odd: [1, 3]
      });
    });
  });

  describe('sortBy', () => {
    it('should sort array by function', () => {
      expect(sortBy([3, 1, 4, 2], (a, b) => a - b)).toEqual([1, 2, 3, 4]);
    });
  });
}); 