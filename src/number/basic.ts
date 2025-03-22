/**
 * 基础数字操作工具函数
 * @packageDocumentation
 */

/**
 * 检查是否为数字
 * @param value - 要检查的值
 * @returns 是否为数字
 * @example
 * isNumber(123) // true
 * isNumber('123') // false
 */
export const isNumber = (value: unknown): value is number => 
  typeof value === 'number';

/**
 * 检查是否为整数
 * @param value - 要检查的值
 * @returns 是否为整数
 * @example
 * isInteger(123) // true
 * isInteger(123.45) // false
 */
export const isInteger = (value: number): boolean => 
  Number.isInteger(value);

/**
 * 检查是否为有限数
 * @param value - 要检查的值
 * @returns 是否为有限数
 * @example
 * isFiniteNumber(123) // true
 * isFiniteNumber(Infinity) // false
 */
export const isFiniteNumber = (value: number): boolean => 
  Number.isFinite(value);

/**
 * 检查是否为 NaN
 * @param value - 要检查的值
 * @returns 是否为 NaN
 * @example
 * isNaN(NaN) // true
 * isNaN(123) // false
 */
export const isNaN = (value: number): boolean => 
  Number.isNaN(value);

/**
 * 检查是否为偶数
 * @param value - 要检查的值
 * @returns 是否为偶数
 * @example
 * isEven(123) // false
 * isEven(124) // true
 */
export const isEven = (value: number): boolean => 
  value % 2 === 0;

/**
 * 判断数字是否为奇数
 * @param num 要判断的数字
 * @returns 是否为奇数
 */
export function isOdd(num: number): boolean {
  return Math.abs(num) % 2 === 1;
}

/**
 * 检查是否为质数
 * @param value - 要检查的值
 * @returns 是否为质数
 * @example
 * isPrime(17) // true
 * isPrime(18) // false
 */
export const isPrime = (value: number): boolean => {
  if (value <= 1) return false;
  if (value <= 3) return true;
  if (isEven(value)) return false;

  const sqrt = Math.sqrt(value);
  for (let i = 3; i <= sqrt; i += 2) {
    if (value % i === 0) return false;
  }
  return true;
}; 