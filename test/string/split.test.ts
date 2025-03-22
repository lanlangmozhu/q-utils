import { split, join, splitByLength, splitLines } from '../../src/string/split';

describe('String Splitting and Joining Operations', () => {
  describe('split', () => {
    it('应该正确分割字符串', () => {
      expect(split('Hello World', ' ')).toEqual(['Hello', 'World']);
      expect(split('a,b,c', ',')).toEqual(['a', 'b', 'c']);
      expect(split('abc', '')).toEqual(['a', 'b', 'c']);
      expect(split('', ',')).toEqual(['']);
    });

    it('应该处理无效输入', () => {
      expect(split(null, ',')).toEqual([]);
      expect(split(undefined, ',')).toEqual([]);
    });
  });

  describe('join', () => {
    it('应该正确合并字符串数组', () => {
      expect(join(['Hello', 'World'], ' ')).toBe('Hello World');
      expect(join(['a', 'b', 'c'], ',')).toBe('a,b,c');
      expect(join([''], ',')).toBe('');
      expect(join([], ',')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(join(null, ',')).toBe('');
      expect(join(undefined, ',')).toBe('');
    });
  });

  describe('splitByLength', () => {
    it('应该正确按长度分割字符串', () => {
      expect(splitByLength('Hello World', 5)).toEqual(['Hello', ' Worl', 'd']);
      expect(splitByLength('123456', 2)).toEqual(['12', '34', '56']);
      expect(splitByLength('abc', 1)).toEqual(['a', 'b', 'c']);
      expect(splitByLength('', 2)).toEqual([]);
    });

    it('应该处理无效输入', () => {
      expect(splitByLength(null, 2)).toEqual([]);
      expect(splitByLength(undefined, 2)).toEqual([]);
    });
  });

  describe('splitLines', () => {
    it('应该正确按行分割字符串', () => {
      expect(splitLines('Hello\nWorld')).toEqual(['Hello', 'World']);
      expect(splitLines('Hello\r\nWorld')).toEqual(['Hello', 'World']);
      expect(splitLines('Hello\n\nWorld')).toEqual(['Hello', '', 'World']);
      expect(splitLines('')).toEqual(['']);
    });

    it('应该处理无效输入', () => {
      expect(splitLines(null)).toEqual([]);
      expect(splitLines(undefined)).toEqual([]);
    });
  });
}); 