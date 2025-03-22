import {
  sortBy,
  sortByMultiple,
  sortWith,
  stableSort
} from '../../src/array/sort';

describe('Array Sort Operations', () => {
  describe('sortBy', () => {
    test('应该根据键进行升序排序', () => {
      const arr = [
        { id: 1, value: 3 },
        { id: 2, value: 1 },
        { id: 3, value: 2 }
      ];
      const result = sortBy(arr, 'value');
      expect(result).toEqual([
        { id: 2, value: 1 },
        { id: 3, value: 2 },
        { id: 1, value: 3 }
      ]);
    });

    test('应该根据键进行降序排序', () => {
      const arr = [
        { id: 1, value: 3 },
        { id: 2, value: 1 },
        { id: 3, value: 2 }
      ];
      const result = sortBy(arr, 'value', 'desc');
      expect(result).toEqual([
        { id: 1, value: 3 },
        { id: 3, value: 2 },
        { id: 2, value: 1 }
      ]);
    });

    test('应该使用比较函数进行排序', () => {
      const arr = [1, 2, 3, 4];
      const result = sortBy(arr, (a, b) => b - a);
      expect(result).toEqual([4, 3, 2, 1]);
    });

    test('应该正确处理空数组', () => {
      expect(sortBy([], 'value')).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(sortBy(null as any, 'value')).toEqual([]);
      expect(sortBy(undefined as any, 'value')).toEqual([]);
    });
  });

  describe('sortByMultiple', () => {
    test('应该根据多个条件进行排序', () => {
      const arr = [
        { name: 'a', age: 20 },
        { name: 'b', age: 18 },
        { name: 'a', age: 18 }
      ];
      const result = sortByMultiple(arr, [
        { key: 'name', order: 'asc' },
        { key: 'age', order: 'desc' }
      ]);
      expect(result).toEqual([
        { name: 'a', age: 20 },
        { name: 'a', age: 18 },
        { name: 'b', age: 18 }
      ]);
    });

    test('应该使用默认升序排序', () => {
      const arr = [
        { name: 'b', age: 20 },
        { name: 'a', age: 20 },
        { name: 'c', age: 20 }
      ];
      const result = sortByMultiple(arr, [{ key: 'name' }]);
      expect(result).toEqual([
        { name: 'a', age: 20 },
        { name: 'b', age: 20 },
        { name: 'c', age: 20 }
      ]);
    });

    test('应该正确处理空数组', () => {
      expect(sortByMultiple([], [])).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(sortByMultiple(null as any, [])).toEqual([]);
      expect(sortByMultiple(undefined as any, [])).toEqual([]);
    });
  });

  describe('sortWith', () => {
    test('应该使用自定义比较函数进行排序', () => {
      const arr = [1, 2, 3, 4];
      const result = sortWith(arr, (a, b) => b - a);
      expect(result).toEqual([4, 3, 2, 1]);
    });

    test('应该正确处理空数组', () => {
      expect(sortWith([], (a, b) => a - b)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(sortWith(null as any, (a, b) => a - b)).toEqual([]);
      expect(sortWith(undefined as any, (a, b) => a - b)).toEqual([]);
    });
  });

  describe('stableSort', () => {
    test('应该保持相等元素的原始顺序', () => {
      const arr = [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 }
      ];
      const result = stableSort(arr, (a, b) => a.value - b.value);
      expect(result).toEqual([
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 }
      ]);
    });

    test('应该正确处理空数组', () => {
      expect(stableSort([], (a, b) => a - b)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(stableSort(null as any, (a, b) => a - b)).toEqual([]);
      expect(stableSort(undefined as any, (a, b) => a - b)).toEqual([]);
    });
  });
}); 