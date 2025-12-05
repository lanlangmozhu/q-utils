import { isNumeric, isAlpha, isAlphanumeric, isEmail, isUrl, isPhone } from '@/string/validate';

describe('String Validation Operations', () => {
  describe('isNumeric', () => {
    it('应该正确验证数字字符串', () => {
      expect(isNumeric('123')).toBe(true);
      expect(isNumeric('12.34')).toBe(true);
      expect(isNumeric('-123')).toBe(true);
      expect(isNumeric('abc')).toBe(false);
      expect(isNumeric('123abc')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isNumeric('')).toBe(false);
      expect(isNumeric(null)).toBe(false);
      expect(isNumeric(undefined)).toBe(false);
    });
  });

  describe('isAlpha', () => {
    it('应该正确验证字母字符串', () => {
      expect(isAlpha('abc')).toBe(true);
      expect(isAlpha('ABC')).toBe(true);
      expect(isAlpha('abcABC')).toBe(true);
      expect(isAlpha('123')).toBe(false);
      expect(isAlpha('abc123')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isAlpha('')).toBe(false);
      expect(isAlpha(null)).toBe(false);
      expect(isAlpha(undefined)).toBe(false);
    });
  });

  describe('isAlphanumeric', () => {
    it('应该正确验证字母数字字符串', () => {
      expect(isAlphanumeric('abc123')).toBe(true);
      expect(isAlphanumeric('abc')).toBe(true);
      expect(isAlphanumeric('123')).toBe(true);
      expect(isAlphanumeric('abc-123')).toBe(false);
      expect(isAlphanumeric('abc_123')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isAlphanumeric('')).toBe(false);
      expect(isAlphanumeric(null)).toBe(false);
      expect(isAlphanumeric(undefined)).toBe(false);
    });
  });

  describe('isEmail', () => {
    it('应该正确验证邮箱地址', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('test.name@example.com')).toBe(true);
      expect(isEmail('test+name@example.com')).toBe(true);
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail('test@')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isEmail('')).toBe(false);
      expect(isEmail(null)).toBe(false);
      expect(isEmail(undefined)).toBe(false);
    });
  });

  describe('isUrl', () => {
    it('应该正确验证URL', () => {
      expect(isUrl('https://example.com')).toBe(true);
      expect(isUrl('http://example.com')).toBe(true);
      expect(isUrl('ftp://example.com')).toBe(true);
      expect(isUrl('invalid-url')).toBe(false);
      expect(isUrl('http://')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isUrl('')).toBe(false);
      expect(isUrl(null)).toBe(false);
      expect(isUrl(undefined)).toBe(false);
    });
  });

  describe('isPhone', () => {
    it('应该正确验证手机号', () => {
      expect(isPhone('13812345678')).toBe(true);
      expect(isPhone('138-1234-5678')).toBe(true);
      expect(isPhone('138 1234 5678')).toBe(true);
      expect(isPhone('12345678901')).toBe(false);
      expect(isPhone('1381234567')).toBe(false);
    });

    it('应该处理无效输入', () => {
      expect(isPhone('')).toBe(false);
      expect(isPhone(null)).toBe(false);
      expect(isPhone(undefined)).toBe(false);
    });
  });
}); 