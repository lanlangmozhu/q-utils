import { count, frequency, getNumbers, getLetters } from '../../src/string/stats';

describe('String Statistics Operations', () => {
  describe('count', () => {
    it('应该正确统计子字符串出现次数', () => {
      expect(count('Hello World World', 'World')).toBe(2);
      expect(count('aaa', 'aa')).toBe(2);
      expect(count('Hello World', '')).toBe(0);
      expect(count('', 'World')).toBe(0);
    });

    it('应该处理无效输入', () => {
      expect(count(null, 'World')).toBe(0);
      expect(count(undefined, 'World')).toBe(0);
    });
  });

  describe('frequency', () => {
    it('应该正确统计字符出现频率', () => {
      expect(frequency('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
      expect(frequency('aaa')).toEqual({ a: 3 });
      expect(frequency('')).toEqual({});
    });

    it('应该处理无效输入', () => {
      expect(frequency(null)).toEqual({});
      expect(frequency(undefined)).toEqual({});
    });
  });

  describe('getNumbers', () => {
    it('应该正确获取字符串中的数字', () => {
      expect(getNumbers('abc123def456')).toEqual([123, 456]);
      expect(getNumbers('1.23, 4.56')).toEqual([1.23, 4.56]);
      expect(getNumbers('-123, 456')).toEqual([-123, 456]);
      expect(getNumbers('')).toEqual([]);
    });

    it('应该处理无效输入', () => {
      expect(getNumbers(null)).toEqual([]);
      expect(getNumbers(undefined)).toEqual([]);
    });
  });

  describe('getLetters', () => {
    it('应该正确获取字符串中的字母', () => {
      expect(getLetters('abc123def456')).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
      expect(getLetters('Hello World')).toEqual(['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']);
      expect(getLetters('')).toEqual([]);
    });

    it('应该处理无效输入', () => {
      expect(getLetters(null)).toEqual([]);
      expect(getLetters(undefined)).toEqual([]);
    });
  });
}); 