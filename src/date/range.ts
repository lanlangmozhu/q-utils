/**
 * 判断日期是否在指定范围内
 * @param date - 要检查的日期
 * @param startDate - 范围开始日期
 * @param endDate - 范围结束日期
 * @returns 是否在范围内
 * @example
 * isDateInRange(new Date('2024-03-20'), new Date('2024-03-19'), new Date('2024-03-21')) // true
 */
export function isDateInRange(date: Date, startDate: Date, endDate: Date): boolean {
  const time = date.getTime();
  return time >= startDate.getTime() && time <= endDate.getTime();
}

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
export function getDateRangeIntersection(
  range1: [Date, Date],
  range2: [Date, Date]
): [Date, Date] | null {
  const [start1, end1] = range1;
  const [start2, end2] = range2;

  const start = new Date(Math.max(start1.getTime(), start2.getTime()));
  const end = new Date(Math.min(end1.getTime(), end2.getTime()));

  if (start > end) return null;
  return [start, end];
} 