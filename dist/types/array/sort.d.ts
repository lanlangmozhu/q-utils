/**
 * 排序相关工具函数
 * @packageDocumentation
 */
/**
 * 根据指定条件对数组元素进行排序
 * @param arr - 要排序的数组
 * @param keyOrFn - 排序的键或比较函数
 * @param order - 排序顺序，'asc' 或 'desc'，默认为 'asc'
 * @returns 排序后的数组
 * @example
 * ```typescript
 * sortBy([{ id: 1, value: 3 }, { id: 2, value: 1 }, { id: 3, value: 2 }], 'value')
 * // 返回 [{ id: 2, value: 1 }, { id: 3, value: 2 }, { id: 1, value: 3 }]
 * ```
 */
export declare function sortBy<T, K extends keyof T | string>(arr: T[] | null | undefined, keyOrFn: K | ((a: T, b: T) => number), order?: 'asc' | 'desc'): T[];
/**
 * 根据多个条件对数组元素进行排序
 * @param arr - 要排序的数组
 * @param conditions - 排序条件数组
 * @returns 排序后的数组
 * @example
 * ```typescript
 * sortByMultiple(
 *   [
 *     { name: 'a', age: 20 },
 *     { name: 'b', age: 18 },
 *     { name: 'a', age: 18 }
 *   ],
 *   [
 *     { key: 'name', order: 'asc' },
 *     { key: 'age', order: 'desc' }
 *   ]
 * )
 * // 返回 [{ name: 'a', age: 20 }, { name: 'a', age: 18 }, { name: 'b', age: 18 }]
 * ```
 */
export declare function sortByMultiple<T>(arr: T[] | null | undefined, conditions: Array<{
    key: keyof T;
    order?: 'asc' | 'desc';
}> | null | undefined): T[];
/**
 * 使用自定义比较函数对数组进行排序
 * @param arr - 要排序的数组
 * @param compareFn - 比较函数
 * @returns 排序后的数组
 * @example
 * ```typescript
 * sortWith([1, 2, 3, 4], (a, b) => b - a)
 * // 返回 [4, 3, 2, 1]
 * ```
 */
export declare function sortWith<T>(arr: T[] | null | undefined, compareFn: (a: T, b: T) => number): T[];
/**
 * 使用稳定排序算法对数组进行排序
 * @param arr - 要排序的数组
 * @param compareFn - 比较函数
 * @returns 排序后的数组
 * @example
 * ```typescript
 * stableSort([{ id: 1, value: 1 }, { id: 2, value: 1 }], (a, b) => a.value - b.value)
 * // 返回 [{ id: 1, value: 1 }, { id: 2, value: 1 }]，保持相等元素的原始顺序
 * ```
 */
export declare function stableSort<T>(arr: T[] | null | undefined, compareFn: (a: T, b: T) => number): T[];
//# sourceMappingURL=sort.d.ts.map