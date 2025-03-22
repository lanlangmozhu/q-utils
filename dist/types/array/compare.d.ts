/**
 * 数组比较相关工具函数
 * @packageDocumentation
 */
/**
 * 计算数组差集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 差集数组
 * @example
 * ```typescript
 * difference([1, 2, 3], [2, 3, 4])
 * // 返回 [1]
 * ```
 */
export declare function difference<T>(arr1: T[] | null | undefined, arr2: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): T[];
/**
 * 计算数组交集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 交集数组
 * @example
 * ```typescript
 * intersection([1, 2, 3], [2, 3, 4])
 * // 返回 [2, 3]
 * ```
 */
export declare function intersection<T>(arr1: T[] | null | undefined, arr2: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): T[];
/**
 * 计算数组并集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 并集数组
 * @example
 * ```typescript
 * union([1, 2, 3], [2, 3, 4])
 * // 返回 [1, 2, 3, 4]
 * ```
 */
export declare function union<T>(arr1: T[] | null | undefined, arr2: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): T[];
/**
 * 检查数组是否包含子数组
 * @param arr - 主数组
 * @param subArr - 子数组
 * @param compareFn - 可选的比较函数
 * @returns 是否包含
 * @example
 * ```typescript
 * includes([1, 2, 3, 4], [2, 3])
 * // 返回 true
 * ```
 */
export declare function includes<T>(arr: T[] | null | undefined, subArr: T[] | null | undefined, compareFn?: (a: T, b: T) => boolean): boolean;
//# sourceMappingURL=compare.d.ts.map