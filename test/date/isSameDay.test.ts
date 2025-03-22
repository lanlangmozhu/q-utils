import { isSameDay } from '../../src/date/isSameDay';

describe('isSameDay', () => {
  test('相同日期应返回true', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0);
    const date2 = new Date(2023, 0, 1, 18, 30, 0);
    expect(isSameDay(date1, date2)).toBe(true);
  });

  test('不同日期应返回false', () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 0, 2);
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test('不同月份应返回false', () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 1, 1);
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test('不同年份应返回false', () => {
    const date1 = new Date(2022, 0, 1);
    const date2 = new Date(2023, 0, 1);
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test('应该支持时间戳格式', () => {
    const date1 = new Date(2023, 0, 1, 0, 0, 0).getTime();
    const date2 = new Date(2023, 0, 1, 23, 59, 59).getTime();
    expect(isSameDay(date1, date2)).toBe(true);
  });

  test('应该支持日期字符串格式', () => {
    expect(isSameDay('2023-01-01', '2023-01-01T23:59:59')).toBe(true);
    expect(isSameDay('2023-01-01', '2023-01-02')).toBe(false);
  });

  test('应该支持混合格式比较', () => {
    const date1 = new Date(2023, 0, 1);
    expect(isSameDay(date1, '2023-01-01')).toBe(true);
    expect(isSameDay(date1.getTime(), '2023-01-01')).toBe(true);
  });

  test('处理无效日期输入', () => {
    expect(() => isSameDay('invalid-date', new Date())).toThrow();
    expect(() => isSameDay(new Date(), 'invalid-date')).toThrow();
    expect(() => isSameDay('invalid-date', 'also-invalid')).toThrow();
  });
  
  test('处理边界情况', () => {
    // 一天的开始和结束
    const startOfDay = new Date(2023, 0, 1, 0, 0, 0, 0);
    const endOfDay = new Date(2023, 0, 1, 23, 59, 59, 999);
    expect(isSameDay(startOfDay, endOfDay)).toBe(true);
    
    // 跨越午夜
    const beforeMidnight = new Date(2023, 0, 1, 23, 59, 59, 999);
    const afterMidnight = new Date(2023, 0, 2, 0, 0, 0, 0);
    expect(isSameDay(beforeMidnight, afterMidnight)).toBe(false);
  });
}); 