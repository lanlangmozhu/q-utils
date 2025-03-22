/**
 * 随机数生成工具函数
 */

/**
 * 生成指定范围内的随机数
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 随机数
 * @example
 * random(1, 10) // 1-10 之间的随机数
 * random(1, 10, false) // 2-9 之间的随机数
 */
export function random(min: number, max: number, inclusive: boolean = true): number {
  if (isNaN(min) || isNaN(max)) {
    return NaN;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  const range = max - min + (inclusive ? 0 : 0);
  return min + Math.random() * range;
}

/**
 * 生成指定范围内的随机整数
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 随机整数
 * @example
 * randomInt(1, 10) // 1-10 之间的随机整数
 * randomInt(1, 10, false) // 2-9 之间的随机整数
 */
export function randomInt(min: number, max: number, inclusive: boolean = true): number {
  if (isNaN(min) || isNaN(max)) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + (inclusive ? 1 : -1))) + min;
}

/**
 * 生成指定长度的随机数字字符串
 * @param length - 字符串长度
 * @returns 随机数字字符串
 * @example
 * randomDigits(4) // 例如 "3751"
 * randomDigits(6) // 例如 "159374"
 */
export function randomDigits(length: number): string {
  if (length <= 0) return '';
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomInt(0, 9).toString();
  }
  
  return result;
}

/**
 * 生成UUID v4（随机UUID）
 * @returns UUID字符串
 * @example
 * randomUUID() // 例如 "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 */
export function randomUUID(): string {
  // 检查是否原生支持crypto.randomUUID
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  
  // 自行实现UUID v4的逻辑
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 随机打乱数组
 * @param array - 要打乱的数组
 * @returns 打乱后的数组
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [3, 1, 4, 2, 5]
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
} 