import { isEmpty, isNotEmpty, length, reverse, repeat } from '../../src/string/basic';

describe('String Basic Operations', () => {
  describe('isEmpty', () => {
    it('应该正确判断空字符串', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('应该正确判断非空字符串', () => {
      expect(isEmpty(' ')).toBe(false);
      expect(isEmpty('0')).toBe(false);
      expect(isEmpty('false')).toBe(false);
    });
  });

  describe('isNotEmpty', () => {
    it('应该正确判断空字符串', () => {
      expect(isNotEmpty('')).toBe(false);
      expect(isNotEmpty(null)).toBe(false);
      expect(isNotEmpty(undefined)).toBe(false);
    });

    it('应该正确判断非空字符串', () => {
      expect(isNotEmpty(' ')).toBe(true);
      expect(isNotEmpty('0')).toBe(true);
      expect(isNotEmpty('false')).toBe(true);
    });
  });

  describe('length', () => {
    it('应该正确计算字符串长度', () => {
      expect(length('hello')).toBe(5);
      expect(length('')).toBe(0);
      expect(length('你好')).toBe(2);
    });

    it('应该处理无效输入', () => {
      expect(length(null)).toBe(0);
      expect(length(undefined)).toBe(0);
    });
  });

  describe('reverse', () => {
    it('应该正确反转字符串', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('')).toBe('');
      expect(reverse('你好')).toBe('好你');
    });

    it('应该处理无效输入', () => {
      expect(reverse(null)).toBe('');
      expect(reverse(undefined)).toBe('');
    });
  });

  describe('repeat', () => {
    it('应该正确重复字符串', () => {
      expect(repeat('hello', 3)).toBe('hellohellohello');
      expect(repeat('', 3)).toBe('');
      expect(repeat('a', 0)).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(repeat(null, 3)).toBe('');
      expect(repeat(undefined, 3)).toBe('');
      expect(repeat('hello', -1)).toBe('');
    });
  });
}); 