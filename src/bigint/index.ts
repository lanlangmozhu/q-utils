/**
 * BigInt 工具函数
 */

/**
 * 创建 BigInt
 * @param value - 要转换的值
 * @returns BigInt 值
 * @example
 * createBigInt(123) // 123n
 * createBigInt('123') // 123n
 */
export const createBigInt = (value: number | string): bigint => 
  BigInt(value);

/**
 * 检查是否为 BigInt
 * @param value - 要检查的值
 * @returns 是否为 BigInt
 * @example
 * isBigInt(123n) // true
 * isBigInt(123) // false
 */
export const isBigInt = (value: unknown): value is bigint => 
  typeof value === 'bigint';

/**
 * 检查是否为有效的 BigInt
 * @param value - 要检查的值
 * @returns 是否为有效的 BigInt
 * @example
 * isValidBigInt(123n) // true
 * isValidBigInt('123') // true
 * isValidBigInt('abc') // false
 */
export const isValidBigInt = (value: unknown): boolean => {
  try {
    if (typeof value === 'bigint') return true;
    if (typeof value === 'string') {
      BigInt(value);
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

/**
 * 将 BigInt 转换为字符串
 * @param value - BigInt 值
 * @param radix - 进制
 * @returns 字符串
 * @example
 * bigIntToString(123n) // '123'
 * bigIntToString(123n, 16) // '7b'
 */
export const bigIntToString = (value: bigint, radix: number = 10): string => 
  value.toString(radix);

/**
 * 将字符串转换为 BigInt
 * @param value - 字符串
 * @param radix - 进制
 * @returns BigInt 值
 * @example
 * stringToBigInt('123') // 123n
 * stringToBigInt('7b', 16) // 123n
 */
export const stringToBigInt = (value: string, radix: number = 10): bigint => 
  BigInt(parseInt(value, radix));

/**
 * 获取 BigInt 的绝对值
 * @param value - BigInt 值
 * @returns 绝对值
 * @example
 * bigIntAbs(-123n) // 123n
 */
export const bigIntAbs = (value: bigint): bigint => 
  value < 0n ? -value : value;

/**
 * 获取 BigInt 的符号
 * @param value - BigInt 值
 * @returns 符号（1、0 或 -1）
 * @example
 * bigIntSign(123n) // 1
 * bigIntSign(0n) // 0
 * bigIntSign(-123n) // -1
 */
export const bigIntSign = (value: bigint): number => 
  value === 0n ? 0 : value > 0n ? 1 : -1;

/**
 * 获取 BigInt 的位数
 * @param value - BigInt 值
 * @returns 位数
 * @example
 * bigIntLength(123n) // 3
 */
export const bigIntLength = (value: bigint): number => 
  bigIntToString(bigIntAbs(value)).length;

/**
 * 检查 BigInt 是否为偶数
 * @param value - BigInt 值
 * @returns 是否为偶数
 * @example
 * isBigIntEven(123n) // false
 * isBigIntEven(124n) // true
 */
export const isBigIntEven = (value: bigint): boolean => 
  value % 2n === 0n;

/**
 * 检查 BigInt 是否为奇数
 * @param value - BigInt 值
 * @returns 是否为奇数
 * @example
 * isBigIntOdd(123n) // true
 * isBigIntOdd(124n) // false
 */
export const isBigIntOdd = (value: bigint): boolean => 
  value % 2n === 1n;

/**
 * 检查 BigInt 是否为质数
 * @param value - BigInt 值
 * @returns 是否为质数
 * @example
 * isBigIntPrime(17n) // true
 * isBigIntPrime(18n) // false
 */
export const isBigIntPrime = (value: bigint): boolean => {
  if (value <= 1n) return false;
  if (value <= 3n) return true;
  if (isBigIntEven(value)) return false;

  const sqrt = bigIntSqrt(value);
  for (let i = 3n; i <= sqrt; i += 2n) {
    if (value % i === 0n) return false;
  }
  return true;
};

/**
 * 获取 BigInt 的平方根
 * @param value - BigInt 值
 * @returns 平方根
 * @example
 * bigIntSqrt(16n) // 4n
 * bigIntSqrt(17n) // 4n
 */
export const bigIntSqrt = (value: bigint): bigint => {
  if (value < 0n) throw new Error('Cannot calculate square root of negative number');
  if (value <= 1n) return value;

  let x = value / 2n;
  let y = (x + value / x) / 2n;

  while (y < x) {
    x = y;
    y = (x + value / x) / 2n;
  }

  return x;
};

/**
 * 获取 BigInt 的幂
 * @param base - 底数
 * @param exponent - 指数
 * @returns 幂
 * @example
 * bigIntPow(2n, 3n) // 8n
 */
export const bigIntPow = (base: bigint, exponent: bigint): bigint => {
  if (exponent < 0n) throw new Error('Exponent must be non-negative');
  if (exponent === 0n) return 1n;
  if (exponent === 1n) return base;

  let result = 1n;
  let current = base;

  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result *= current;
    }
    current *= current;
    exponent /= 2n;
  }

  return result;
};

/**
 * 获取 BigInt 的最大公约数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最大公约数
 * @example
 * bigIntGcd(12n, 18n) // 6n
 */
export const bigIntGcd = (a: bigint, b: bigint): bigint => {
  a = bigIntAbs(a);
  b = bigIntAbs(b);
  while (b !== 0n) {
    [a, b] = [b, a % b];
  }
  return a;
};

/**
 * 获取 BigInt 的最小公倍数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最小公倍数
 * @example
 * bigIntLcm(12n, 18n) // 36n
 */
export const bigIntLcm = (a: bigint, b: bigint): bigint => {
  a = bigIntAbs(a);
  b = bigIntAbs(b);
  return (a * b) / bigIntGcd(a, b);
}; 