import {
  isDateInRange,
  getDateRangeIntersection
} from '@/date/range';

describe('Date Range Operations', () => {
  describe('isDateInRange', () => {
    test('应该正确判断日期是否在范围内', () => {
      const date = new Date('2024-03-20');
      const startDate = new Date('2024-03-19');
      const endDate = new Date('2024-03-21');
      
      expect(isDateInRange(date, startDate, endDate)).toBe(true);
    });

    test('应该正确处理边界日期', () => {
      const date = new Date('2024-03-20');
      const startDate = new Date('2024-03-20');
      const endDate = new Date('2024-03-20');
      
      expect(isDateInRange(date, startDate, endDate)).toBe(true);
    });

    test('应该正确处理范围外的日期', () => {
      const date = new Date('2024-03-20');
      const startDate = new Date('2024-03-21');
      const endDate = new Date('2024-03-22');
      
      expect(isDateInRange(date, startDate, endDate)).toBe(false);
    });

    test('应该正确处理时间部分', () => {
      const date = new Date('2024-03-20T12:00:00');
      const startDate = new Date('2024-03-20T00:00:00');
      const endDate = new Date('2024-03-20T23:59:59');
      
      expect(isDateInRange(date, startDate, endDate)).toBe(true);
    });
  });

  describe('getDateRangeIntersection', () => {
    test('应该正确计算日期范围的交集', () => {
      const range1: [Date, Date] = [
        new Date('2024-03-19'),
        new Date('2024-03-21')
      ];
      const range2: [Date, Date] = [
        new Date('2024-03-20'),
        new Date('2024-03-22')
      ];
      
      const result = getDateRangeIntersection(range1, range2);
      expect(result).toEqual([
        new Date('2024-03-20'),
        new Date('2024-03-21')
      ]);
    });

    test('应该正确处理完全重叠的范围', () => {
      const range1: [Date, Date] = [
        new Date('2024-03-19'),
        new Date('2024-03-21')
      ];
      const range2: [Date, Date] = [
        new Date('2024-03-19'),
        new Date('2024-03-21')
      ];
      
      const result = getDateRangeIntersection(range1, range2);
      expect(result).toEqual([
        new Date('2024-03-19'),
        new Date('2024-03-21')
      ]);
    });

    test('应该正确处理没有交集的范围', () => {
      const range1: [Date, Date] = [
        new Date('2024-03-19'),
        new Date('2024-03-20')
      ];
      const range2: [Date, Date] = [
        new Date('2024-03-21'),
        new Date('2024-03-22')
      ];
      
      const result = getDateRangeIntersection(range1, range2);
      expect(result).toBeNull();
    });

    test('应该正确处理时间部分', () => {
      const range1: [Date, Date] = [
        new Date('2024-03-20T00:00:00'),
        new Date('2024-03-20T12:00:00')
      ];
      const range2: [Date, Date] = [
        new Date('2024-03-20T06:00:00'),
        new Date('2024-03-20T18:00:00')
      ];
      
      const result = getDateRangeIntersection(range1, range2);
      expect(result).toEqual([
        new Date('2024-03-20T06:00:00'),
        new Date('2024-03-20T12:00:00')
      ]);
    });
  });
}); 