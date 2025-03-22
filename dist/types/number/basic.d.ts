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
export declare const isNumber: (value: unknown) => value is number;
/**
 * 检查是否为整数
 * @param value - 要检查的值
 * @returns 是否为整数
 * @example
 * isInteger(123) // true
 * isInteger(123.45) // false
 */
export declare const isInteger: (value: number) => boolean;
/**
 * 检查是否为有限数
 * @param value - 要检查的值
 * @returns 是否为有限数
 * @example
 * isFiniteNumber(123) // true
 * isFiniteNumber(Infinity) // false
 */
export declare const isFiniteNumber: (value: number) => boolean;
/**
 * 检查是否为 NaN
 * @param value - 要检查的值
 * @returns 是否为 NaN
 * @example
 * isNaN(NaN) // true
 * isNaN(123) // false
 */
export declare const isNaN: (value: number) => boolean;
/**
 * 检查是否为偶数
 * @param value - 要检查的值
 * @returns 是否为偶数
 * @example
 * isEven(123) // false
 * isEven(124) // true
 */
export declare const isEven: (value: number) => boolean;
/**
 * 判断数字是否为奇数
 * @param num 要判断的数字
 * @returns 是否为奇数
 */
export declare function isOdd(num: number): boolean;
/**
 * 检查是否为质数
 * @param value - 要检查的值
 * @returns 是否为质数
 * @example
 * isPrime(17) // true
 * isPrime(18) // false
 */
export declare const isPrime: (value: number) => boolean;
//# sourceMappingURL=basic.d.ts.map