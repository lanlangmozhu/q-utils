import {
  toBoolean,
  isTruthy,
  isFalsy
} from '../../src/boolean';

describe('布尔值工具函数', () => {
  describe('toBoolean', () => {
    it('应该正确将值转换为布尔值', () => {
      expect(toBoolean(true)).toBe(true);
      expect(toBoolean(false)).toBe(false);
      expect(toBoolean('true')).toBe(true);
      expect(toBoolean('false')).toBe(false);
      expect(toBoolean('1')).toBe(true);
      expect(toBoolean('0')).toBe(false);
      expect(toBoolean(1)).toBe(true);
      expect(toBoolean(0)).toBe(false);
      expect(toBoolean(null)).toBe(false);
      expect(toBoolean(undefined)).toBe(false);
      expect(toBoolean('')).toBe(false);
      expect(toBoolean([])).toBe(true);
      expect(toBoolean({})).toBe(true);
    });
  });

  describe('isTruthy', () => {
    it('应该正确判断值是否为真值', () => {
      expect(isTruthy(true)).toBe(true);
      expect(isTruthy(false)).toBe(false);
      expect(isTruthy('true')).toBe(true);
      expect(isTruthy('false')).toBe(true);
      expect(isTruthy('1')).toBe(true);
      expect(isTruthy('0')).toBe(true);
      expect(isTruthy(1)).toBe(true);
      expect(isTruthy(0)).toBe(false);
      expect(isTruthy(null)).toBe(false);
      expect(isTruthy(undefined)).toBe(false);
      expect(isTruthy('')).toBe(false);
      expect(isTruthy([])).toBe(true);
      expect(isTruthy({})).toBe(true);
    });
  });

  describe('isFalsy', () => {
    it('应该正确判断值是否为假值', () => {
      expect(isFalsy(true)).toBe(false);
      expect(isFalsy(false)).toBe(true);
      expect(isFalsy('true')).toBe(false);
      expect(isFalsy('false')).toBe(false);
      expect(isFalsy('1')).toBe(false);
      expect(isFalsy('0')).toBe(false);
      expect(isFalsy(1)).toBe(false);
      expect(isFalsy(0)).toBe(true);
      expect(isFalsy(null)).toBe(true);
      expect(isFalsy(undefined)).toBe(true);
      expect(isFalsy('')).toBe(true);
      expect(isFalsy([])).toBe(false);
      expect(isFalsy({})).toBe(false);
    });
  });
}); 