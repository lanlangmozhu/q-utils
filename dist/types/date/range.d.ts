/**
 * 判断日期是否在指定范围内
 * @param date - 要检查的日期
 * @param startDate - 范围开始日期
 * @param endDate - 范围结束日期
 * @returns 是否在范围内
 * @example
 * isDateInRange(new Date('2024-03-20'), new Date('2024-03-19'), new Date('2024-03-21')) // true
 */
export declare function isDateInRange(date: Date, startDate: Date, endDate: Date): boolean;
/**
 * 计算两个日期范围的交集
 * @param range1 - 第一个日期范围
 * @param range2 - 第二个日期范围
 * @returns 交集范围或null
 * @example
 * getDateRangeIntersection(
 *   [new Date('2024-03-19'), new Date('2024-03-21')],
 *   [new Date('2024-03-20'), new Date('2024-03-22')]
 * ) // [2024-03-20, 2024-03-21]
 */
export declare function getDateRangeIntersection(range1: [Date, Date], range2: [Date, Date]): [Date, Date] | null;
//# sourceMappingURL=range.d.ts.map