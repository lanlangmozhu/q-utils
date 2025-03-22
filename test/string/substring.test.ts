import { truncate, padStart, padEnd, left, right, isChinese } from '../../src/string/substring';

describe('String Substring and Padding Operations', () => {
  describe('truncate', () => {
    it('应该正确截断字符串', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
      expect(truncate('Hello World', 8, '...')).toBe('Hello...');
      expect(truncate('Hello World', 20)).toBe('Hello World');
      expect(truncate('', 5)).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(truncate(null, 5)).toBe('');
      expect(truncate(undefined, 5)).toBe('');
      expect(truncate('Hello', -1)).toBe('');
    });
  });

  describe('padStart', () => {
    it('应该正确在开头填充字符串', () => {
      expect(padStart('123', 5, '0')).toBe('00123');
      expect(padStart('123', 5)).toBe('  123');
      expect(padStart('123', 3)).toBe('123');
      expect(padStart('', 3, '0')).toBe('000');
    });

    it('应该处理无效输入', () => {
      expect(padStart(null, 5, '0')).toBe('');
      expect(padStart(undefined, 5, '0')).toBe('');
      expect(padStart('123', -1, '0')).toBe('123');
    });
  });

  describe('padEnd', () => {
    it('应该正确在结尾填充字符串', () => {
      expect(padEnd('123', 5, '0')).toBe('12300');
      expect(padEnd('123', 5)).toBe('123  ');
      expect(padEnd('123', 3)).toBe('123');
      expect(padEnd('', 3, '0')).toBe('000');
    });

    it('应该处理无效输入', () => {
      expect(padEnd(null, 5, '0')).toBe('');
      expect(padEnd(undefined, 5, '0')).toBe('');
      expect(padEnd('123', -1, '0')).toBe('123');
    });
  });

  describe('left', () => {
    it('应该正确获取左侧字符', () => {
      expect(left('Hello World', 5)).toBe('Hello');
      expect(left('Hello', 10)).toBe('Hello');
      expect(left('', 5)).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(left(null, 5)).toBe('');
      expect(left(undefined, 5)).toBe('');
      expect(left('Hello', -1)).toBe('');
    });
  });

  describe('right', () => {
    it('应该正确获取右侧字符', () => {
      expect(right('Hello World', 5)).toBe('World');
      expect(right('Hello', 10)).toBe('Hello');
      expect(right('', 5)).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(right(null, 5)).toBe('');
      expect(right(undefined, 5)).toBe('');
      expect(right('Hello', -1)).toBe('');
    });
  });

  describe('isChinese', () => {
    it('应该正确检测中文字符', () => {
      expect(isChinese('你好')).toBe(true);
      expect(isChinese('Hello')).toBe(false);
      expect(isChinese('你好World')).toBe(true);
      expect(isChinese('')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isChinese(null)).toBe(false);
      expect(isChinese(undefined)).toBe(false);
    });
  });
}); 