import {
  addDays,
  addMonths,
  addYears,
  getDaysInMonth,
  getWeekNumber
} from '../../src/date/calculation';

describe('Date Calculation Operations', () => {
  describe('addDays', () => {
    test('应该正确添加天数', () => {
      const date = new Date('2024-03-20');
      const result = addDays(date, 5);
      expect(result.toISOString().split('T')[0]).toBe('2024-03-25');
    });

    test('应该正确处理负数天数', () => {
      const date = new Date('2024-03-20');
      const result = addDays(date, -5);
      expect(result.toISOString().split('T')[0]).toBe('2024-03-15');
    });

    test('应该正确处理月份边界', () => {
      const date = new Date('2024-03-30');
      const result = addDays(date, 2);
      expect(result.toISOString().split('T')[0]).toBe('2024-04-01');
    });
  });

  describe('addMonths', () => {
    test('应该正确添加月份', () => {
      const date = new Date('2024-03-20');
      const result = addMonths(date, 2);
      expect(result.toISOString().split('T')[0]).toBe('2024-05-20');
    });

    test('应该正确处理负数月份', () => {
      const date = new Date('2024-03-20');
      const result = addMonths(date, -1);
      expect(result.toISOString().split('T')[0]).toBe('2024-02-20');
    });

    test('应该正确处理年末月份', () => {
      const date = new Date('2024-12-20');
      const result = addMonths(date, 1);
      expect(result.toISOString().split('T')[0]).toBe('2025-01-20');
    });
  });

  describe('addYears', () => {
    test('应该正确添加年份', () => {
      const date = new Date('2024-03-20');
      const result = addYears(date, 1);
      expect(result.toISOString().split('T')[0]).toBe('2025-03-20');
    });

    test('应该正确处理负数年份', () => {
      const date = new Date('2024-03-20');
      const result = addYears(date, -1);
      expect(result.toISOString().split('T')[0]).toBe('2023-03-20');
    });

    test('应该正确处理闰年', () => {
      const date = new Date('2024-02-29');
      const result = addYears(date, 1);
      expect(result.toISOString().split('T')[0]).toBe('2025-02-28');
    });
  });

  describe('getDaysInMonth', () => {
    test('应该正确获取月份天数', () => {
      expect(getDaysInMonth(2024, 0)).toBe(31); // 一月
      expect(getDaysInMonth(2024, 1)).toBe(29); // 二月（闰年）
      expect(getDaysInMonth(2024, 2)).toBe(31); // 三月
      expect(getDaysInMonth(2024, 3)).toBe(30); // 四月
      expect(getDaysInMonth(2024, 4)).toBe(31); // 五月
      expect(getDaysInMonth(2024, 5)).toBe(30); // 六月
      expect(getDaysInMonth(2024, 6)).toBe(31); // 七月
      expect(getDaysInMonth(2024, 7)).toBe(31); // 八月
      expect(getDaysInMonth(2024, 8)).toBe(30); // 九月
      expect(getDaysInMonth(2024, 9)).toBe(31); // 十月
      expect(getDaysInMonth(2024, 10)).toBe(30); // 十一月
      expect(getDaysInMonth(2024, 11)).toBe(31); // 十二月
    });

    test('应该正确处理非闰年二月', () => {
      expect(getDaysInMonth(2023, 1)).toBe(28); // 2023年二月
    });
  });

  describe('getWeekNumber', () => {
    test('应该正确计算周数', () => {
      expect(getWeekNumber(new Date('2024-01-01'))).toBe(1);
      expect(getWeekNumber(new Date('2024-03-20'))).toBe(12);
      expect(getWeekNumber(new Date('2024-12-31'))).toBe(1);
    });

    test('应该正确处理跨年的周数', () => {
      expect(getWeekNumber(new Date('2023-12-31'))).toBe(52);
      expect(getWeekNumber(new Date('2024-01-01'))).toBe(1);
    });

    test('应该正确处理闰年', () => {
      expect(getWeekNumber(new Date('2024-02-29'))).toBe(9);
    });
  });
}); 