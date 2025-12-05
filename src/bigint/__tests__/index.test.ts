import {
  createBigInt,
  isBigInt,
  isValidBigInt,
  bigIntToString,
  stringToBigInt,
  bigIntAbs,
  bigIntSign,
  bigIntLength,
  isBigIntEven,
  isBigIntOdd,
  isBigIntPrime,
  bigIntSqrt,
  bigIntPow,
  bigIntGcd,
  bigIntLcm
} from '@/bigint';

describe('BigInt 工具函数', () => {
  describe('createBigInt', () => {
    it('应该正确创建 BigInt', () => {
      expect(createBigInt(123)).toBe(BigInt(123));
      expect(createBigInt('123')).toBe(BigInt(123));
    });
  });

  describe('isBigInt', () => {
    it('应该正确判断值是否为 BigInt', () => {
      expect(isBigInt(BigInt(1))).toBe(true);
      expect(isBigInt(1n)).toBe(true);
      expect(isBigInt(1)).toBe(false);
      expect(isBigInt('1')).toBe(false);
      expect(isBigInt(null)).toBe(false);
      expect(isBigInt(undefined)).toBe(false);
    });
  });

  describe('isValidBigInt', () => {
    it('应该正确判断是否为有效的 BigInt', () => {
      expect(isValidBigInt(BigInt(123))).toBe(true);
      expect(isValidBigInt('123')).toBe(true);
      expect(isValidBigInt('abc')).toBe(false);
      expect(isValidBigInt(123)).toBe(false);
    });
  });

  describe('bigIntToString', () => {
    it('应该正确将 BigInt 转换为字符串', () => {
      expect(bigIntToString(BigInt(123))).toBe('123');
      expect(bigIntToString(BigInt(123), 16)).toBe('7b');
    });
  });

  describe('stringToBigInt', () => {
    it('应该正确将字符串转换为 BigInt', () => {
      expect(stringToBigInt('123')).toBe(BigInt(123));
      expect(stringToBigInt('7b', 16)).toBe(BigInt(123));
    });
  });

  describe('bigIntAbs', () => {
    it('应该正确获取 BigInt 的绝对值', () => {
      expect(bigIntAbs(BigInt(-123))).toBe(BigInt(123));
      expect(bigIntAbs(BigInt(123))).toBe(BigInt(123));
    });
  });

  describe('bigIntSign', () => {
    it('应该正确获取 BigInt 的符号', () => {
      expect(bigIntSign(BigInt(123))).toBe(1);
      expect(bigIntSign(BigInt(0))).toBe(0);
      expect(bigIntSign(BigInt(-123))).toBe(-1);
    });
  });

  describe('bigIntLength', () => {
    it('应该正确获取 BigInt 的位数', () => {
      expect(bigIntLength(BigInt(123))).toBe(3);
      expect(bigIntLength(BigInt(-123))).toBe(3);
    });
  });

  describe('isBigIntEven', () => {
    it('应该正确判断 BigInt 是否为偶数', () => {
      expect(isBigIntEven(BigInt(123))).toBe(false);
      expect(isBigIntEven(BigInt(124))).toBe(true);
    });
  });

  describe('isBigIntOdd', () => {
    it('应该正确判断 BigInt 是否为奇数', () => {
      expect(isBigIntOdd(BigInt(123))).toBe(true);
      expect(isBigIntOdd(BigInt(124))).toBe(false);
    });
  });

  describe('isBigIntPrime', () => {
    it('应该正确判断 BigInt 是否为质数', () => {
      expect(isBigIntPrime(BigInt(17))).toBe(true);
      expect(isBigIntPrime(BigInt(18))).toBe(false);
      expect(isBigIntPrime(BigInt(1))).toBe(false);
      expect(isBigIntPrime(BigInt(2))).toBe(true);
      expect(isBigIntPrime(BigInt(3))).toBe(true);
    });
  });

  describe('bigIntSqrt', () => {
    it('应该正确获取 BigInt 的平方根', () => {
      expect(bigIntSqrt(BigInt(16))).toBe(BigInt(4));
      expect(bigIntSqrt(BigInt(17))).toBe(BigInt(4));
      expect(bigIntSqrt(BigInt(0))).toBe(BigInt(0));
      expect(bigIntSqrt(BigInt(1))).toBe(BigInt(1));
      expect(() => bigIntSqrt(BigInt(-1))).toThrow();
    });
  });

  describe('bigIntPow', () => {
    it('应该正确获取 BigInt 的幂', () => {
      expect(bigIntPow(BigInt(2), BigInt(3))).toBe(BigInt(8));
      expect(bigIntPow(BigInt(2), BigInt(0))).toBe(BigInt(1));
      expect(bigIntPow(BigInt(2), BigInt(1))).toBe(BigInt(2));
      expect(() => bigIntPow(BigInt(2), BigInt(-1))).toThrow();
    });
  });

  describe('bigIntGcd', () => {
    it('应该正确获取 BigInt 的最大公约数', () => {
      expect(bigIntGcd(BigInt(12), BigInt(18))).toBe(BigInt(6));
      expect(bigIntGcd(BigInt(-12), BigInt(18))).toBe(BigInt(6));
      expect(bigIntGcd(BigInt(12), BigInt(-18))).toBe(BigInt(6));
      expect(bigIntGcd(BigInt(-12), BigInt(-18))).toBe(BigInt(6));
    });
  });

  describe('bigIntLcm', () => {
    it('应该正确获取 BigInt 的最小公倍数', () => {
      expect(bigIntLcm(BigInt(12), BigInt(18))).toBe(BigInt(36));
      expect(bigIntLcm(BigInt(-12), BigInt(18))).toBe(BigInt(36));
      expect(bigIntLcm(BigInt(12), BigInt(-18))).toBe(BigInt(36));
      expect(bigIntLcm(BigInt(-12), BigInt(-18))).toBe(BigInt(36));
    });
  });
}); 