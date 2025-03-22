import { capitalize, capitalizeWords, camelize, dasherize, toNumber, toBoolean } from '../../src/string/transform';

describe('String Transform Operations', () => {
  describe('capitalize', () => {
    it('应该正确首字母大写', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
    });
  });

  describe('capitalizeWords', () => {
    it('应该正确将每个单词首字母大写', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('hello-world')).toBe('Hello-World');
      expect(capitalizeWords('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(capitalizeWords(null)).toBe('');
      expect(capitalizeWords(undefined)).toBe('');
    });
  });

  describe('camelize', () => {
    it('应该正确转换为驼峰命名', () => {
      expect(camelize('hello-world')).toBe('helloWorld');
      expect(camelize('hello_world')).toBe('helloWorld');
      expect(camelize('hello.world')).toBe('helloWorld');
      expect(camelize('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(camelize(null)).toBe('');
      expect(camelize(undefined)).toBe('');
    });
  });

  describe('dasherize', () => {
    it('应该正确转换为短横线命名', () => {
      expect(dasherize('helloWorld')).toBe('hello-world');
      expect(dasherize('HelloWorld')).toBe('hello-world');
      expect(dasherize('hello_world')).toBe('hello-world');
      expect(dasherize('')).toBe('');
    });

    it('应该处理无效输入', () => {
      expect(dasherize(null)).toBe('');
      expect(dasherize(undefined)).toBe('');
    });
  });

  describe('toNumber', () => {
    it('应该正确转换为数字', () => {
      expect(toNumber('123')).toBe(123);
      expect(toNumber('1.23')).toBe(1.23);
      expect(toNumber('-123')).toBe(-123);
      expect(toNumber('abc', 0)).toBe(0);
    });

    it('应该处理无效输入', () => {
      expect(toNumber(null)).toBe(0);
      expect(toNumber(undefined)).toBe(0);
      expect(toNumber('abc')).toBe(0);
    });
  });

  describe('toBoolean', () => {
    it('应该正确转换为布尔值', () => {
      expect(toBoolean('true')).toBe(true);
      expect(toBoolean('false')).toBe(false);
      expect(toBoolean('')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(toBoolean(null)).toBe(false);
      expect(toBoolean(undefined)).toBe(false);
    });
  });
}); 