/**
 * 统计相关工具函数
 * @packageDocumentation
 */
/**
 * 统计数组元素出现次数
 * @param arr - 要统计的数组
 * @returns 元素出现次数的对象
 * @example
 * ```typescript
 * count([1, 2, 1, 3, 2, 1])
 * // 返回 { 1: 3, 2: 2, 3: 1 }
 * ```
 */
export declare function count<T>(arr: T[] | null | undefined): Record<string, number>;
/**
 * 计算数组的统计信息
 * @param arr - 要计算的数组
 * @returns 统计信息对象
 * @example
 * ```typescript
 * stats([1, 2, 3, 4, 5])
 * // 返回 { sum: 15, avg: 3, min: 1, max: 5, length: 5 }
 * ```
 */
export declare function stats(arr: number[] | null | undefined): {
    sum: number;
    avg: number;
    min: number;
    max: number;
    length: number;
};
//# sourceMappingURL=stats.d.ts.map