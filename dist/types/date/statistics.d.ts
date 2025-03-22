/**
 * 计算工作日数量
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 工作日数量
 * @example
 * getWorkingDays(new Date('2024-03-20'), new Date('2024-03-25')) // 4
 */
export declare function getWorkingDays(startDate: Date, endDate: Date): number;
/**
 * 获取两个日期之间的所有日期
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 日期数组
 * @example
 * getDatesBetween(new Date('2024-03-20'), new Date('2024-03-22'))
 * // [2024-03-20, 2024-03-21, 2024-03-22]
 */
export declare function getDatesBetween(startDate: Date, endDate: Date): Date[];
//# sourceMappingURL=statistics.d.ts.map