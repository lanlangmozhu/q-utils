/**
 * 数学运算工具函数
 * @packageDocumentation
 */
/**
 * 获取数字的绝对值
 * @param value - 数字
 * @returns 绝对值
 * @example
 * abs(-123) // 123
 */
export declare const abs: (value: number | null | undefined) => number;
/**
 * 获取数字的符号
 * @param value - 数字
 * @returns 符号（1、0 或 -1）
 * @example
 * sign(123) // 1
 * sign(0) // 0
 * sign(-123) // -1
 */
export declare const sign: (value: number | null | undefined) => number;
/**
 * 获取数字的平方根
 * @param value - 数字
 * @returns 平方根
 * @example
 * sqrt(16) // 4
 * sqrt(17) // 4.123105625617661
 */
export declare const sqrt: (value: number | null | undefined) => number;
/**
 * 获取数字的幂
 * @param base - 底数
 * @param exponent - 指数
 * @returns 幂
 * @example
 * pow(2, 3) // 8
 */
export declare const pow: (base: number | null | undefined, exponent: number | null | undefined) => number;
/**
 * 计算两个数的最大公约数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最大公约数
 * @example
 * gcd(12, 18) // 6
 */
export declare function gcd(a: number | null | undefined, b: number | null | undefined): number;
/**
 * 计算两个数的最小公倍数
 * @param a 第一个数
 * @param b 第二个数
 * @returns 最小公倍数
 */
export declare function lcm(a: number | null | undefined, b: number | null | undefined): number;
/**
 * 获取数字的位数
 * @param value - 数字
 * @returns 位数
 * @example
 * length(123) // 3
 */
export declare const length: (value: number | null | undefined) => number;
/**
 * 获取数字的阶乘
 * @param value - 数字
 * @returns 阶乘
 * @example
 * factorial(5) // 120
 */
export declare const factorial: (value: number | null | undefined) => number;
//# sourceMappingURL=math.d.ts.map