/**
 * 去重相关工具函数
 * @packageDocumentation
 */

/**
 * 数组去重
 * @param arr - 要去重的数组
 * @returns 去重后的数组
 * @example
 * ```typescript
 * unique([1, 2, 1, 3, 2, 1])
 * // 返回 [1, 2, 3]
 * ```
 */
export function unique<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  return Array.from(new Set(arr));
}

/**
 * 根据指定条件去重
 * @param arr - 要去重的数组
 * @param keyOrFn - 去重的键或比较函数
 * @returns 去重后的数组
 * @example
 * ```typescript
 * uniqueBy([{ id: 1, value: 1 }, { id: 2, value: 1 }, { id: 3, value: 2 }], 'value')
 * // 返回 [{ id: 1, value: 1 }, { id: 3, value: 2 }]
 * ```
 */
export function uniqueBy<T, K extends keyof T | string>(
  arr: T[],
  keyOrFn: K | ((a: T, b: T) => boolean)
): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  const seen = new Set();
  return arr.filter(item => {
    const key = typeof keyOrFn === 'function'
      ? keyOrFn(item, item)
      : item[keyOrFn as keyof T];
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
} 