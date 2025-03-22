import {
  isDate,
  isToday,
  isBefore,
  isAfter,
  isSameDay
} from '../../src/date/basic';

describe('Date Basic Operations', () => {
  describe('isDate', () => {
    test('应该正确识别有效的日期对象', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate(new Date('2024-03-20'))).toBe(true);
    });

    test('应该正确识别无效的日期对象', () => {
      expect(isDate(new Date('invalid'))).toBe(false);
      expect(isDate('2024-03-20')).toBe(false);
      expect(isDate(1234567890)).toBe(false);
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
    });
  });

  describe('isToday', () => {
    test('应该正确识别今天', () => {
      const today = new Date();
      expect(isToday(today)).toBe(true);
    });

    test('应该正确识别非今天', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(isToday(yesterday)).toBe(false);

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      expect(isToday(tomorrow)).toBe(false);
    });
  });

  describe('isBefore', () => {
    test('应该正确判断日期先后', () => {
      const date1 = new Date('2024-03-19');
      const date2 = new Date('2024-03-20');
      expect(isBefore(date1, date2)).toBe(true);
      expect(isBefore(date2, date1)).toBe(false);
    });

    test('应该正确处理相同日期', () => {
      const date = new Date('2024-03-20');
      expect(isBefore(date, date)).toBe(false);
    });
  });

  describe('isAfter', () => {
    test('应该正确判断日期先后', () => {
      const date1 = new Date('2024-03-19');
      const date2 = new Date('2024-03-20');
      expect(isAfter(date2, date1)).toBe(true);
      expect(isAfter(date1, date2)).toBe(false);
    });

    test('应该正确处理相同日期', () => {
      const date = new Date('2024-03-20');
      expect(isAfter(date, date)).toBe(false);
    });
  });

  describe('isSameDay', () => {
    test('应该正确判断是否为同一天', () => {
      const date1 = new Date('2024-03-20');
      const date2 = new Date('2024-03-20');
      expect(isSameDay(date1, date2)).toBe(true);

      const date3 = new Date('2024-03-19');
      expect(isSameDay(date1, date3)).toBe(false);
    });

    test('应该正确处理不同时间但同一天的情况', () => {
      const date1 = new Date('2024-03-20T00:00:00');
      const date2 = new Date('2024-03-20T23:59:59');
      expect(isSameDay(date1, date2)).toBe(true);
    });
  });
}); 