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
export function difference<T>(
  arr1: T[] | null | undefined,
  arr2: T[] | null | undefined,
  compareFn?: (a: T, b: T) => boolean
): T[] {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  return arr1.filter(item => {
    return !arr2.some(otherItem => {
      return compareFn ? compareFn(item, otherItem) : item === otherItem;
    });
  });
}

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
export function intersection<T>(
  arr1: T[] | null | undefined,
  arr2: T[] | null | undefined,
  compareFn?: (a: T, b: T) => boolean
): T[] {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  return arr1.filter(item => {
    return arr2.some(otherItem => {
      return compareFn ? compareFn(item, otherItem) : item === otherItem;
    });
  });
}

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
export function union<T>(
  arr1: T[] | null | undefined,
  arr2: T[] | null | undefined,
  compareFn?: (a: T, b: T) => boolean
): T[] {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const result = [...arr1];
  arr2.forEach(item => {
    if (!result.some(existingItem => {
      return compareFn ? compareFn(item, existingItem) : item === existingItem;
    })) {
      result.push(item);
    }
  });
  return result;
}

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
export function includes<T>(
  arr: T[] | null | undefined,
  subArr: T[] | null | undefined,
  compareFn?: (a: T, b: T) => boolean
): boolean {
  if (!Array.isArray(arr) || !Array.isArray(subArr) || subArr.length > arr.length) {
    return false;
  }
  
  for (let i = 0; i <= arr.length - subArr.length; i++) {
    let found = true;
    for (let j = 0; j < subArr.length; j++) {
      const matches = compareFn
        ? compareFn(arr[i + j], subArr[j])
        : arr[i + j] === subArr[j];
      if (!matches) {
        found = false;
        break;
      }
    }
    if (found) {
      return true;
    }
  }
  return false;
} 