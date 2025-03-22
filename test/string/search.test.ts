import { indexOf, replace, replaceAll, includes, startsWith, endsWith } from '../../src/string/search';

describe('String Search and Replace Operations', () => {
  describe('indexOf', () => {
    it('应该正确查找子字符串位置', () => {
      expect(indexOf('Hello World', 'World')).toBe(6);
      expect(indexOf('Hello World', 'World', 7)).toBe(-1);
      expect(indexOf('Hello World', '')).toBe(0);
      expect(indexOf('', 'World')).toBe(-1);
    });

    it('应该处理无效输入', () => {
      expect(indexOf(null, 'World')).toBe(-1);
      expect(indexOf(undefined, 'World')).toBe(-1);
    });
  });

  describe('replace', () => {
    it('应该正确替换子字符串', () => {
      expect(replace('Hello World', 'World', 'JavaScript')).toBe('Hello JavaScript');
      expect(replace('Hello World', 'World', '')).toBe('Hello ');
      expect(replace('', 'World', 'JavaScript')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(replace(null, 'World', 'JavaScript')).toBe('');
      expect(replace(undefined, 'World', 'JavaScript')).toBe('');
    });
  });

  describe('replaceAll', () => {
    it('应该正确替换所有匹配的子字符串', () => {
      expect(replaceAll('Hello World World', 'World', 'JavaScript')).toBe('Hello JavaScript JavaScript');
      expect(replaceAll('Hello World', 'World', '')).toBe('Hello ');
      expect(replaceAll('', 'World', 'JavaScript')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(replaceAll(null, 'World', 'JavaScript')).toBe('');
      expect(replaceAll(undefined, 'World', 'JavaScript')).toBe('');
    });
  });

  describe('includes', () => {
    it('应该正确检查是否包含子字符串', () => {
      expect(includes('Hello World', 'World')).toBe(true);
      expect(includes('Hello World', '')).toBe(true);
      expect(includes('', 'World')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(includes(null, 'World')).toBe(false);
      expect(includes(undefined, 'World')).toBe(false);
    });
  });

  describe('startsWith', () => {
    it('应该正确检查是否以指定前缀开头', () => {
      expect(startsWith('Hello World', 'Hello')).toBe(true);
      expect(startsWith('Hello World', 'World')).toBe(false);
      expect(startsWith('Hello World', '')).toBe(true);
      expect(startsWith('', 'Hello')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(startsWith(null, 'Hello')).toBe(false);
      expect(startsWith(undefined, 'Hello')).toBe(false);
    });
  });

  describe('endsWith', () => {
    it('应该正确检查是否以指定后缀结尾', () => {
      expect(endsWith('Hello World', 'World')).toBe(true);
      expect(endsWith('Hello World', 'Hello')).toBe(false);
      expect(endsWith('Hello World', '')).toBe(true);
      expect(endsWith('', 'World')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(endsWith(null, 'World')).toBe(false);
      expect(endsWith(undefined, 'World')).toBe(false);
    });
  });
}); 