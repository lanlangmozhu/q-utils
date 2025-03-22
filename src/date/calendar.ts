interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
}

/**
 * 判断是否是今天
 * @param date - 要检查的日期
 * @returns 是否是今天
 */
function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

/**
 * 获取一周的开始日期
 * @param date - 日期对象
 * @returns 一周的开始日期
 */
function getStartOfWeek(date: Date): Date {
  const day = date.getDay() || 7;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day + 1);
}

/**
 * 添加天数
 * @param date - 日期对象
 * @param days - 要添加的天数
 * @returns 新的日期对象
 */
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * 生成月历数据
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 月历数据
 * @example
 * generateCalendarMonth(2024, 2) // 生成2024年3月的日历数据
 */
export function generateCalendarMonth(year: number, month: number): CalendarDay[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstDayWeek = firstDay.getDay() || 7;
  
  const days: CalendarDay[] = [];
  
  // 添加上个月的日期
  const prevMonthDays = firstDayWeek - 1;
  const prevMonth = new Date(year, month, 0);
  for (let i = prevMonthDays - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonth.getDate() - i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6
    });
  }
  
  // 添加当前月的日期
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6
    });
  }
  
  // 添加下个月的日期
  const remainingDays = 42 - days.length; // 保持6行
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6
    });
  }
  
  return days;
}

/**
 * 生成周历数据
 * @param date - 日期对象
 * @returns 周历数据
 * @example
 * generateCalendarWeek(new Date('2024-03-20')) // 生成包含该日期的周历数据
 */
export function generateCalendarWeek(date: Date): Date[] {
  const week: Date[] = [];
  const weekStart = getStartOfWeek(date);
  
  for (let i = 0; i < 7; i++) {
    week.push(addDays(weekStart, i));
  }
  
  return week;
}

/**
 * 获取日历网格
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 日历网格数据
 * @example
 * getCalendarGrid(2024, 2) // 生成2024年3月的日历网格
 */
export function getCalendarGrid(year: number, month: number): Date[][] {
  const days = generateCalendarMonth(year, month);
  const grid: Date[][] = [];
  
  for (let i = 0; i < 6; i++) {
    grid.push(days.slice(i * 7, (i + 1) * 7).map(day => day.date));
  }
  
  return grid;
} 