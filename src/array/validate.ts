/**
 * 验证相关工具函数
 * @packageDocumentation
 */

/**
 * 验证数组是否有效
 * @param arr - 要验证的数组
 * @returns 是否有效
 * @example
 * ```typescript
 * isValid([1, 2, 3])
 * // 返回 true
 * ```
 */
export function isValid<T>(arr: T[]): boolean {
  return Array.isArray(arr) && arr.length > 0;
}

/**
 * 比较两个数组是否相等
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param compareFn - 可选的比较函数
 * @returns 是否相等
 * @example
 * ```typescript
 * isEqual([1, 2, 3], [1, 2, 3])
 * // 返回 true
 * ```
 */
export function isEqual<T>(
  arr1: T[],
  arr2: T[],
  compareFn?: (a: T, b: T) => boolean
): boolean {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => {
    return compareFn ? compareFn(item, arr2[index]) : item === arr2[index];
  });
}

/**
 * 检查是否所有元素都满足条件
 * @param arr - 要检查的数组
 * @param predicate - 判断函数
 * @returns 是否所有元素都满足条件
 * @example
 * ```typescript
 * allMatch([1, 2, 3], n => n > 0)
 * // 返回 true
 * ```
 */
export function allMatch<T>(arr: T[], predicate: (item: T) => boolean): boolean {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every(predicate);
}

/**
 * 检查是否存在满足条件的元素
 * @param arr - 要检查的数组
 * @param predicate - 判断函数
 * @returns 是否存在满足条件的元素
 * @example
 * ```typescript
 * anyMatch([1, 2, 3], n => n === 2)
 * // 返回 true
 * ```
 */
export function anyMatch<T>(arr: T[], predicate: (item: T) => boolean): boolean {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.some(predicate);
}

/**
 * 检查是否没有元素满足条件
 * @param arr - 要检查的数组
 * @param predicate - 判断函数
 * @returns 是否没有元素满足条件
 * @example
 * ```typescript
 * noneMatch([1, 2, 3], n => n < 0)
 * // 返回 true
 * ```
 */
export function noneMatch<T>(arr: T[], predicate: (item: T) => boolean): boolean {
  if (!Array.isArray(arr)) {
    return true;
  }
  return !arr.some(predicate);
} 