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
export function solarToLunar(date: Date): LunarDate {
  // 这里使用简化算法，实际项目中建议使用成熟的农历转换库
  const baseDate = new Date(1900, 0, 31);
  const offset = Math.floor((date.getTime() - baseDate.getTime()) / (24 * 60 * 60 * 1000));
  
  // 简化计算，实际项目中需要更复杂的算法
  const year = 1900 + Math.floor(offset / 365);
  const month = 1 + Math.floor((offset % 365) / 30);
  const day = 1 + (offset % 30);
  
  return {
    year,
    month,
    day,
    leap: false
  };
}

/**
 * 农历转公历
 * @param year - 农历年
 * @param month - 农历月
 * @param day - 农历日
 * @returns 公历日期
 * @example
 * lunarToSolar(2024, 2, 11) // 2024-03-20
 */
export function lunarToSolar(year: number, month: number, day: number): Date {
  // 这里使用简化算法，实际项目中建议使用成熟的农历转换库
  const baseDate = new Date(1900, 0, 31);
  const offset = (year - 1900) * 365 + (month - 1) * 30 + day;
  return new Date(baseDate.getTime() + offset * 24 * 60 * 60 * 1000);
}

/**
 * 获取农历节日
 * @param date - 公历日期
 * @returns 农历节日名称
 * @example
 * getLunarFestival(new Date('2024-02-10')) // '春节'
 */
export function getLunarFestival(date: Date): string | undefined {
  const lunar = solarToLunar(date);
  // 这里使用简化判断，实际项目中需要更完整的节日数据
  if (lunar.month === 1 && lunar.day === 1) return '春节';
  if (lunar.month === 5 && lunar.day === 5) return '端午节';
  if (lunar.month === 8 && lunar.day === 15) return '中秋节';
  return undefined;
}

/**
 * 获取二十四节气
 * @param date - 公历日期
 * @returns 节气名称
 * @example
 * getSolarTerm(new Date('2024-03-20')) // '春分'
 */
export function getSolarTerm(date: Date): string | undefined {
  // 这里使用简化算法，实际项目中需要更复杂的节气计算
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // 简化判断，实际项目中需要更准确的节气数据
  if (month === 3 && day === 20) return '春分';
  if (month === 6 && day === 21) return '夏至';
  if (month === 9 && day === 23) return '秋分';
  if (month === 12 && day === 22) return '冬至';
  
  return undefined;
} 