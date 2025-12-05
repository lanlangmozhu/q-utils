/*
 * @Date: 2025-03-19 15:39:38
 * @LastEditors: lanlangmozhu lanlangmozhu@163.com
 * @LastEditTime: 2025-08-19 10:04:42
 * @Description: 
 */
/**
 * 数组操作相关工具函数
 * @packageDocumentation
 */

/**
 * 移动数组元素到指定位置
 * @param arr - 要操作的数组
 * @param fromIndex - 要移动的元素的索引
 * @param toIndex - 目标位置的索引
 * @returns 移动后的数组
 * @example
 * ```typescript
 * move([1, 2, 3, 4], 1, 3)
 * // 返回 [1, 3, 4, 2]
 * ```
 */
export function move<T>(arr: T[] | null | undefined, fromIndex: number, toIndex: number): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  const result = [...arr];
  const [item] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, item);
  return result;
}

/**
 * 旋转数组元素
 * @param arr - 要操作的数组
 * @param count - 旋转的次数，正数向右旋转，负数向左旋转
 * @returns 旋转后的数组
 * @example
 * ```typescript
 * rotate([1, 2, 3, 4], 1)
 * // 返回 [4, 1, 2, 3]
 * ```
 */
export function rotate<T>(arr: T[] | null | undefined, count: number): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  const result = [...arr];
  const len = result.length;
  const normalizedCount = ((count % len) + len) % len;
  return [...result.slice(-normalizedCount), ...result.slice(0, -normalizedCount)];
}

/**
 * 交换数组中的两个元素
 * @param arr - 要操作的数组
 * @param index1 - 第一个元素的索引
 * @param index2 - 第二个元素的索引
 * @returns 交换后的数组
 * @example
 * ```typescript
 * swap([1, 2, 3, 4], 0, 3)
 * // 返回 [4, 2, 3, 1]
 * ```
 */
export function swap<T>(arr: T[] | null | undefined, index1: number, index2: number): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  const result = [...arr];
  [result[index1], result[index2]] = [result[index2], result[index1]];
  return result;
} 