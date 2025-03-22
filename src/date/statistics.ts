/**
 * 计算工作日数量
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 工作日数量
 * @example
 * getWorkingDays(new Date('2024-03-20'), new Date('2024-03-25')) // 4
 */
export function getWorkingDays(startDate: Date, endDate: Date): number {
  let count = 0;
  const curDate = new Date(startDate);
  
  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
    }
    curDate.setDate(curDate.getDate() + 1);
  }
  
  return count;
}

/**
 * 获取两个日期之间的所有日期
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 日期数组
 * @example
 * getDatesBetween(new Date('2024-03-20'), new Date('2024-03-22'))
 * // [2024-03-20, 2024-03-21, 2024-03-22]
 */
export function getDatesBetween(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = [];
  const curDate = new Date(startDate);
  
  while (curDate <= endDate) {
    dates.push(new Date(curDate));
    curDate.setDate(curDate.getDate() + 1);
  }
  
  return dates;
} 