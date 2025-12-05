/**
 * BigInt 转换操作工具函数
 * @packageDocumentation
 */

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

