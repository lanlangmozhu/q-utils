import {
  generateCalendarMonth,
  generateCalendarWeek,
  getCalendarGrid
} from '../../src/date/calendar';

describe('Calendar Operations', () => {
  describe('generateCalendarMonth', () => {
    test('应该正确生成月历数据', () => {
      const result = generateCalendarMonth(2024, 2); // 2024年3月
      
      expect(result.length).toBe(42); // 6周 * 7天
      expect(result[0].date.getMonth()).toBe(1); // 2月
      expect(result[result.length - 1].date.getMonth()).toBe(3); // 4月
    });

    test('应该正确标记当前月份', () => {
      const result = generateCalendarMonth(2024, 2);
      
      // 检查当前月份的日期
      const currentMonthDays = result.filter(day => day.isCurrentMonth);
      expect(currentMonthDays.length).toBe(31); // 3月有31天
      expect(currentMonthDays.every(day => day.date.getMonth() === 2)).toBe(true);
    });

    test('应该正确标记周末', () => {
      const result = generateCalendarMonth(2024, 2);
      
      // 检查周末标记
      const weekendDays = result.filter(day => day.isWeekend);
      expect(weekendDays.length).toBe(12); // 6周 * 2个周末
      expect(weekendDays.every(day => {
        const dayOfWeek = day.date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
      })).toBe(true);
    });

    test('应该正确处理年初月份', () => {
      const result = generateCalendarMonth(2024, 0); // 2024年1月
      
      expect(result[0].date.getFullYear()).toBe(2023);
      expect(result[0].date.getMonth()).toBe(11); // 12月
    });

    test('应该正确处理年末月份', () => {
      const result = generateCalendarMonth(2024, 11); // 2024年12月
      
      expect(result[result.length - 1].date.getFullYear()).toBe(2025);
      expect(result[result.length - 1].date.getMonth()).toBe(0); // 1月
    });
  });

  describe('generateCalendarWeek', () => {
    test('应该正确生成周历数据', () => {
      const date = new Date('2024-03-20'); // 周三
      const result = generateCalendarWeek(date);
      
      expect(result.length).toBe(7);
      expect(result[0].getDay()).toBe(1); // 从周一开始
      expect(result[6].getDay()).toBe(0); // 周日结束
    });

    test('应该正确处理跨月的周', () => {
      const date = new Date('2024-03-31'); // 周日
      const result = generateCalendarWeek(date);
      
      expect(result[0].getMonth()).toBe(2); // 3月
      expect(result[6].getMonth()).toBe(3); // 4月
    });

    test('应该正确处理跨年的周', () => {
      const date = new Date('2024-01-01'); // 周一
      const result = generateCalendarWeek(date);
      
      expect(result[0].getFullYear()).toBe(2023);
      expect(result[6].getFullYear()).toBe(2024);
    });
  });

  describe('getCalendarGrid', () => {
    test('应该正确生成日历网格', () => {
      const result = getCalendarGrid(2024, 2); // 2024年3月
      
      expect(result.length).toBe(6); // 6行
      expect(result.every(row => row.length === 7)).toBe(true); // 每行7天
    });

    test('应该保持日期顺序', () => {
      const result = getCalendarGrid(2024, 2);
      
      // 检查每行的日期顺序
      result.forEach(row => {
        for (let i = 1; i < row.length; i++) {
          expect(row[i].getTime()).toBeGreaterThan(row[i - 1].getTime());
        }
      });
    });

    test('应该正确处理不同天数的月份', () => {
      const result1 = getCalendarGrid(2024, 1); // 2月
      const result2 = getCalendarGrid(2024, 2); // 3月
      
      expect(result1.length).toBe(5); // 2月需要5行
      expect(result2.length).toBe(6); // 3月需要6行
    });
  });
}); 