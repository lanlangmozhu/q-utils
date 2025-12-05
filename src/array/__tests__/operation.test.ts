import {
  move,
  rotate,
  swap
} from '@/array/operation';

describe('Array Operations', () => {
  describe('move', () => {
    test('应该正确移动数组元素', () => {
      expect(move([1, 2, 3, 4], 1, 3)).toEqual([1, 3, 4, 2]);
    });

    test('应该正确处理边界情况', () => {
      expect(move([1, 2, 3], 0, 2)).toEqual([2, 3, 1]);
      expect(move([1, 2, 3], 2, 0)).toEqual([3, 1, 2]);
    });

    test('应该正确处理相同位置', () => {
      expect(move([1, 2, 3], 1, 1)).toEqual([1, 2, 3]);
    });

    test('应该正确处理空数组', () => {
      expect(move([], 0, 1)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(move(null as any, 0, 1)).toEqual([]);
      expect(move(undefined as any, 0, 1)).toEqual([]);
    });
  });

  describe('rotate', () => {
    test('应该正确向右旋转数组', () => {
      expect(rotate([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
    });

    test('应该正确向左旋转数组', () => {
      expect(rotate([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]);
    });

    test('应该正确处理多次旋转', () => {
      expect(rotate([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
      expect(rotate([1, 2, 3, 4], -2)).toEqual([3, 4, 1, 2]);
    });

    test('应该正确处理旋转次数大于数组长度的情况', () => {
      expect(rotate([1, 2, 3], 4)).toEqual([3, 1, 2]);
      expect(rotate([1, 2, 3], -4)).toEqual([2, 3, 1]);
    });

    test('应该正确处理空数组', () => {
      expect(rotate([], 1)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(rotate(null as any, 1)).toEqual([]);
      expect(rotate(undefined as any, 1)).toEqual([]);
    });
  });

  describe('swap', () => {
    test('应该正确交换数组元素', () => {
      expect(swap([1, 2, 3, 4], 0, 3)).toEqual([4, 2, 3, 1]);
    });

    test('应该正确处理相邻元素', () => {
      expect(swap([1, 2, 3], 0, 1)).toEqual([2, 1, 3]);
    });

    test('应该正确处理相同位置', () => {
      expect(swap([1, 2, 3], 1, 1)).toEqual([1, 2, 3]);
    });

    test('应该正确处理边界情况', () => {
      expect(swap([1, 2, 3], 0, 2)).toEqual([3, 2, 1]);
    });

    test('应该正确处理空数组', () => {
      expect(swap([], 0, 1)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(swap(null as any, 0, 1)).toEqual([]);
      expect(swap(undefined as any, 0, 1)).toEqual([]);
    });
  });
}); 