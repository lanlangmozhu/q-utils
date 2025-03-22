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
export function groupBy<T, K extends keyof T | string>(
  arr: T[] | null | undefined,
  keyOrFn: K | ((item: T) => string | number)
): Record<string, T[]> {
  if (!Array.isArray(arr)) {
    return {};
  }
  return arr.reduce((groups, item) => {
    const key = typeof keyOrFn === 'function'
      ? keyOrFn(item)
      : String(item[keyOrFn as keyof T]);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

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
export function chunkGroups<T>(arr: T[] | null | undefined, size: number): T[][] {
  if (!Array.isArray(arr) || size < 1) {
    return [];
  }
  return Array.from(
    { length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size)
  );
}

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
export function splitIntoGroups<T>(
  arr: T[] | null | undefined,
  count: number,
  options: { balanced?: boolean } | null | undefined = {}
): T[][] {
  if (!Array.isArray(arr) || count < 1) {
    return [];
  }

  const { balanced = false } = options || {};
  const result: T[][] = Array.from({ length: count }, () => []);
  
  if (balanced) {
    // 平均分配元素
    arr.forEach((item, index) => {
      result[index % count].push(item);
    });
  } else {
    // 按顺序分配元素
    const size = Math.ceil(arr.length / count);
    for (let i = 0; i < count; i++) {
      result[i] = arr.slice(i * size, (i + 1) * size);
    }
  }

  // 移除空数组
  return result.filter(group => group.length > 0);
} 