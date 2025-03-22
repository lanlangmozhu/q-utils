import { getFirstDayOfMonth, getLastDayOfMonth } from './special';

/**
 * 获取日期的开始时间（00:00:00）
 * @param date - 日期对象
 * @returns 开始时间
 * @example
 * startOfDay(new Date('2024-03-20 14:30:00')) // 2024-03-20 00:00:00
 */
export function startOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * 获取日期的结束时间（23:59:59）
 * @param date - 日期对象
 * @returns 结束时间
 * @example
 * endOfDay(new Date('2024-03-20 14:30:00')) // 2024-03-20 23:59:59
 */
export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * 获取周的开始时间
 * @param date - 日期对象
 * @returns 周开始时间
 * @example
 * startOfWeek(new Date('2024-03-20')) // 2024-03-18 00:00:00
 */
export function startOfWeek(date: Date): Date {
  const result = new Date(date);
  const day = result.getDay() || 7;
  result.setDate(result.getDate() - day + 1);
  return startOfDay(result);
}

/**
 * 获取周的结束时间
 * @param date - 日期对象
 * @returns 周结束时间
 * @example
 * endOfWeek(new Date('2024-03-20')) // 2024-03-24 23:59:59
 */
export function endOfWeek(date: Date): Date {
  const result = new Date(date);
  const day = result.getDay() || 7;
  result.setDate(result.getDate() + (7 - day));
  return endOfDay(result);
}

/**
 * 获取月份的开始时间
 * @param date - 日期对象
 * @returns 月开始时间
 * @example
 * startOfMonth(new Date('2024-03-20')) // 2024-03-01 00:00:00
 */
export function startOfMonth(date: Date): Date {
  return startOfDay(getFirstDayOfMonth(date));
}

/**
 * 获取月份的结束时间
 * @param date - 日期对象
 * @returns 月结束时间
 * @example
 * endOfMonth(new Date('2024-03-20')) // 2024-03-31 23:59:59
 */
export function endOfMonth(date: Date): Date {
  return endOfDay(getLastDayOfMonth(date));
} 