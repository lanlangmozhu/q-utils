import {
  isNumber,
  isInteger,
  isFiniteNumber,
  isNaN,
  isEven,
  isOdd,
  isPrime
} from '@/number/basic';

describe('基础数字操作函数', () => {
  describe('isNumber', () => {
    it('应该正确识别数字类型', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-123)).toBe(true);
      expect(isNumber(123.45)).toBe(true);
      expect(isNumber(Infinity)).toBe(true);
      expect(isNumber(NaN)).toBe(true);
    });

    it('应该正确识别非数字类型', () => {
      expect(isNumber('123')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
    });
  });

  describe('isInteger', () => {
    it('应该正确识别整数', () => {
      expect(isInteger(123)).toBe(true);
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-123)).toBe(true);
    });

    it('应该正确识别非整数', () => {
      expect(isInteger(123.45)).toBe(false);
      expect(isInteger(Infinity)).toBe(false);
      expect(isInteger(NaN)).toBe(false);
    });
  });

  describe('isFiniteNumber', () => {
    it('应该正确识别有限数', () => {
      expect(isFiniteNumber(123)).toBe(true);
      expect(isFiniteNumber(0)).toBe(true);
      expect(isFiniteNumber(-123)).toBe(true);
      expect(isFiniteNumber(123.45)).toBe(true);
    });

    it('应该正确识别无限数', () => {
      expect(isFiniteNumber(Infinity)).toBe(false);
      expect(isFiniteNumber(-Infinity)).toBe(false);
      expect(isFiniteNumber(NaN)).toBe(false);
    });
  });

  describe('isNaN', () => {
    it('应该正确识别 NaN', () => {
      expect(isNaN(NaN)).toBe(true);
    });

    it('应该正确识别非 NaN', () => {
      expect(isNaN(123)).toBe(false);
      expect(isNaN(0)).toBe(false);
      expect(isNaN(-123)).toBe(false);
      expect(isNaN(123.45)).toBe(false);
      expect(isNaN(Infinity)).toBe(false);
    });
  });

  describe('isEven', () => {
    it('应该正确识别偶数', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
      expect(isEven(100)).toBe(true);
    });

    it('应该正确识别奇数', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(-1)).toBe(false);
      expect(isEven(99)).toBe(false);
    });
  });

  describe('isOdd', () => {
    it('应该正确识别奇数', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(-1)).toBe(true);
      expect(isOdd(99)).toBe(true);
    });

    it('应该正确识别偶数', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-2)).toBe(false);
      expect(isOdd(100)).toBe(false);
    });
  });

  describe('isPrime', () => {
    it('应该正确识别质数', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(19)).toBe(true);
    });

    it('应该正确识别非质数', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(10)).toBe(false);
      expect(isPrime(12)).toBe(false);
      expect(isPrime(14)).toBe(false);
      expect(isPrime(15)).toBe(false);
      expect(isPrime(16)).toBe(false);
      expect(isPrime(18)).toBe(false);
      expect(isPrime(20)).toBe(false);
    });

    it('应该处理负数', () => {
      expect(isPrime(-2)).toBe(false);
      expect(isPrime(-3)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });
  });
}); 