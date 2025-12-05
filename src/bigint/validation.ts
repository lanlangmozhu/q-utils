/**
 * BigInt 验证操作工具函数
 * @packageDocumentation
 */

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

import { bigIntSqrt } from './math';

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

