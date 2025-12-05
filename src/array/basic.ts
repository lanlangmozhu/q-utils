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