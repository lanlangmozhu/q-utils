/**
 * 数组随机操作相关工具函数
 * @packageDocumentation
 */
/**
 * 从数组中随机获取一个元素
 * @param arr - 源数组
 * @returns 随机获取的元素
 * @example
 * ```typescript
 * randomItem([1, 2, 3, 4, 5])
 * // 可能返回 1, 2, 3, 4, 5 中的任意一个
 * ```
 */
export declare function randomItem<T>(arr: T[]): T | undefined;
/**
 * 从数组中随机获取指定数量的元素
 * @param arr - 源数组
 * @param count - 需要获取的元素数量
 * @returns 随机获取的元素数组
 * @example
 * ```typescript
 * randomItems([1, 2, 3, 4, 5], 3)
 * // 可能返回 [1, 3, 5] 等任意三个元素的组合
 * ```
 */
export declare function randomItems<T>(arr: T[], count: number): T[];
/**
 * 随机打乱数组
 * @param arr - 要打乱的数组
 * @returns 打乱后的新数组
 * @example
 * ```typescript
 * shuffle([1, 2, 3, 4, 5])
 * // 可能返回 [3, 1, 5, 2, 4] 等任意排列
 * ```
 */
export declare function shuffle<T>(arr: T[]): T[];
/**
 * 随机获取指定范围内的元素
 * @param arr - 源数组
 * @param start - 起始索引
 * @param end - 结束索引
 * @returns 指定范围内的随机元素
 * @example
 * ```typescript
 * randomRange([1, 2, 3, 4, 5], 1, 3)
 * // 可能返回 2, 3, 4 中的任意一个
 * ```
 */
export declare function randomRange<T>(arr: T[], start: number, end: number): T | undefined;
//# sourceMappingURL=random.d.ts.map