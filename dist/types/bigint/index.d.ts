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
export declare const createBigInt: (value: number | string) => bigint;
/**
 * 检查是否为 BigInt
 * @param value - 要检查的值
 * @returns 是否为 BigInt
 * @example
 * isBigInt(123n) // true
 * isBigInt(123) // false
 */
export declare const isBigInt: (value: unknown) => value is bigint;
/**
 * 检查是否为有效的 BigInt
 * @param value - 要检查的值
 * @returns 是否为有效的 BigInt
 * @example
 * isValidBigInt(123n) // true
 * isValidBigInt('123') // true
 * isValidBigInt('abc') // false
 */
export declare const isValidBigInt: (value: unknown) => boolean;
/**
 * 将 BigInt 转换为字符串
 * @param value - BigInt 值
 * @param radix - 进制
 * @returns 字符串
 * @example
 * bigIntToString(123n) // '123'
 * bigIntToString(123n, 16) // '7b'
 */
export declare const bigIntToString: (value: bigint, radix?: number) => string;
/**
 * 将字符串转换为 BigInt
 * @param value - 字符串
 * @param radix - 进制
 * @returns BigInt 值
 * @example
 * stringToBigInt('123') // 123n
 * stringToBigInt('7b', 16) // 123n
 */
export declare const stringToBigInt: (value: string, radix?: number) => bigint;
/**
 * 获取 BigInt 的绝对值
 * @param value - BigInt 值
 * @returns 绝对值
 * @example
 * bigIntAbs(-123n) // 123n
 */
export declare const bigIntAbs: (value: bigint) => bigint;
/**
 * 获取 BigInt 的符号
 * @param value - BigInt 值
 * @returns 符号（1、0 或 -1）
 * @example
 * bigIntSign(123n) // 1
 * bigIntSign(0n) // 0
 * bigIntSign(-123n) // -1
 */
export declare const bigIntSign: (value: bigint) => number;
/**
 * 获取 BigInt 的位数
 * @param value - BigInt 值
 * @returns 位数
 * @example
 * bigIntLength(123n) // 3
 */
export declare const bigIntLength: (value: bigint) => number;
/**
 * 检查 BigInt 是否为偶数
 * @param value - BigInt 值
 * @returns 是否为偶数
 * @example
 * isBigIntEven(123n) // false
 * isBigIntEven(124n) // true
 */
export declare const isBigIntEven: (value: bigint) => boolean;
/**
 * 检查 BigInt 是否为奇数
 * @param value - BigInt 值
 * @returns 是否为奇数
 * @example
 * isBigIntOdd(123n) // true
 * isBigIntOdd(124n) // false
 */
export declare const isBigIntOdd: (value: bigint) => boolean;
/**
 * 检查 BigInt 是否为质数
 * @param value - BigInt 值
 * @returns 是否为质数
 * @example
 * isBigIntPrime(17n) // true
 * isBigIntPrime(18n) // false
 */
export declare const isBigIntPrime: (value: bigint) => boolean;
/**
 * 获取 BigInt 的平方根
 * @param value - BigInt 值
 * @returns 平方根
 * @example
 * bigIntSqrt(16n) // 4n
 * bigIntSqrt(17n) // 4n
 */
export declare const bigIntSqrt: (value: bigint) => bigint;
/**
 * 获取 BigInt 的幂
 * @param base - 底数
 * @param exponent - 指数
 * @returns 幂
 * @example
 * bigIntPow(2n, 3n) // 8n
 */
export declare const bigIntPow: (base: bigint, exponent: bigint) => bigint;
/**
 * 获取 BigInt 的最大公约数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最大公约数
 * @example
 * bigIntGcd(12n, 18n) // 6n
 */
export declare const bigIntGcd: (a: bigint, b: bigint) => bigint;
/**
 * 获取 BigInt 的最小公倍数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最小公倍数
 * @example
 * bigIntLcm(12n, 18n) // 36n
 */
export declare const bigIntLcm: (a: bigint, b: bigint) => bigint;
//# sourceMappingURL=index.d.ts.map