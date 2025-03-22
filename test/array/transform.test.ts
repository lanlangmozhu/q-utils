import {
  toObject,
  toMap,
  toSet,
  toString
} from '../../src/array/transform';

describe('Array Transform Operations', () => {
  describe('toObject', () => {
    test('应该正确将数组转换为对象', () => {
      const arr = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' }
      ];
      const result = toObject(arr, item => item.id, item => item.name);
      expect(result).toEqual({
        1: 'a',
        2: 'b'
      });
    });

    test('应该正确处理空数组', () => {
      expect(toObject([], item => item, item => item)).toEqual({});
    });

    test('应该正确处理非数组输入', () => {
      expect(toObject(null as any, item => item, item => item)).toEqual({});
      expect(toObject(undefined as any, item => item, item => item)).toEqual({});
    });
  });

  describe('toMap', () => {
    test('应该正确将数组转换为Map', () => {
      const arr = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' }
      ];
      const result = toMap(arr, item => item.id, item => item.name);
      expect(result).toEqual(new Map([
        [1, 'a'],
        [2, 'b']
      ]));
    });

    test('应该正确处理空数组', () => {
      expect(toMap([], item => item, item => item)).toEqual(new Map());
    });

    test('应该正确处理非数组输入', () => {
      expect(toMap(null as any, item => item, item => item)).toEqual(new Map());
      expect(toMap(undefined as any, item => item, item => item)).toEqual(new Map());
    });
  });

  describe('toSet', () => {
    test('应该正确将数组转换为Set', () => {
      const arr = [1, 2, 3, 3, 4, 4, 5];
      const result = toSet(arr);
      expect(result).toEqual(new Set([1, 2, 3, 4, 5]));
    });

    test('应该使用转换函数将数组转换为Set', () => {
      const arr = [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' }
      ];
      const result = toSet(arr, item => item.id);
      expect(result).toEqual(new Set([1, 2]));
    });

    test('应该正确处理空数组', () => {
      expect(toSet([])).toEqual(new Set());
    });

    test('应该正确处理非数组输入', () => {
      expect(toSet(null as any)).toEqual(new Set());
      expect(toSet(undefined as any)).toEqual(new Set());
    });
  });

  describe('toString', () => {
    test('应该使用默认分隔符将数组转换为字符串', () => {
      expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    test('应该使用指定分隔符将数组转换为字符串', () => {
      expect(toString([1, 2, 3], '-')).toBe('1-2-3');
    });

    test('应该正确处理空数组', () => {
      expect(toString([])).toBe('');
    });

    test('应该正确处理非数组输入', () => {
      expect(toString(null as any)).toBe('');
      expect(toString(undefined as any)).toBe('');
    });

    test('应该正确处理对象数组', () => {
      const arr = [{ id: 1 }, { id: 2 }];
      expect(toString(arr)).toBe('[object Object],[object Object]');
    });
  });
}); 