/**
 * BigInt 最大公约数和最小公倍数工具函数
 * @packageDocumentation
 */

import { bigIntAbs } from './math';

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

