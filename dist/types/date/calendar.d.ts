interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
}
/**
 * 生成月历数据
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 月历数据
 * @example
 * generateCalendarMonth(2024, 2) // 生成2024年3月的日历数据
 */
export declare function generateCalendarMonth(year: number, month: number): CalendarDay[];
/**
 * 生成周历数据
 * @param date - 日期对象
 * @returns 周历数据
 * @example
 * generateCalendarWeek(new Date('2024-03-20')) // 生成包含该日期的周历数据
 */
export declare function generateCalendarWeek(date: Date): Date[];
/**
 * 获取日历网格
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 日历网格数据
 * @example
 * getCalendarGrid(2024, 2) // 生成2024年3月的日历网格
 */
export declare function getCalendarGrid(year: number, month: number): Date[][];
export {};
//# sourceMappingURL=calendar.d.ts.map