import { capitalize, camelize, dasherize, truncate, escape, unescape, template, format } from '../../src/string';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize first letter of string', () => {
      expect(capitalize('hello world')).toBe('Hello world');
    });
  });

  describe('camelize', () => {
    it('should convert hyphenated string to camelCase', () => {
      expect(camelize('background-color')).toBe('backgroundColor');
    });
  });

  describe('dasherize', () => {
    it('should convert camelCase to hyphenated string', () => {
      expect(dasherize('backgroundColor')).toBe('background-color');
    });
  });

  describe('truncate', () => {
    it('should truncate string with ellipsis', () => {
      expect(truncate('这是一段很长的文字需要被截断', 10)).toBe('这是一段很...');
    });
  });

  describe('escape', () => {
    it('should escape HTML special characters', () => {
      expect(escape('<div>text</div>')).toBe('&lt;div&gt;text&lt;/div&gt;');
    });
  });

  describe('unescape', () => {
    it('should unescape HTML entities', () => {
      expect(unescape('&lt;div&gt;text&lt;/div&gt;')).toBe('<div>text</div>');
    });
  });

  describe('template', () => {
    it('should replace template variables', () => {
      const str = 'Hello, ${name}!';
      expect(template(str, { name: 'Alice' })).toBe('Hello, Alice!');
    });
  });

  describe('format', () => {
    it('should format string with named parameters', () => {
      expect(format('Hello, {name}!', { name: 'Alice' })).toBe('Hello, Alice!');
    });
  });
}); 