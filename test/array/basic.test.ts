import {
  isEmpty,
  first,
  last,
  range,
  get,
  chunk,
  flatten
} from '../../src/array/basic';

describe('Array Basic Operations', () => {
  describe('isEmpty', () => {
    test('应该正确判断空数组', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('应该正确判断非空数组', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('应该正确处理非数组输入', () => {
      expect(isEmpty(null as any)).toBe(true);
      expect(isEmpty(undefined as any)).toBe(true);
      expect(isEmpty('not an array' as any)).toBe(true);
    });
  });

  describe('first', () => {
    test('应该正确获取第一个元素', () => {
      expect(first([1, 2, 3])).toBe(1);
    });

    test('应该正确处理空数组', () => {
      expect(first([])).toBeUndefined();
    });

    test('应该正确处理非数组输入', () => {
      expect(first(null as any)).toBeUndefined();
      expect(first(undefined as any)).toBeUndefined();
      expect(first('not an array' as any)).toBeUndefined();
    });
  });

  describe('last', () => {
    test('应该正确获取最后一个元素', () => {
      expect(last([1, 2, 3])).toBe(3);
    });

    test('应该正确处理空数组', () => {
      expect(last([])).toBeUndefined();
    });

    test('应该正确处理非数组输入', () => {
      expect(last(null as any)).toBeUndefined();
      expect(last(undefined as any)).toBeUndefined();
      expect(last('not an array' as any)).toBeUndefined();
    });
  });

  describe('range', () => {
    test('应该正确获取指定范围的元素', () => {
      expect(range([1, 2, 3, 4, 5], 1, 3)).toEqual([2, 3]);
    });

    test('应该正确处理空数组', () => {
      expect(range([], 0, 1)).toEqual([]);
    });

    test('应该正确处理无效范围', () => {
      expect(range([1, 2, 3], -1, 2)).toEqual([]);
      expect(range([1, 2, 3], 2, 1)).toEqual([]);
      expect(range([1, 2, 3], 0, 4)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(range(null as any, 0, 1)).toEqual([]);
      expect(range(undefined as any, 0, 1)).toEqual([]);
      expect(range('not an array' as any, 0, 1)).toEqual([]);
    });
  });

  describe('get', () => {
    test('应该正确获取指定索引的元素', () => {
      expect(get([1, 2, 3], 1)).toBe(2);
    });

    test('应该正确处理默认值', () => {
      expect(get([1, 2, 3], 5, 0)).toBe(0);
    });

    test('应该正确处理空数组', () => {
      expect(get([], 0)).toBeUndefined();
    });

    test('应该正确处理无效索引', () => {
      expect(get([1, 2, 3], -1)).toBeUndefined();
      expect(get([1, 2, 3], 3)).toBeUndefined();
    });

    test('应该正确处理非数组输入', () => {
      expect(get(null as any, 0)).toBeUndefined();
      expect(get(undefined as any, 0)).toBeUndefined();
      expect(get('not an array' as any, 0)).toBeUndefined();
    });
  });

  describe('chunk', () => {
    test('应该正确分割数组', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('应该正确处理大小为1的分块', () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    test('应该正确处理空数组', () => {
      expect(chunk([], 2)).toEqual([]);
    });

    test('应该正确处理无效大小', () => {
      expect(chunk([1, 2, 3], 0)).toEqual([]);
      expect(chunk([1, 2, 3], -1)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(chunk(null as any, 2)).toEqual([]);
      expect(chunk(undefined as any, 2)).toEqual([]);
      expect(chunk('not an array' as any, 2)).toEqual([]);
    });
  });

  describe('flatten', () => {
    test('应该正确扁平化数组', () => {
      expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('应该正确处理指定深度的扁平化', () => {
      expect(flatten([1, [2, 3], [4, [5, 6]]], 1)).toEqual([1, 2, 3, 4, [5, 6]]);
    });

    test('应该正确处理空数组', () => {
      expect(flatten([])).toEqual([]);
    });

    test('应该正确处理非数组元素', () => {
      expect(flatten([1, 'string', true, null, undefined])).toEqual([1, 'string', true, null, undefined]);
    });

    test('应该正确处理非数组输入', () => {
      expect(flatten(null as any)).toBeNull();
      expect(flatten(undefined as any)).toBeUndefined();
      expect(flatten('not an array' as any)).toBe('not an array');
    });
  });
}); 