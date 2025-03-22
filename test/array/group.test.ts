import {
  groupBy,
  chunkGroups,
  splitIntoGroups
} from '../../src/array/group';

describe('Array Group Operations', () => {
  describe('groupBy', () => {
    test('应该正确按函数分组', () => {
      const result = groupBy([1, 2, 3, 4, 5, 6], n => n % 2 === 0 ? '偶数' : '奇数');
      expect(result).toEqual({
        '偶数': [2, 4, 6],
        '奇数': [1, 3, 5]
      });
    });

    test('应该正确按属性分组', () => {
      const arr = [
        { id: 1, type: 'A' },
        { id: 2, type: 'B' },
        { id: 3, type: 'A' },
        { id: 4, type: 'B' }
      ];
      const result = groupBy(arr, 'type');
      expect(result).toEqual({
        'A': [{ id: 1, type: 'A' }, { id: 3, type: 'A' }],
        'B': [{ id: 2, type: 'B' }, { id: 4, type: 'B' }]
      });
    });

    test('应该正确处理空数组', () => {
      expect(groupBy([], n => n % 2)).toEqual({});
    });

    test('应该正确处理非数组输入', () => {
      expect(groupBy(null as any, n => n % 2)).toEqual({});
      expect(groupBy(undefined as any, n => n % 2)).toEqual({});
    });
  });

  describe('chunkGroups', () => {
    test('应该正确按大小分组', () => {
      expect(chunkGroups([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('应该正确处理大小为1的分组', () => {
      expect(chunkGroups([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    test('应该正确处理空数组', () => {
      expect(chunkGroups([], 2)).toEqual([]);
    });

    test('应该正确处理无效大小', () => {
      expect(chunkGroups([1, 2, 3], 0)).toEqual([]);
      expect(chunkGroups([1, 2, 3], -1)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(chunkGroups(null as any, 2)).toEqual([]);
      expect(chunkGroups(undefined as any, 2)).toEqual([]);
    });
  });

  describe('splitIntoGroups', () => {
    test('应该正确按数量分组', () => {
      expect(splitIntoGroups([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
        [1, 2, 3],
        [4, 5],
        [6, 7]
      ]);
    });

    test('应该正确处理平衡分组', () => {
      expect(splitIntoGroups([1, 2, 3, 4, 5, 6, 7], 3, { balanced: true })).toEqual([
        [1, 4, 7],
        [2, 5],
        [3, 6]
      ]);
    });

    test('应该正确处理空数组', () => {
      expect(splitIntoGroups([], 3)).toEqual([]);
    });

    test('应该正确处理无效数量', () => {
      expect(splitIntoGroups([1, 2, 3], 0)).toEqual([]);
      expect(splitIntoGroups([1, 2, 3], -1)).toEqual([]);
    });

    test('应该正确处理非数组输入', () => {
      expect(splitIntoGroups(null as any, 3)).toEqual([]);
      expect(splitIntoGroups(undefined as any, 3)).toEqual([]);
    });

    test('应该正确处理分组数量大于数组长度的情况', () => {
      expect(splitIntoGroups([1, 2, 3], 5)).toEqual([[1], [2], [3]]);
    });
  });
}); 