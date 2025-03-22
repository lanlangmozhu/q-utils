/**
 * 添加天数
 * @param date - 基准日期
 * @param days - 要添加的天数
 * @returns 新的日期对象
 * @example
 * addDays(new Date('2024-03-20'), 5) // 2024-03-25
 */
export declare function addDays(date: Date, days: number): Date;
/**
 * 添加月份
 * @param date - 基准日期
 * @param months - 要添加的月份数
 * @returns 新的日期对象
 * @example
 * addMonths(new Date('2024-03-20'), 2) // 2024-05-20
 */
export declare function addMonths(date: Date, months: number): Date;
/**
 * 添加年份
 * @param date - 基准日期
 * @param years - 要添加的年份数
 * @returns 新的日期对象
 * @example
 * addYears(new Date('2024-03-20'), 1) // 2025-03-20
 */
export declare function addYears(date: Date, years: number): Date;
/**
 * 获取指定月份的天数
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 该月的天数
 * @example
 * getDaysInMonth(2024, 1) // 29 (2024是闰年)
 */
export declare function getDaysInMonth(year: number, month: number): number;
/**
 * 获取日期是当年的第几周
 * @param date - 要计算的日期
 * @returns 周数
 * @example
 * getWeekNumber(new Date('2024-03-20')) // 12
 */
export declare function getWeekNumber(date: Date): number;
//# sourceMappingURL=calculation.d.ts.map