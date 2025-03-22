interface LunarDate {
    year: number;
    month: number;
    day: number;
    leap: boolean;
    festival?: string;
}
/**
 * 公历转农历
 * @param date - 公历日期
 * @returns 农历日期信息
 * @example
 * solarToLunar(new Date('2024-03-20')) // { year: 2024, month: 2, day: 11, leap: false }
 */
export declare function solarToLunar(date: Date): LunarDate;
/**
 * 农历转公历
 * @param year - 农历年
 * @param month - 农历月
 * @param day - 农历日
 * @returns 公历日期
 * @example
 * lunarToSolar(2024, 2, 11) // 2024-03-20
 */
export declare function lunarToSolar(year: number, month: number, day: number): Date;
/**
 * 获取农历节日
 * @param date - 公历日期
 * @returns 农历节日名称
 * @example
 * getLunarFestival(new Date('2024-02-10')) // '春节'
 */
export declare function getLunarFestival(date: Date): string | undefined;
/**
 * 获取二十四节气
 * @param date - 公历日期
 * @returns 节气名称
 * @example
 * getSolarTerm(new Date('2024-03-20')) // '春分'
 */
export declare function getSolarTerm(date: Date): string | undefined;
export {};
//# sourceMappingURL=lunar.d.ts.map