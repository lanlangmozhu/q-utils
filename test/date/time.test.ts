import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth
} from '../../src/date/time';

describe('Time Operations', () => {
  describe('startOfDay', () => {
    test('应该正确获取日期的开始时间', () => {
      const date = new Date('2024-03-20T14:30:00');
      const result = startOfDay(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(20);
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
      expect(result.getMilliseconds()).toBe(0);
    });

    test('应该正确处理已经是开始时间的日期', () => {
      const date = new Date('2024-03-20T00:00:00');
      const result = startOfDay(date);
      
      expect(result.getTime()).toBe(date.getTime());
    });
  });

  describe('endOfDay', () => {
    test('应该正确获取日期的结束时间', () => {
      const date = new Date('2024-03-20T14:30:00');
      const result = endOfDay(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(20);
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
      expect(result.getMilliseconds()).toBe(999);
    });

    test('应该正确处理已经是结束时间的日期', () => {
      const date = new Date('2024-03-20T23:59:59.999');
      const result = endOfDay(date);
      
      expect(result.getTime()).toBe(date.getTime());
    });
  });

  describe('startOfWeek', () => {
    test('应该正确获取周的开始时间', () => {
      const date = new Date('2024-03-20'); // 周三
      const result = startOfWeek(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(18); // 周一
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
      expect(result.getMilliseconds()).toBe(0);
    });

    test('应该正确处理跨月的周开始时间', () => {
      const date = new Date('2024-03-03'); // 周日
      const result = startOfWeek(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(1); // 2月
      expect(result.getDate()).toBe(26); // 周一
    });
  });

  describe('endOfWeek', () => {
    test('应该正确获取周的结束时间', () => {
      const date = new Date('2024-03-20'); // 周三
      const result = endOfWeek(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(24); // 周日
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
      expect(result.getMilliseconds()).toBe(999);
    });

    test('应该正确处理跨月的周结束时间', () => {
      const date = new Date('2024-02-28'); // 周三
      const result = endOfWeek(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(3); // 周日
    });
  });

  describe('startOfMonth', () => {
    test('应该正确获取月份的开始时间', () => {
      const date = new Date('2024-03-20T14:30:00');
      const result = startOfMonth(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(1);
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
      expect(result.getMilliseconds()).toBe(0);
    });

    test('应该正确处理年初月份', () => {
      const date = new Date('2024-01-15');
      const result = startOfMonth(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0); // 1月
      expect(result.getDate()).toBe(1);
    });
  });

  describe('endOfMonth', () => {
    test('应该正确获取月份的结束时间', () => {
      const date = new Date('2024-03-20T14:30:00');
      const result = endOfMonth(date);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(31);
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
      expect(result.getMilliseconds()).toBe(999);
    });

    test('应该正确处理不同天数的月份', () => {
      const date1 = new Date('2024-02-15');
      const date2 = new Date('2024-04-15');
      
      const result1 = endOfMonth(date1);
      const result2 = endOfMonth(date2);
      
      expect(result1.getDate()).toBe(29); // 闰年2月
      expect(result2.getDate()).toBe(30); // 4月
    });
  });
}); 