import {
  unique,
  uniqueBy
} from '../../src/array/unique';

describe('Array Unique Operations', () => {
  describe('unique', () => {
    test('应该正确去除数组中的重复元素', () => {
      expect(unique([1, 2, 1, 3, 2, 1])).toEqual([1, 2, 3]);
    });

    test('应该正确处理对象数组', () => {
      const arr = [{ id: 1 }, { id: 1 }, { id: 2 }];
      expect(unique(arr)).toEqual([{ id: 1 }, { id: 1 }, { id: 2 }]);
    });

    test('应该正确处理空数组', () => {
      expect(unique([])).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(unique(null as any)).toEqual([]);
      expect(unique(undefined as any)).toEqual([]);
    });
  });

  describe('uniqueBy', () => {
    test('应该根据键去除数组中的重复元素', () => {
      const arr = [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 }
      ];
      expect(uniqueBy(arr, 'value')).toEqual([
        { id: 1, value: 1 },
        { id: 3, value: 2 }
      ]);
    });

    test('应该使用比较函数去除数组中的重复元素', () => {
      const arr = [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 }
      ];
      expect(uniqueBy(arr, (a, b) => a.value === b.value)).toEqual([
        { id: 1, value: 1 },
        { id: 3, value: 2 }
      ]);
    });

    test('应该正确处理空数组', () => {
      expect(uniqueBy([], 'value')).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(uniqueBy(null as any, 'value')).toEqual([]);
      expect(uniqueBy(undefined as any, 'value')).toEqual([]);
    });

    test('应该正确处理不存在的键', () => {
      const arr = [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 }
      ];
      expect(uniqueBy(arr, 'nonexistent' as any)).toEqual(arr);
    });
  });
}); 