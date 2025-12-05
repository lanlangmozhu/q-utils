/**
 * BigInt 数学运算工具函数
 * @packageDocumentation
 */

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

import { bigIntToString } from './conversion';

/**
 * 获取 BigInt 的位数
 * @param value - BigInt 值
 * @returns 位数
 * @example
 * bigIntLength(123n) // 3
 */
export const bigIntLength = (value: bigint): number => {
  return bigIntToString(bigIntAbs(value)).length;
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

