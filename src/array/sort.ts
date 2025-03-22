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
export function sortBy<T, K extends keyof T | string>(
  arr: T[] | null | undefined,
  keyOrFn: K | ((a: T, b: T) => number),
  order: 'asc' | 'desc' = 'asc'
): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  const result = [...arr];
  const compareFn = typeof keyOrFn === 'function'
    ? keyOrFn
    : (a: T, b: T) => {
        const aVal = a[keyOrFn as keyof T];
        const bVal = b[keyOrFn as keyof T];
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      };
  return result.sort((a, b) => {
    const result = compareFn(a, b);
    return order === 'asc' ? result : -result;
  });
}

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
export function sortByMultiple<T>(
  arr: T[] | null | undefined,
  conditions: Array<{ key: keyof T; order?: 'asc' | 'desc' }> | null | undefined
): T[] {
  if (!Array.isArray(arr) || !Array.isArray(conditions)) {
    return [];
  }
  const result = [...arr];
  return result.sort((a, b) => {
    for (const { key, order = 'asc' } of conditions) {
      const aVal = a[key];
      const bVal = b[key];
      if (aVal !== bVal) {
        return order === 'asc'
          ? aVal < bVal ? -1 : 1
          : aVal < bVal ? 1 : -1;
      }
    }
    return 0;
  });
}

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
export function sortWith<T>(arr: T[] | null | undefined, compareFn: (a: T, b: T) => number): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  const result = [...arr];
  return result.sort(compareFn);
}

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
export function stableSort<T>(arr: T[] | null | undefined, compareFn: (a: T, b: T) => number): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  const indexed = arr.map((item, index) => ({ item, index }));
  return indexed
    .sort((a, b) => {
      const result = compareFn(a.item, b.item);
      return result === 0 ? a.index - b.index : result;
    })
    .map(({ item }) => item);
} 