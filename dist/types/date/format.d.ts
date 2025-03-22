/**
 * 格式化日期
 * @param date - 要格式化的日期
 * @param format - 格式化模式
 * @returns 格式化后的日期字符串
 * @example
 * formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss') // '2024-03-20 14:30:00'
 */
export declare function formatDate(date: Date, format?: string): string;
/**
 * 获取相对时间描述
 * @param date - 要计算的日期
 * @returns 相对时间描述
 * @example
 * timeAgo(new Date(Date.now() - 3600000)) // '1小时前'
 */
export declare function timeAgo(date: Date): string;
//# sourceMappingURL=format.d.ts.map