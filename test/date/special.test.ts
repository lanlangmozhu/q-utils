import {
  isLeapYear,
  getFirstDayOfMonth,
  getLastDayOfMonth
} from '../../src/date/special';

describe('Special Date Operations', () => {
  describe('isLeapYear', () => {
    test('应该正确判断闰年', () => {
      expect(isLeapYear(2024)).toBe(true);  // 能被4整除但不能被100整除
      expect(isLeapYear(2000)).toBe(true);  // 能被400整除
      expect(isLeapYear(2023)).toBe(false); // 不能被4整除
      expect(isLeapYear(2100)).toBe(false); // 能被100整除但不能被400整除
    });

    test('应该正确处理边界年份', () => {
      expect(isLeapYear(0)).toBe(true);
      expect(isLeapYear(-4)).toBe(true);
      expect(isLeapYear(-100)).toBe(false);
      expect(isLeapYear(-400)).toBe(true);
    });
  });

  describe('getFirstDayOfMonth', () => {
    test('应该正确获取月份第一天', () => {
      const date = new Date('2024-03-20');
      const result = getFirstDayOfMonth(date);
      expect(result.toISOString().split('T')[0]).toBe('2024-03-01');
    });

    test('应该正确处理年初月份', () => {
      const date = new Date('2024-01-15');
      const result = getFirstDayOfMonth(date);
      expect(result.toISOString().split('T')[0]).toBe('2024-01-01');
    });

    test('应该正确处理年末月份', () => {
      const date = new Date('2024-12-25');
      const result = getFirstDayOfMonth(date);
      expect(result.toISOString().split('T')[0]).toBe('2024-12-01');
    });

    test('应该正确处理时间部分', () => {
      const date = new Date('2024-03-20T12:00:00');
      const result = getFirstDayOfMonth(date);
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
      expect(result.getMilliseconds()).toBe(0);
    });
  });

  describe('getLastDayOfMonth', () => {
    test('应该正确获取月份最后一天', () => {
      const date = new Date('2024-03-20');
      const result = getLastDayOfMonth(date);
      expect(result.toISOString().split('T')[0]).toBe('2024-03-31');
    });

    test('应该正确处理不同天数的月份', () => {
      const date1 = new Date('2024-02-15');
      const date2 = new Date('2024-04-15');
      const date3 = new Date('2024-06-15');
      
      expect(getLastDayOfMonth(date1).toISOString().split('T')[0]).toBe('2024-02-29'); // 闰年2月
      expect(getLastDayOfMonth(date2).toISOString().split('T')[0]).toBe('2024-04-30'); // 30天
      expect(getLastDayOfMonth(date3).toISOString().split('T')[0]).toBe('2024-06-30'); // 30天
    });

    test('应该正确处理年末月份', () => {
      const date = new Date('2024-12-25');
      const result = getLastDayOfMonth(date);
      expect(result.toISOString().split('T')[0]).toBe('2024-12-31');
    });

    test('应该正确处理时间部分', () => {
      const date = new Date('2024-03-20T12:00:00');
      const result = getLastDayOfMonth(date);
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
      expect(result.getMilliseconds()).toBe(999);
    });
  });
}); 