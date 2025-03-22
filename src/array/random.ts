/**
 * 数组随机操作相关工具函数
 * @packageDocumentation
 */

/**
 * 从数组中随机获取一个元素
 * @param arr - 源数组
 * @returns 随机获取的元素
 * @example
 * ```typescript
 * randomItem([1, 2, 3, 4, 5])
 * // 可能返回 1, 2, 3, 4, 5 中的任意一个
 * ```
 */
export function randomItem<T>(arr: T[]): T | undefined {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 从数组中随机获取指定数量的元素
 * @param arr - 源数组
 * @param count - 需要获取的元素数量
 * @returns 随机获取的元素数组
 * @example
 * ```typescript
 * randomItems([1, 2, 3, 4, 5], 3)
 * // 可能返回 [1, 3, 5] 等任意三个元素的组合
 * ```
 */
export function randomItems<T>(arr: T[], count: number): T[] {
  if (!Array.isArray(arr) || count <= 0 || count > arr.length) {
    return [];
  }
  
  const result: T[] = [];
  const tempArr = [...arr];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * tempArr.length);
    result.push(tempArr[randomIndex]);
    tempArr.splice(randomIndex, 1);
  }
  
  return result;
}

/**
 * 随机打乱数组
 * @param arr - 要打乱的数组
 * @returns 打乱后的新数组
 * @example
 * ```typescript
 * shuffle([1, 2, 3, 4, 5])
 * // 可能返回 [3, 1, 5, 2, 4] 等任意排列
 * ```
 */
export function shuffle<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }
  
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  return result;
}

/**
 * 随机获取指定范围内的元素
 * @param arr - 源数组
 * @param start - 起始索引
 * @param end - 结束索引
 * @returns 指定范围内的随机元素
 * @example
 * ```typescript
 * randomRange([1, 2, 3, 4, 5], 1, 3)
 * // 可能返回 2, 3, 4 中的任意一个
 * ```
 */
export function randomRange<T>(arr: T[], start: number, end: number): T | undefined {
  if (!Array.isArray(arr) || start < 0 || end > arr.length || start > end) {
    return undefined;
  }
  
  const range = end - start;
  const randomIndex = start + Math.floor(Math.random() * range);
  return arr[randomIndex];
}
