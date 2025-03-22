/**
 * 添加天数
 * @param date - 基准日期
 * @param days - 要添加的天数
 * @returns 新的日期对象
 * @example
 * addDays(new Date('2024-03-20'), 5) // 2024-03-25
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * 添加月份
 * @param date - 基准日期
 * @param months - 要添加的月份数
 * @returns 新的日期对象
 * @example
 * addMonths(new Date('2024-03-20'), 2) // 2024-05-20
 */
export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

/**
 * 添加年份
 * @param date - 基准日期
 * @param years - 要添加的年份数
 * @returns 新的日期对象
 * @example
 * addYears(new Date('2024-03-20'), 1) // 2025-03-20
 */
export function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

/**
 * 获取指定月份的天数
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 该月的天数
 * @example
 * getDaysInMonth(2024, 1) // 29 (2024是闰年)
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * 获取日期是当年的第几周
 * @param date - 要计算的日期
 * @returns 周数
 * @example
 * getWeekNumber(new Date('2024-03-20')) // 12
 */
export function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
} 