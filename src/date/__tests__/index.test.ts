import { formatDate, isDate, timeAgo, isSameDay, addDays, addMonths, getWeekNumber } from '@/date';

describe('Date Utils', () => {
  describe('formatDate', () => {
    it('should format date string', () => {
      const date = new Date('2024-03-18');
      expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-03-18');
    });
  });

  describe('isDate', () => {
    it('should check if value is valid date', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate('2024-03-18')).toBe(false);
    });
  });

  describe('timeAgo', () => {
    it('should format time ago', () => {
      const date = new Date(Date.now() - 3600000);
      expect(timeAgo(date)).toBe('1小时前');
    });
  });

  describe('isSameDay', () => {
    it('should check if dates are same day', () => {
      const date1 = new Date('2024-03-18');
      const date2 = new Date('2024-03-18');
      expect(isSameDay(date1, date2)).toBe(true);
    });
  });

  describe('addDays', () => {
    it('should add days to date', () => {
      const date = new Date('2024-03-18');
      const result = addDays(date, 5);
      expect(result.getDate()).toBe(23);
    });
  });

  describe('addMonths', () => {
    it('should add months to date', () => {
      const date = new Date('2024-03-18');
      const result = addMonths(date, 2);
      expect(result.getMonth()).toBe(4); // May
    });
  });

  describe('getWeekNumber', () => {
    it('should get week number of year', () => {
      const date = new Date('2024-03-18');
      expect(getWeekNumber(date)).toBe(12);
    });
  });
}); 