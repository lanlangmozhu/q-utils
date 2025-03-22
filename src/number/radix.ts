/**
 * 进制转换工具函数
 * @packageDocumentation
 */

/**
 * 获取数字的二进制表示
 * @param value - 数字
 * @returns 二进制表示
 * @example
 * toBinary(123) // '1111011'
 */
export const toBinary = (value: number): string => 
  value.toString(2);

/**
 * 获取数字的八进制表示
 * @param value - 数字
 * @returns 八进制表示
 * @example
 * toOctal(123) // '173'
 */
export const toOctal = (value: number): string => 
  value.toString(8);

/**
 * 获取数字的十六进制表示
 * @param value - 数字
 * @returns 十六进制表示
 * @example
 * toHex(123) // '7b'
 */
export const toHex = (value: number): string => 
  value.toString(16);

/**
 * 将二进制字符串转换为数字
 * @param value - 二进制字符串
 * @returns 数字
 * @example
 * fromBinary('1111011') // 123
 */
export const fromBinary = (value: string): number => 
  parseInt(value, 2);

/**
 * 将八进制字符串转换为数字
 * @param value - 八进制字符串
 * @returns 数字
 * @example
 * fromOctal('173') // 123
 */
export const fromOctal = (value: string): number => 
  parseInt(value, 8);

/**
 * 将十六进制字符串转换为数字
 * @param value - 十六进制字符串
 * @returns 数字
 * @example
 * fromHex('7b') // 123
 */
export const fromHex = (value: string): number => 
  parseInt(value, 16); 