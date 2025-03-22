/**
 * 数组分组相关工具函数
 * @packageDocumentation
 */
/**
 * 按指定条件将数组元素分组
 * @param arr - 要分组的数组
 * @param keyOrFn - 分组的键或转换函数
 * @returns 分组后的对象
 * @example
 * ```typescript
 * groupBy([1, 2, 3, 4, 5, 6], n => n % 2 === 0 ? '偶数' : '奇数')
 * // 返回 { '偶数': [2, 4, 6], '奇数': [1, 3, 5] }
 * ```
 */
export declare function groupBy<T, K extends keyof T | string>(arr: T[] | null | undefined, keyOrFn: K | ((item: T) => string | number)): Record<string, T[]>;
/**
 * 按大小将数组分组
 * @param arr - 要分组的数组
 * @param size - 每组的大小
 * @returns 分组后的数组
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2)
 * // 返回 [[1, 2], [3, 4], [5]]
 * ```
 */
export declare function chunkGroups<T>(arr: T[] | null | undefined, size: number): T[][];
/**
 * 按数量将数组分组
 * @param arr - 要分组的数组
 * @param count - 分组数量
 * @param options - 配置选项
 * @returns 分组后的数组
 * @example
 * ```typescript
 * splitIntoGroups([1, 2, 3, 4, 5, 6, 7], 3)
 * // 返回 [[1, 2, 3], [4, 5], [6, 7]]
 * ```
 */
export declare function splitIntoGroups<T>(arr: T[] | null | undefined, count: number, options?: {
    balanced?: boolean;
} | null | undefined): T[][];
//# sourceMappingURL=group.d.ts.map