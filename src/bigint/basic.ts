/**
 * BigInt 基础操作工具函数
 * @packageDocumentation
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

