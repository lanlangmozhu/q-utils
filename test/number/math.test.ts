import {
  abs,
  sign,
  sqrt,
  pow,
  gcd,
  lcm,
  length,
  factorial
} from '../../src/number/math';

describe('数学运算函数', () => {
  describe('abs', () => {
    it('应该返回正数的绝对值', () => {
      expect(abs(123)).toBe(123);
      expect(abs(0)).toBe(0);
    });

    it('应该返回负数的绝对值', () => {
      expect(abs(-123)).toBe(123);
      expect(abs(-0)).toBe(0);
    });
  });

  describe('sign', () => {
    it('应该返回正数的符号', () => {
      expect(sign(123)).toBe(1);
      expect(sign(0.1)).toBe(1);
    });

    it('应该返回零的符号', () => {
      expect(sign(0)).toBe(0);
      expect(sign(-0)).toBe(0);
    });

    it('应该返回负数的符号', () => {
      expect(sign(-123)).toBe(-1);
      expect(sign(-0.1)).toBe(-1);
    });
  });

  describe('sqrt', () => {
    it('应该计算正数的平方根', () => {
      expect(sqrt(0)).toBe(0);
      expect(sqrt(1)).toBe(1);
      expect(sqrt(4)).toBe(2);
      expect(sqrt(16)).toBe(4);
      expect(sqrt(2)).toBe(Math.sqrt(2));
    });

    it('应该处理负数', () => {
      expect(sqrt(-1)).toBeNaN();
    });
  });

  describe('pow', () => {
    it('应该计算正数幂', () => {
      expect(pow(2, 3)).toBe(8);
      expect(pow(2, 0)).toBe(1);
      expect(pow(2, 1)).toBe(2);
      expect(pow(2, -1)).toBe(0.5);
    });

    it('应该处理特殊情况', () => {
      expect(pow(0, 0)).toBe(1);
      expect(pow(0, 1)).toBe(0);
      expect(pow(0, -1)).toBe(Infinity);
    });
  });

  describe('gcd', () => {
    it('应该计算正数的最大公约数', () => {
      expect(gcd(12, 18)).toBe(6);
      expect(gcd(8, 12)).toBe(4);
      expect(gcd(7, 13)).toBe(1);
    });

    it('应该处理零', () => {
      expect(gcd(0, 12)).toBe(12);
      expect(gcd(12, 0)).toBe(12);
      expect(gcd(0, 0)).toBe(0);
    });

    it('应该处理负数', () => {
      expect(gcd(-12, 18)).toBe(6);
      expect(gcd(12, -18)).toBe(6);
      expect(gcd(-12, -18)).toBe(6);
    });
  });

  describe('lcm', () => {
    it('应该计算正数的最小公倍数', () => {
      expect(lcm(12, 18)).toBe(36);
      expect(lcm(8, 12)).toBe(24);
      expect(lcm(7, 13)).toBe(91);
    });

    it('应该处理零', () => {
      expect(lcm(0, 12)).toBe(0);
      expect(lcm(12, 0)).toBe(0);
      expect(lcm(0, 0)).toBe(0);
    });

    it('应该处理负数', () => {
      expect(lcm(-12, 18)).toBe(36);
      expect(lcm(12, -18)).toBe(36);
      expect(lcm(-12, -18)).toBe(36);
    });
  });

  describe('length', () => {
    it('应该计算正数的位数', () => {
      expect(length(0)).toBe(1);
      expect(length(1)).toBe(1);
      expect(length(123)).toBe(3);
      expect(length(1000)).toBe(4);
    });

    it('应该计算负数的位数', () => {
      expect(length(-1)).toBe(1);
      expect(length(-123)).toBe(3);
      expect(length(-1000)).toBe(4);
    });
  });

  describe('factorial', () => {
    it('应该计算正整数的阶乘', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });

    it('应该处理边界情况', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
    });

    it('应该处理无效输入', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
      expect(() => factorial(1.5)).toThrow('Factorial is only defined for integers');
    });
  });
}); 