import {
  fibonacci,
  primes,
  constants
} from '@/number/special';

describe('特殊数字工具函数', () => {
  describe('fibonacci', () => {
    it('应该生成正确的斐波那契数列', () => {
      expect(fibonacci(1)).toEqual([0]);
      expect(fibonacci(2)).toEqual([0, 1]);
      expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
      expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    it('应该处理无效输入', () => {
      expect(fibonacci(0)).toEqual([]);
      expect(fibonacci(-1)).toEqual([]);
    });

    it('应该生成大数列', () => {
      const result = fibonacci(20);
      expect(result.length).toBe(20);
      expect(result[19]).toBe(4181);
    });
  });

  describe('primes', () => {
    it('应该生成指定范围内的质数序列', () => {
      expect(primes(1, 10)).toEqual([2, 3, 5, 7]);
      expect(primes(10, 20)).toEqual([11, 13, 17, 19]);
      expect(primes(90, 100)).toEqual([97]);
    });

    it('应该处理边界情况', () => {
      expect(primes(1, 2)).toEqual([2]);
      expect(primes(1, 1)).toEqual([]);
      expect(primes(4, 4)).toEqual([]);
    });

    it('应该处理无效范围', () => {
      expect(primes(10, 5)).toEqual([]);
      expect(primes(-10, 5)).toEqual([2, 3, 5]);
    });
  });

  describe('constants', () => {
    it('应该包含所有数学常数', () => {
      expect(constants.PI).toBe(Math.PI);
      expect(constants.E).toBe(Math.E);
      expect(constants.PHI).toBeCloseTo((1 + Math.sqrt(5)) / 2);
      expect(constants.GAMMA).toBeCloseTo(0.57721566490153286);
      expect(constants.CATALAN).toBeCloseTo(0.91596559417721901);
      expect(constants.APERY).toBeCloseTo(1.20205690315959428);
      expect(constants.TWIN_PRIME).toBeCloseTo(0.66016181584686957);
      expect(constants.RAMANUJAN_SOLDNER).toBeCloseTo(1.45136923488338105);
      expect(constants.GROSCHMANN).toBeCloseTo(0.28016949902386913);
      expect(constants.PORTER).toBeCloseTo(1.46707807943397547);
    });

    it('应该包含所有对数相关常数', () => {
      expect(constants.LN2).toBe(Math.LN2);
      expect(constants.LN10).toBe(Math.LN10);
      expect(constants.LOG2E).toBe(Math.LOG2E);
      expect(constants.LOG10E).toBe(Math.LOG10E);
    });

    it('应该包含所有平方根相关常数', () => {
      expect(constants.SQRT1_2).toBe(Math.SQRT1_2);
      expect(constants.SQRT2).toBe(Math.SQRT2);
    });
  });
}); 