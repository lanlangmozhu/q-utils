/**
 * 判断是否为闰年
 * @param year - 要判断的年份
 * @returns 是否为闰年
 * @example
 * isLeapYear(2024) // true
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * 获取指定月份的第一天
 * @param date - 日期对象
 * @returns 该月第一天
 * @example
 * getFirstDayOfMonth(new Date('2024-03-20')) // 2024-03-01
 */
export function getFirstDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * 获取指定月份的最后一天
 * @param date - 日期对象
 * @returns 该月最后一天
 * @example
 * getLastDayOfMonth(new Date('2024-03-20')) // 2024-03-31
 */
export function getLastDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
} 