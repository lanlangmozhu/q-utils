/**
 * 转换时区
 * @param date - 要转换的日期
 * @param fromZone - 源时区
 * @param toZone - 目标时区
 * @returns 转换后的日期
 * @example
 * convertTimeZone(new Date(), 'UTC', 'Asia/Shanghai')
 */
export declare function convertTimeZone(date: Date, fromZone: string, toZone: string): Date;
/**
 * 获取时区偏移量（小时）
 * @param timezone - 时区名称
 * @returns 偏移量
 * @example
 * getTimezoneOffset('Asia/Shanghai') // 8
 */
export declare function getTimezoneOffset(timezone: string): number;
/**
 * UTC时间转本地时间
 * @param date - UTC时间
 * @returns 本地时间
 * @example
 * utcToLocal(new Date('2024-03-20T00:00:00Z')) // 2024-03-20 08:00:00
 */
export declare function utcToLocal(date: Date): Date;
/**
 * 本地时间转UTC时间
 * @param date - 本地时间
 * @returns UTC时间
 * @example
 * localToUtc(new Date('2024-03-20 08:00:00')) // 2024-03-20T00:00:00Z
 */
export declare function localToUtc(date: Date): Date;
//# sourceMappingURL=timezone.d.ts.map