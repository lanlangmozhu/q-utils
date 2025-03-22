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
export function count<T>(arr: T[] | null | undefined): Record<string, number> {
  if (!Array.isArray(arr)) {
    return {};
  }
  return arr.reduce((acc, item) => {
    const key = String(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

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
export function stats(arr: number[] | null | undefined): {
  sum: number;
  avg: number;
  min: number;
  max: number;
  length: number;
} {
  if (!Array.isArray(arr) || arr.length === 0) {
    return {
      sum: 0,
      avg: 0,
      min: 0,
      max: 0,
      length: 0
    };
  }
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return {
    sum,
    avg: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
} 