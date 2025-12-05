import { toBoolean, isTruthy, isFalsy } from '@/boolean';

describe('Boolean Utils', () => {
  describe('toBoolean', () => {
    it('should convert boolean values correctly', () => {
      expect(toBoolean(true)).toBe(true);
      expect(toBoolean(false)).toBe(false);
    });

    it('should convert string values correctly', () => {
      expect(toBoolean('true')).toBe(true);
      expect(toBoolean('false')).toBe(false);
      expect(toBoolean('TRUE')).toBe(true);
      expect(toBoolean('FALSE')).toBe(false);
      expect(toBoolean(' true ')).toBe(true);
      expect(toBoolean(' false ')).toBe(false);
      expect(toBoolean('test')).toBe(false);
    });

    it('should convert number values correctly', () => {
      expect(toBoolean(1)).toBe(true);
      expect(toBoolean(0)).toBe(false);
      expect(toBoolean(-1)).toBe(true);
      expect(toBoolean(100)).toBe(true);
    });

    it('should return false for other types', () => {
      expect(toBoolean(null)).toBe(false);
      expect(toBoolean(undefined)).toBe(false);
      expect(toBoolean([])).toBe(false);
      expect(toBoolean({})).toBe(false);
    });
  });

  describe('isTruthy', () => {
    it('should return true for truthy values', () => {
      expect(isTruthy(true)).toBe(true);
      expect(isTruthy(1)).toBe(true);
      expect(isTruthy('test')).toBe(true);
      expect(isTruthy([1, 2, 3])).toBe(true);
      expect(isTruthy({ a: 1 })).toBe(true);
    });

    it('should return false for falsy values', () => {
      expect(isTruthy(false)).toBe(false);
      expect(isTruthy(0)).toBe(false);
      expect(isTruthy('')).toBe(false);
      expect(isTruthy(null)).toBe(false);
      expect(isTruthy(undefined)).toBe(false);
    });

    it('should return false for empty arrays and objects', () => {
      // Note: isTruthy checks length/keys, so empty arrays/objects return false
      expect(isTruthy([])).toBe(false); // Empty array has length 0
      expect(isTruthy({})).toBe(false); // Empty object has no keys
    });
  });

  describe('isFalsy', () => {
    it('should return true for falsy values', () => {
      expect(isFalsy(false)).toBe(true);
      expect(isFalsy(0)).toBe(true);
      expect(isFalsy('')).toBe(true);
      expect(isFalsy(null)).toBe(true);
      expect(isFalsy(undefined)).toBe(true);
      expect(isFalsy([])).toBe(true); // Empty array is falsy
      expect(isFalsy({})).toBe(true); // Empty object is falsy
    });

    it('should return false for truthy values', () => {
      expect(isFalsy(true)).toBe(false);
      expect(isFalsy(1)).toBe(false);
      expect(isFalsy('test')).toBe(false);
      expect(isFalsy([1, 2, 3])).toBe(false);
      expect(isFalsy({ a: 1 })).toBe(false);
    });
  });
});

