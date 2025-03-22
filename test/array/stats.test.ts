import {
  count,
  stats
} from '../../src/array/stats';

describe('Array Statistics Operations', () => {
  describe('count', () => {
    test('应该正确统计数组元素出现次数', () => {
      const arr = [1, 2, 1, 3, 2, 1];
      const result = count(arr);
      expect(result).toEqual({
        '1': 3,
        '2': 2,
        '3': 1
      });
    });

    test('应该正确处理空数组', () => {
      expect(count([])).toEqual({});
    });

    test('应该正确处理非数组输入', () => {
      expect(count(null as any)).toEqual({});
      expect(count(undefined as any)).toEqual({});
    });

    test('应该正确处理对象数组', () => {
      const arr = [{ id: 1 }, { id: 1 }, { id: 2 }];
      const result = count(arr);
      expect(result).toEqual({
        '[object Object]': 3
      });
    });
  });

  describe('stats', () => {
    test('应该正确计算数组的统计信息', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = stats(arr);
      expect(result).toEqual({
        sum: 15,
        avg: 3,
        min: 1,
        max: 5,
        length: 5
      });
    });

    test('应该正确处理包含负数的数组', () => {
      const arr = [-1, 0, 1, 2, 3];
      const result = stats(arr);
      expect(result).toEqual({
        sum: 5,
        avg: 1,
        min: -1,
        max: 3,
        length: 5
      });
    });

    test('应该正确处理包含小数的数组', () => {
      const arr = [1.1, 2.2, 3.3];
      const result = stats(arr);
      expect(result).toEqual({
        sum: 6.6,
        avg: 2.2,
        min: 1.1,
        max: 3.3,
        length: 3
      });
    });

    test('应该正确处理空数组', () => {
      expect(stats([])).toEqual({
        sum: 0,
        avg: 0,
        min: 0,
        max: 0,
        length: 0
      });
    });

    test('应该正确处理非数组输入', () => {
      expect(stats(null as any)).toEqual({
        sum: 0,
        avg: 0,
        min: 0,
        max: 0,
        length: 0
      });
      expect(stats(undefined as any)).toEqual({
        sum: 0,
        avg: 0,
        min: 0,
        max: 0,
        length: 0
      });
    });
  });
}); 