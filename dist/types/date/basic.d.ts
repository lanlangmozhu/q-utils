/**
 * 判断是否为有效的日期对象
 * @param date - 要检查的值
 * @returns 是否为有效的日期对象
 * @example
 * isDate(new Date()) // true
 * isDate('2024-03-20') // false
 */
export declare function isDate(date: any): boolean;
/**
 * 判断日期是否为今天
 * @param date - 要检查的日期
 * @returns 是否为今天
 * @example
 * isToday(new Date()) // true
 * isToday(new Date('2024-03-19')) // false
 */
export declare function isToday(date: Date): boolean;
/**
 * 判断日期是否在指定日期之前
 * @param date - 要检查的日期
 * @param compareDate - 比较的日期
 * @returns 是否在指定日期之前
 * @example
 * isBefore(new Date('2024-03-19'), new Date('2024-03-20')) // true
 */
export declare function isBefore(date: Date, compareDate: Date): boolean;
/**
 * 判断日期是否在指定日期之后
 * @param date - 要检查的日期
 * @param compareDate - 比较的日期
 * @returns 是否在指定日期之后
 * @example
 * isAfter(new Date('2024-03-20'), new Date('2024-03-19')) // true
 */
export declare function isAfter(date: Date, compareDate: Date): boolean;
/**
 * 判断两个日期是否为同一天
 * @param date1 - 第一个日期
 * @param date2 - 第二个日期
 * @returns 是否为同一天
 * @example
 * isSameDay(new Date('2024-03-20'), new Date('2024-03-20')) // true
 */
export declare function isSameDay(date1: Date, date2: Date): boolean;
//# sourceMappingURL=basic.d.ts.map