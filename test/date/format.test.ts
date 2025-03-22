import {
  formatDate,
  timeAgo
} from '../../src/date/format';

describe('Date Format Operations', () => {
  describe('formatDate', () => {
    test('应该使用默认格式格式化日期', () => {
      const date = new Date('2024-03-20T14:30:00');
      expect(formatDate(date)).toBe('2024-03-20');
    });

    test('应该使用自定义格式格式化日期', () => {
      const date = new Date('2024-03-20T14:30:00');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-03-20 14:30:00');
    });

    test('应该正确处理个位数月份和日期', () => {
      const date = new Date('2024-01-05T09:05:00');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-01-05 09:05:00');
    });

    test('应该正确处理毫秒', () => {
      const date = new Date('2024-03-20T14:30:00.123');
      expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss.SSS')).toBe('2024-03-20 14:30:00.123');
    });

    test('应该处理不完整的格式字符串', () => {
      const date = new Date('2024-03-20T14:30:00');
      expect(formatDate(date, 'YYYY-MM')).toBe('2024-03');
    });
  });

  describe('timeAgo', () => {
    beforeEach(() => {
      // 模拟当前时间
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2024-03-20T12:00:00'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('应该返回"刚刚"', () => {
      const date = new Date('2024-03-20T12:00:00');
      expect(timeAgo(date)).toBe('刚刚');
    });

    test('应该返回秒数', () => {
      const date = new Date('2024-03-20T11:59:55');
      expect(timeAgo(date)).toBe('5秒前');
    });

    test('应该返回分钟数', () => {
      const date = new Date('2024-03-20T11:55:00');
      expect(timeAgo(date)).toBe('5分钟前');
    });

    test('应该返回小时数', () => {
      const date = new Date('2024-03-20T10:00:00');
      expect(timeAgo(date)).toBe('2小时前');
    });

    test('应该返回天数', () => {
      const date = new Date('2024-03-18T12:00:00');
      expect(timeAgo(date)).toBe('2天前');
    });

    test('应该返回月数', () => {
      const date = new Date('2024-02-20T12:00:00');
      expect(timeAgo(date)).toBe('1个月前');
    });

    test('应该返回年数', () => {
      const date = new Date('2023-03-20T12:00:00');
      expect(timeAgo(date)).toBe('1年前');
    });
  });
}); 