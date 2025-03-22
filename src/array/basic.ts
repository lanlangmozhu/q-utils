/**
 * 基础数组操作相关工具函数
 * @packageDocumentation
 */

/**
 * 判断数组是否为空
 * @param arr - 要检查的数组
 * @returns 是否为空
 * @example
 * ```typescript
 * isEmpty([])
 * // 返回 true
 * ```
 */
export function isEmpty<T>(arr: T[] | null | undefined): boolean {
  return !Array.isArray(arr) || arr.length === 0;
}

/**
 * 获取数组第一个元素
 * @param arr - 源数组
 * @returns 第一个元素
 * @example
 * ```typescript
 * first([1, 2, 3])
 * // 返回 1
 * ```
 */
export function first<T>(arr: T[] | null | undefined): T | undefined {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

/**
 * 获取数组最后一个元素
 * @param arr - 源数组
 * @returns 最后一个元素
 * @example
 * ```typescript
 * last([1, 2, 3])
 * // 返回 3
 * ```
 */
export function last<T>(arr: T[] | null | undefined): T | undefined {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
}

/**
 * 获取数组指定范围的元素
 * @param arr - 源数组
 * @param start - 起始索引
 * @param end - 结束索引
 * @returns 指定范围的元素数组
 * @example
 * ```typescript
 * range([1, 2, 3, 4, 5], 1, 3)
 * // 返回 [2, 3]
 * ```
 */
export function range<T>(arr: T[] | null | undefined, start: number, end: number): T[] {
  if (!Array.isArray(arr) || start < 0 || end > arr.length || start > end) {
    return [];
  }
  return arr.slice(start, end);
}

/**
 * 安全获取数组元素
 * @param arr - 源数组
 * @param index - 索引
 * @param defaultValue - 默认值
 * @returns 指定索引的元素或默认值
 * @example
 * ```typescript
 * get([1, 2, 3], 1, 0)
 * // 返回 2
 * get([1, 2, 3], 5, 0)
 * // 返回 0
 * ```
 */
export function get<T>(arr: T[] | null | undefined, index: number, defaultValue?: T): T | undefined {
  if (!Array.isArray(arr) || index < 0 || index >= arr.length) {
    return defaultValue;
  }
  return arr[index];
}

/**
 * 将数组分割成指定大小的块
 * @param arr - 要分割的数组
 * @param size - 每个块的大小
 * @returns 分割后的数组块
 * @example
 * ```typescript
 * chunk([1, 2, 3, 4, 5], 2)
 * // 返回 [[1, 2], [3, 4], [5]]
 * ```
 */
export function chunk<T>(arr: T[] | null | undefined, size: number): T[][] {
  if (!Array.isArray(arr) || size < 1) {
    return [];
  }
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * 将多维数组扁平化为一维数组
 * @param arr - 要扁平化的数组
 * @param depth - 扁平化的深度，默认为 Infinity
 * @returns 扁平化后的数组
 * @example
 * ```typescript
 * flatten([1, [2, 3], [4, [5, 6]]])
 * // 返回 [1, 2, 3, 4, 5, 6]
 * ```
 */
export function flatten<T>(arr: T[] | null | undefined, depth: number = Infinity): T[] {
  if (!Array.isArray(arr) || depth < 1) {
    return arr || [];
  }
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
  }, [] as T[]);
} 