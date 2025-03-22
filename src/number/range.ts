/**
 * 数字范围工具函数
 * @packageDocumentation
 */

/**
 * 将数字限制在指定范围内
 * @param value - 要限制的数字
 * @param min - 最小值
 * @param max - 最大值
 * @returns 限制后的数字
 * @example
 * clamp(5, 0, 10) // 5
 * clamp(-1, 0, 10) // 0
 * clamp(11, 0, 10) // 10
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * 将数字四舍五入到指定小数位数
 * @param value - 要四舍五入的数字
 * @param decimals - 小数位数
 * @returns 四舍五入后的数字
 * @example
 * round(3.14159, 2) // 3.14
 */
export const round = (value: number, decimals: number = 0): number => {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
};

/**
 * 检查数字是否在指定范围内
 * @param value - 要检查的数字
 * @param min - 最小值
 * @param max - 最大值
 * @param inclusive - 是否包含边界值，默认为 true
 * @returns 是否在范围内
 * @example
 * inRange(5, 1, 10) // true
 * inRange(5, 1, 5, false) // false
 * inRange(5, 1, 5, true) // true
 */
export function inRange(value: number, min: number, max: number, inclusive: boolean = true): boolean {
  if (isNaN(value) || isNaN(min) || isNaN(max)) {
    return false;
  }
  return inclusive
    ? value >= min && value <= max
    : value > min && value < max;
}

/**
 * 线性插值计算
 * @param start - 起始值
 * @param end - 结束值
 * @param t - 插值因子（0-1）
 * @returns 插值结果
 * @example
 * lerp(0, 100, 0.5) // 50
 * lerp(0, 100, 0) // 0
 * lerp(0, 100, 1) // 100
 */
export function lerp(start: number, end: number, t: number): number {
  if (isNaN(start) || isNaN(end) || isNaN(t)) {
    return NaN;
  }
  t = Math.max(0, Math.min(1, t));
  return start + t * (end - start);
}

/**
 * 将数字归一化到指定范围
 * @param value - 要归一化的数字
 * @param min - 最小值
 * @param max - 最大值
 * @param targetMin - 目标最小值，默认为0
 * @param targetMax - 目标最大值，默认为1
 * @returns 归一化后的数字
 * @example
 * normalize(5, 0, 10) // 0.5
 * normalize(5, 0, 10, 0, 100) // 50
 */
export function normalize(
  value: number,
  min: number,
  max: number,
  targetMin: number = 0,
  targetMax: number = 1
): number {
  if (min === max) {
    return targetMin;
  }
  return ((value - min) * (targetMax - targetMin)) / (max - min) + targetMin;
} 