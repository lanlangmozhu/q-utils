import { trim, trimLeft, trimRight, normalizeSpace, format } from '@/string/format';

describe('String Formatting Operations', () => {
  describe('trim', () => {
    it('应该正确去除字符串两端的空白字符', () => {
      expect(trim('  Hello World  ')).toBe('Hello World');
      expect(trim('Hello World')).toBe('Hello World');
      expect(trim('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(trim(null)).toBe('');
      expect(trim(undefined)).toBe('');
    });
  });

  describe('trimLeft', () => {
    it('应该正确去除字符串左端的空白字符', () => {
      expect(trimLeft('  Hello World')).toBe('Hello World');
      expect(trimLeft('Hello World')).toBe('Hello World');
      expect(trimLeft('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(trimLeft(null)).toBe('');
      expect(trimLeft(undefined)).toBe('');
    });
  });

  describe('trimRight', () => {
    it('应该正确去除字符串右端的空白字符', () => {
      expect(trimRight('Hello World  ')).toBe('Hello World');
      expect(trimRight('Hello World')).toBe('Hello World');
      expect(trimRight('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(trimRight(null)).toBe('');
      expect(trimRight(undefined)).toBe('');
    });
  });

  describe('normalizeSpace', () => {
    it('应该正确规范化字符串中的空白字符', () => {
      expect(normalizeSpace('  Hello   World  ')).toBe('Hello World');
      expect(normalizeSpace('Hello World')).toBe('Hello World');
      expect(normalizeSpace('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(normalizeSpace(null)).toBe('');
      expect(normalizeSpace(undefined)).toBe('');
    });
  });

  describe('format', () => {
    it('应该正确格式化字符串', () => {
      expect(format('Hello {0} World', 'JavaScript')).toBe('Hello JavaScript World');
      expect(format('Hello {0} {1}', 'JavaScript', 'World')).toBe('Hello JavaScript World');
      expect(format('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(format(null)).toBe('');
      expect(format(undefined)).toBe('');
    });
  });
}); 