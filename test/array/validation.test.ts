import {
  isValid,
  isEqual,
  allMatch,
  anyMatch,
  noneMatch
} from '../../src/array/validate';

describe('数组验证工具函数', () => {
  describe('isValid', () => {
    it('应该正确验证有效数组', () => {
      expect(isValid([1, 2, 3])).toBe(true);
      expect(isValid(['a', 'b', 'c'])).toBe(true);
      expect(isValid([true, false])).toBe(true);
    });

    it('应该正确验证无效数组', () => {
      expect(isValid([])).toBe(false);
      expect(isValid(null as any)).toBe(false);
      expect(isValid(undefined as any)).toBe(false);
      expect(isValid('not an array' as any)).toBe(false);
    });
  });

  describe('isEqual', () => {
    it('应该正确比较基本类型数组', () => {
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(isEqual(['a', 'b'], ['a', 'b'])).toBe(true);
      expect(isEqual([true, false], [true, false])).toBe(true);
    });

    it('应该正确比较对象数组', () => {
      const arr1 = [{ id: 1 }, { id: 2 }];
      const arr2 = [{ id: 1 }, { id: 2 }];
      const arr3 = [{ id: 1 }, { id: 3 }];

      expect(isEqual(arr1, arr2, (a, b) => a.id === b.id)).toBe(true);
      expect(isEqual(arr1, arr3, (a, b) => a.id === b.id)).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isEqual(null as any, [1, 2])).toBe(false);
      expect(isEqual([1, 2], null as any)).toBe(false);
      expect(isEqual(null as any, null as any)).toBe(false);
    });

    it('应该处理长度不同的数组', () => {
      expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
      expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    });
  });

  describe('allMatch', () => {
    it('应该正确检查所有元素是否满足条件', () => {
      expect(allMatch([1, 2, 3], n => n > 0)).toBe(true);
      expect(allMatch([2, 4, 6], n => n % 2 === 0)).toBe(true);
      expect(allMatch([1, 2, 3], n => n > 2)).toBe(false);
    });

    it('应该处理空数组', () => {
      expect(allMatch([], n => n > 0)).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(allMatch(null as any, n => n > 0)).toBe(false);
      expect(allMatch(undefined as any, n => n > 0)).toBe(false);
    });
  });

  describe('anyMatch', () => {
    it('应该正确检查是否存在满足条件的元素', () => {
      expect(anyMatch([1, 2, 3], n => n === 2)).toBe(true);
      expect(anyMatch([1, 2, 3], n => n > 2)).toBe(true);
      expect(anyMatch([1, 2, 3], n => n > 3)).toBe(false);
    });

    it('应该处理空数组', () => {
      expect(anyMatch([], n => n > 0)).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(anyMatch(null as any, n => n > 0)).toBe(false);
      expect(anyMatch(undefined as any, n => n > 0)).toBe(false);
    });
  });

  describe('noneMatch', () => {
    it('应该正确检查是否没有元素满足条件', () => {
      expect(noneMatch([1, 2, 3], n => n < 0)).toBe(true);
      expect(noneMatch([1, 2, 3], n => n === 2)).toBe(false);
      expect(noneMatch([1, 2, 3], n => n > 0)).toBe(false);
    });

    it('应该处理空数组', () => {
      expect(noneMatch([], n => n > 0)).toBe(true);
    });

    it('应该处理无效输入', () => {
      expect(noneMatch(null as any, n => n > 0)).toBe(true);
      expect(noneMatch(undefined as any, n => n > 0)).toBe(true);
    });
  });
}); 