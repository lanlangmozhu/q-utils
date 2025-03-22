import { compare, compareIgnoreCase, equals, equalsIgnoreCase, similarity } from '../../src/string/compare';

describe('String Comparison Operations', () => {
  describe('compare', () => {
    it('应该正确比较两个字符串', () => {
      expect(compare('a', 'b')).toBe(-1);
      expect(compare('b', 'a')).toBe(1);
      expect(compare('a', 'a')).toBe(0);
      expect(compare('abc', 'abd')).toBe(-1);
      expect(compare('abd', 'abc')).toBe(1);
      expect(compare('abc', 'abc')).toBe(0);
    });

    it('应该处理无效输入', () => {
      expect(compare(null, 'b')).toBe(0);
      expect(compare('a', null)).toBe(0);
      expect(compare(null, null)).toBe(0);
      expect(compare(undefined, 'b')).toBe(0);
      expect(compare('a', undefined)).toBe(0);
      expect(compare(undefined, undefined)).toBe(0);
    });
  });

  describe('compareIgnoreCase', () => {
    it('应该正确忽略大小写比较两个字符串', () => {
      expect(compareIgnoreCase('a', 'B')).toBe(-1);
      expect(compareIgnoreCase('B', 'a')).toBe(1);
      expect(compareIgnoreCase('a', 'A')).toBe(0);
      expect(compareIgnoreCase('abc', 'ABD')).toBe(-1);
      expect(compareIgnoreCase('ABD', 'abc')).toBe(1);
      expect(compareIgnoreCase('abc', 'ABC')).toBe(0);
    });

    it('应该处理无效输入', () => {
      expect(compareIgnoreCase(null, 'B')).toBe(0);
      expect(compareIgnoreCase('A', null)).toBe(0);
      expect(compareIgnoreCase(null, null)).toBe(0);
      expect(compareIgnoreCase(undefined, 'B')).toBe(0);
      expect(compareIgnoreCase('A', undefined)).toBe(0);
      expect(compareIgnoreCase(undefined, undefined)).toBe(0);
    });
  });

  describe('equals', () => {
    it('应该正确检查两个字符串是否相等', () => {
      expect(equals('hello', 'hello')).toBe(true);
      expect(equals('hello', 'world')).toBe(false);
      expect(equals('', '')).toBe(true);
    });

    it('应该处理无效输入', () => {
      expect(equals(null, 'hello')).toBe(false);
      expect(equals('hello', null)).toBe(false);
      expect(equals(null, null)).toBe(false);
      expect(equals(undefined, 'hello')).toBe(false);
      expect(equals('hello', undefined)).toBe(false);
      expect(equals(undefined, undefined)).toBe(false);
    });
  });

  describe('equalsIgnoreCase', () => {
    it('应该正确忽略大小写检查两个字符串是否相等', () => {
      expect(equalsIgnoreCase('hello', 'HELLO')).toBe(true);
      expect(equalsIgnoreCase('hello', 'world')).toBe(false);
      expect(equalsIgnoreCase('', '')).toBe(true);
    });

    it('应该处理无效输入', () => {
      expect(equalsIgnoreCase(null, 'HELLO')).toBe(false);
      expect(equalsIgnoreCase('hello', null)).toBe(false);
      expect(equalsIgnoreCase(null, null)).toBe(false);
      expect(equalsIgnoreCase(undefined, 'HELLO')).toBe(false);
      expect(equalsIgnoreCase('hello', undefined)).toBe(false);
      expect(equalsIgnoreCase(undefined, undefined)).toBe(false);
    });
  });

  describe('similarity', () => {
    it('应该正确计算两个字符串的相似度', () => {
      expect(similarity('hello', 'hallo')).toBeCloseTo(0.8, 1);
      expect(similarity('world', 'word')).toBeCloseTo(0.8, 1);
      expect(similarity('abc', 'abc')).toBe(1);
      expect(similarity('', '')).toBe(1);
    });

    it('应该处理无效输入', () => {
      expect(similarity(null, 'hallo')).toBe(0);
      expect(similarity('hello', null)).toBe(0);
      expect(similarity(null, null)).toBe(0);
      expect(similarity(undefined, 'hallo')).toBe(0);
      expect(similarity('hello', undefined)).toBe(0);
      expect(similarity(undefined, undefined)).toBe(0);
    });
  });
}); 