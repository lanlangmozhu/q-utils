/**
 * 随机数生成工具函数
 */
/**
 * 生成指定范围内的随机数
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 随机数
 * @example
 * random(1, 10) // 1-10 之间的随机数
 * random(1, 10, false) // 2-9 之间的随机数
 */
export declare function random(min: number, max: number, inclusive?: boolean): number;
/**
 * 生成指定范围内的随机整数
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 随机整数
 * @example
 * randomInt(1, 10) // 1-10 之间的随机整数
 * randomInt(1, 10, false) // 2-9 之间的随机整数
 */
export declare function randomInt(min: number, max: number, inclusive?: boolean): number;
/**
 * 生成指定长度的随机数字字符串
 * @param length - 字符串长度
 * @returns 随机数字字符串
 * @example
 * randomDigits(4) // 例如 "3751"
 * randomDigits(6) // 例如 "159374"
 */
export declare function randomDigits(length: number): string;
/**
 * 生成UUID v4（随机UUID）
 * @returns UUID字符串
 * @example
 * randomUUID() // 例如 "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 */
export declare function randomUUID(): string;
/**
 * 随机打乱数组
 * @param array - 要打乱的数组
 * @returns 打乱后的数组
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [3, 1, 4, 2, 5]
 */
export declare function shuffle<T>(array: T[]): T[];
//# sourceMappingURL=random.d.ts.map