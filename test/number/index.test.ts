import {
  isNumber,
  isInteger,
  isFiniteNumber,
  isNaN,
  isEven,
  isOdd,
  isPrime,
  abs,
  sign,
  sqrt,
  pow,
  gcd,
  lcm,
  length,
  factorial,
  fibonacci,
  toBinary,
  toOctal,
  toHex,
  fromBinary,
  fromOctal,
  fromHex
} from '../../src/number';

describe('数字工具函数', () => {
  describe('isNumber', () => {
    it('应该正确判断数字类型', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber('123')).toBe(false);
      expect(isNumber(NaN)).toBe(true);
      expect(isNumber(Infinity)).toBe(true);
      expect(isNumber(-Infinity)).toBe(true);
    });
  });

  describe('isInteger', () => {
    it('应该正确判断整数', () => {
      expect(isInteger(123)).toBe(true);
      expect(isInteger(123.45)).toBe(false);
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-123)).toBe(true);
    });
  });

  describe('isFiniteNumber', () => {
    it('应该正确判断有限数', () => {
      expect(isFiniteNumber(123)).toBe(true);
      expect(isFiniteNumber(Infinity)).toBe(false);
      expect(isFiniteNumber(-Infinity)).toBe(false);
      expect(isFiniteNumber(NaN)).toBe(false);
    });
  });

  describe('isNaN', () => {
    it('应该正确判断 NaN', () => {
      expect(isNaN(NaN)).toBe(true);
      expect(isNaN(123)).toBe(false);
      expect(isNaN(Infinity)).toBe(false);
      expect(isNaN(-Infinity)).toBe(false);
    });
  });

  describe('isEven', () => {
    it('应该正确判断偶数', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(3)).toBe(false);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('isOdd', () => {
    it('应该正确判断奇数', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(3)).toBe(true);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-2)).toBe(false);
      expect(isOdd(-3)).toBe(true);
    });
  });

  describe('isPrime', () => {
    it('应该正确判断质数', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(10)).toBe(false);
      expect(isPrime(11)).toBe(true);
    });
  });

  describe('abs', () => {
    it('应该正确获取绝对值', () => {
      expect(abs(123)).toBe(123);
      expect(abs(-123)).toBe(123);
      expect(abs(0)).toBe(0);
    });
  });

  describe('sign', () => {
    it('应该正确获取符号', () => {
      expect(sign(123)).toBe(1);
      expect(sign(-123)).toBe(-1);
      expect(sign(0)).toBe(0);
    });
  });

  describe('sqrt', () => {
    it('应该正确计算平方根', () => {
      expect(sqrt(16)).toBe(4);
      expect(sqrt(0)).toBe(0);
      expect(sqrt(2)).toBe(Math.sqrt(2));
    });
  });

  describe('pow', () => {
    it('应该正确计算幂', () => {
      expect(pow(2, 3)).toBe(8);
      expect(pow(2, 0)).toBe(1);
      expect(pow(2, -1)).toBe(0.5);
    });
  });

  describe('gcd', () => {
    it('应该正确计算最大公约数', () => {
      expect(gcd(12, 18)).toBe(6);
      expect(gcd(7, 13)).toBe(1);
      expect(gcd(0, 5)).toBe(5);
      expect(gcd(5, 0)).toBe(5);
      expect(gcd(0, 0)).toBe(0);
    });
  });

  describe('lcm', () => {
    it('应该正确计算最小公倍数', () => {
      expect(lcm(12, 18)).toBe(36);
      expect(lcm(7, 13)).toBe(91);
      expect(lcm(0, 5)).toBe(0);
      expect(lcm(5, 0)).toBe(0);
      expect(lcm(0, 0)).toBe(0);
    });
  });

  describe('length', () => {
    it('应该正确获取数字位数', () => {
      expect(length(123)).toBe(3);
      expect(length(0)).toBe(1);
      expect(length(-123)).toBe(3);
    });
  });

  describe('factorial', () => {
    it('应该正确计算阶乘', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });

    it('应该正确处理无效输入', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
      expect(() => factorial(1.5)).toThrow('Factorial is only defined for integers');
    });
  });

  describe('fibonacci', () => {
    it('应该正确生成斐波那契数列', () => {
      expect(fibonacci(0)).toEqual([0]);
      expect(fibonacci(1)).toEqual([0, 1]);
      expect(fibonacci(2)).toEqual([0, 1, 1]);
      expect(fibonacci(3)).toEqual([0, 1, 1, 2]);
      expect(fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
      expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    it('应该正确处理无效输入', () => {
      expect(() => fibonacci(-1)).toThrow('Fibonacci is not defined for negative numbers');
      expect(() => fibonacci(1.5)).toThrow('Fibonacci is only defined for integers');
    });
  });

  describe('进制转换', () => {
    describe('toBinary', () => {
      it('应该正确转换为二进制', () => {
        expect(toBinary(5)).toBe('101');
        expect(toBinary(10)).toBe('1010');
        expect(toBinary(0)).toBe('0');
      });
    });

    describe('toOctal', () => {
      it('应该正确转换为八进制', () => {
        expect(toOctal(8)).toBe('10');
        expect(toOctal(10)).toBe('12');
        expect(toOctal(0)).toBe('0');
      });
    });

    describe('toHex', () => {
      it('应该正确转换为十六进制', () => {
        expect(toHex(15)).toBe('f');
        expect(toHex(16)).toBe('10');
        expect(toHex(0)).toBe('0');
      });
    });

    describe('fromBinary', () => {
      it('应该正确从二进制转换', () => {
        expect(fromBinary('101')).toBe(5);
        expect(fromBinary('1010')).toBe(10);
        expect(fromBinary('0')).toBe(0);
      });
    });

    describe('fromOctal', () => {
      it('应该正确从八进制转换', () => {
        expect(fromOctal('10')).toBe(8);
        expect(fromOctal('12')).toBe(10);
        expect(fromOctal('0')).toBe(0);
      });
    });

    describe('fromHex', () => {
      it('应该正确从十六进制转换', () => {
        expect(fromHex('f')).toBe(15);
        expect(fromHex('10')).toBe(16);
        expect(fromHex('0')).toBe(0);
      });
    });
  });
}); 