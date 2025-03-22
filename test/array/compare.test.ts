import {
  difference,
  intersection,
  union,
  includes
} from '../../src/array/compare';

describe('Array Compare Operations', () => {
  describe('difference', () => {
    test('应该正确计算数组差集', () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    });

    test('应该正确处理空数组', () => {
      expect(difference([], [1, 2, 3])).toEqual([]);
      expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
      expect(difference([], [])).toEqual([]);
    });

    test('应该正确处理自定义比较函数', () => {
      const compareFn = (a: { id: number }, b: { id: number }) => a.id === b.id;
      const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const arr2 = [{ id: 2 }, { id: 3 }, { id: 4 }];
      
      expect(difference(arr1, arr2, compareFn)).toEqual([{ id: 1 }]);
    });

    test('应该正确处理非数组输入', () => {
      expect(difference(null as any, [1, 2, 3])).toEqual([]);
      expect(difference([1, 2, 3], null as any)).toEqual([]);
      expect(difference(null as any, null as any)).toEqual([]);
    });
  });

  describe('intersection', () => {
    test('应该正确计算数组交集', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    test('应该正确处理空数组', () => {
      expect(intersection([], [1, 2, 3])).toEqual([]);
      expect(intersection([1, 2, 3], [])).toEqual([]);
      expect(intersection([], [])).toEqual([]);
    });

    test('应该正确处理自定义比较函数', () => {
      const compareFn = (a: { id: number }, b: { id: number }) => a.id === b.id;
      const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const arr2 = [{ id: 2 }, { id: 3 }, { id: 4 }];
      
      expect(intersection(arr1, arr2, compareFn)).toEqual([{ id: 2 }, { id: 3 }]);
    });

    test('应该正确处理非数组输入', () => {
      expect(intersection(null as any, [1, 2, 3])).toEqual([]);
      expect(intersection([1, 2, 3], null as any)).toEqual([]);
      expect(intersection(null as any, null as any)).toEqual([]);
    });
  });

  describe('union', () => {
    test('应该正确计算数组并集', () => {
      expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('应该正确处理空数组', () => {
      expect(union([], [1, 2, 3])).toEqual([1, 2, 3]);
      expect(union([1, 2, 3], [])).toEqual([1, 2, 3]);
      expect(union([], [])).toEqual([]);
    });

    test('应该正确处理自定义比较函数', () => {
      const compareFn = (a: { id: number }, b: { id: number }) => a.id === b.id;
      const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const arr2 = [{ id: 2 }, { id: 3 }, { id: 4 }];
      
      expect(union(arr1, arr2, compareFn)).toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ]);
    });

    test('应该正确处理非数组输入', () => {
      expect(union(null as any, [1, 2, 3])).toEqual([]);
      expect(union([1, 2, 3], null as any)).toEqual([]);
      expect(union(null as any, null as any)).toEqual([]);
    });
  });

  describe('includes', () => {
    test('应该正确检查子数组', () => {
      expect(includes([1, 2, 3, 4], [2, 3])).toBe(true);
      expect(includes([1, 2, 3, 4], [3, 4])).toBe(true);
      expect(includes([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
    });

    test('应该正确处理不包含的情况', () => {
      expect(includes([1, 2, 3, 4], [2, 4])).toBe(false);
      expect(includes([1, 2, 3, 4], [4, 5])).toBe(false);
      expect(includes([1, 2, 3, 4], [5, 6])).toBe(false);
    });

    test('应该正确处理空数组', () => {
      expect(includes([], [])).toBe(true);
      expect(includes([1, 2, 3], [])).toBe(true);
      expect(includes([], [1, 2, 3])).toBe(false);
    });

    test('应该正确处理自定义比较函数', () => {
      const compareFn = (a: { id: number }, b: { id: number }) => a.id === b.id;
      const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
      const subArr = [{ id: 2 }, { id: 3 }];
      
      expect(includes(arr, subArr, compareFn)).toBe(true);
    });

    test('应该正确处理非数组输入', () => {
      expect(includes(null as any, [1, 2, 3])).toBe(false);
      expect(includes([1, 2, 3], null as any)).toBe(false);
      expect(includes(null as any, null as any)).toBe(false);
    });
  });
}); 