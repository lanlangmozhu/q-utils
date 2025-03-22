import {
  randomItem,
  randomItems,
  shuffle,
  randomRange
} from '../../src/array/random';

describe('Array Random Operations', () => {
  describe('randomItem', () => {
    test('应该从数组中随机获取一个元素', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = randomItem(arr);
      expect(arr).toContain(result);
    });

    test('应该正确处理空数组', () => {
      expect(randomItem([])).toBeUndefined();
    });

    test('应该正确处理非数组输入', () => {
      expect(randomItem(null as any)).toBeUndefined();
      expect(randomItem(undefined as any)).toBeUndefined();
    });
  });

  describe('randomItems', () => {
    test('应该从数组中随机获取指定数量的元素', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = randomItems(arr, 3);
      expect(result).toHaveLength(3);
      result.forEach(item => {
        expect(arr).toContain(item);
      });
    });

    test('应该正确处理无效的数量', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(randomItems(arr, 0)).toEqual([]);
      expect(randomItems(arr, 6)).toEqual([]);
      expect(randomItems(arr, -1)).toEqual([]);
    });

    test('应该正确处理空数组', () => {
      expect(randomItems([], 3)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(randomItems(null as any, 3)).toEqual([]);
      expect(randomItems(undefined as any, 3)).toEqual([]);
    });
  });

  describe('shuffle', () => {
    test('应该随机打乱数组', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = shuffle(arr);
      expect(result).toHaveLength(arr.length);
      expect(result).not.toEqual(arr);
      expect([...result].sort()).toEqual([...arr].sort());
    });

    test('应该正确处理空数组', () => {
      expect(shuffle([])).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(shuffle(null as any)).toEqual([]);
      expect(shuffle(undefined as any)).toEqual([]);
    });
  });

  describe('randomRange', () => {
    test('应该从指定范围内随机获取一个元素', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = randomRange(arr, 1, 3);
      expect([2, 3, 4]).toContain(result);
    });

    test('应该正确处理无效的范围', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(randomRange(arr, -1, 3)).toBeUndefined();
      expect(randomRange(arr, 1, 6)).toBeUndefined();
      expect(randomRange(arr, 3, 1)).toBeUndefined();
    });

    test('应该正确处理空数组', () => {
      expect(randomRange([], 0, 1)).toBeUndefined();
    });

    test('应该正确处理非数组输入', () => {
      expect(randomRange(null as any, 0, 1)).toBeUndefined();
      expect(randomRange(undefined as any, 0, 1)).toBeUndefined();
    });
  });
}); 