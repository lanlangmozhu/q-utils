/**
 * 转换时区
 * @param date - 要转换的日期
 * @param fromZone - 源时区
 * @param toZone - 目标时区
 * @returns 转换后的日期
 * @example
 * convertTimeZone(new Date(), 'UTC', 'Asia/Shanghai')
 */
export function convertTimeZone(date: Date, fromZone: string, toZone: string): Date {
  const fromOffset = getTimezoneOffset(fromZone);
  const toOffset = getTimezoneOffset(toZone);
  const diff = toOffset - fromOffset;
  
  const result = new Date(date.getTime() + diff * 60 * 60 * 1000);
  return result;
}

/**
 * 获取时区偏移量（小时）
 * @param timezone - 时区名称
 * @returns 偏移量
 * @example
 * getTimezoneOffset('Asia/Shanghai') // 8
 */
export function getTimezoneOffset(timezone: string): number {
  // 这里使用简化判断，实际项目中需要更完整的时区数据
  const timezoneOffsets: Record<string, number> = {
    'UTC': 0,
    'Asia/Shanghai': 8,
    'America/New_York': -4,
    'Europe/London': 0,
    'Asia/Tokyo': 9
  };
  
  return timezoneOffsets[timezone] || 0;
}

/**
 * UTC时间转本地时间
 * @param date - UTC时间
 * @returns 本地时间
 * @example
 * utcToLocal(new Date('2024-03-20T00:00:00Z')) // 2024-03-20 08:00:00
 */
export function utcToLocal(date: Date): Date {
  return convertTimeZone(date, 'UTC', Intl.DateTimeFormat().resolvedOptions().timeZone);
}

/**
 * 本地时间转UTC时间
 * @param date - 本地时间
 * @returns UTC时间
 * @example
 * localToUtc(new Date('2024-03-20 08:00:00')) // 2024-03-20T00:00:00Z
 */
export function localToUtc(date: Date): Date {
  return convertTimeZone(date, Intl.DateTimeFormat().resolvedOptions().timeZone, 'UTC');
} 