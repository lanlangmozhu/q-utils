import { formatDate } from '../../src/date/formatDate';

describe('formatDate', () => {
  test('应该使用默认格式格式化日期', () => {
    const date = new Date(2023, 0, 1); // 2023-01-01
    expect(formatDate(date)).toBe('2023-01-01');
  });

  test('应该正确处理自定义格式', () => {
    const date = new Date(2023, 0, 1, 14, 30, 45);
    expect(formatDate(date, 'YYYY/MM/DD')).toBe('2023/01/01');
    expect(formatDate(date, 'YYYY年MM月DD日')).toBe('2023年01月01日');
    expect(formatDate(date, 'YYYY-MM-DD hh:mm:ss')).toBe('2023-01-01 14:30:45');
    expect(formatDate(date, 'MM/DD/YYYY')).toBe('01/01/2023');
  });

  test('应该正确处理年月日格式', () => {
    const date = new Date(2023, 11, 31); // 2023-12-31
    expect(formatDate(date, 'YYYY')).toBe('2023');
    expect(formatDate(date, 'YY')).toBe('23');
    expect(formatDate(date, 'MM')).toBe('12');
    expect(formatDate(date, 'M')).toBe('12');
    expect(formatDate(date, 'DD')).toBe('31');
    expect(formatDate(date, 'D')).toBe('31');
  });

  test('应该正确处理时分秒格式', () => {
    const date = new Date(2023, 0, 1, 14, 5, 9); // 2023-01-01 14:05:09
    expect(formatDate(date, 'hh')).toBe('14');
    expect(formatDate(date, 'h')).toBe('14');
    expect(formatDate(date, 'mm')).toBe('05');
    expect(formatDate(date, 'm')).toBe('5');
    expect(formatDate(date, 'ss')).toBe('09');
    expect(formatDate(date, 's')).toBe('9');
  });

  test('应该正确处理AM/PM格式', () => {
    const morningDate = new Date(2023, 0, 1, 9, 30); // 2023-01-01 09:30
    const afternoonDate = new Date(2023, 0, 1, 15, 30); // 2023-01-01 15:30

    expect(formatDate(morningDate, 'hh:mm A')).toBe('09:30 AM');
    expect(formatDate(afternoonDate, 'hh:mm A')).toBe('15:30 PM');
    expect(formatDate(morningDate, 'hh:mm a')).toBe('09:30 am');
    expect(formatDate(afternoonDate, 'hh:mm a')).toBe('15:30 pm');
  });

  test('应该正确处理毫秒格式', () => {
    const date = new Date(2023, 0, 1, 14, 30, 45, 123);
    expect(formatDate(date, 'hh:mm:ss.SSS')).toBe('14:30:45.123');
  });

  test('应该正确处理星期几格式', () => {
    const sunday = new Date(2023, 0, 1); // 2023-01-01, 星期日
    
    // 英文环境
    expect(formatDate(sunday, 'dddd', { locale: 'en-US' })).toBe('Sunday');
    expect(formatDate(sunday, 'ddd', { locale: 'en-US' })).toBe('Sun');
    
    // 中文环境
    // 注意：由于jest测试环境可能不支持所有区域设置，这里测试的结果可能会根据运行环境而有所不同
    const result = formatDate(sunday, '星期');
    expect(result === '星期日' || result === '星期天').toBe(true);
  });

  test('应该接受时间戳作为输入', () => {
    const timestamp = 1672531200000; // 2023-01-01 00:00:00 UTC
    
    // 时间戳格式化结果可能受时区影响，所以这里做一个宽松的检查
    const result = formatDate(timestamp);
    expect(result).toMatch(/^2023-01-0[1-2]$/);
  });

  test('应该接受日期字符串作为输入', () => {
    expect(formatDate('2023-01-01')).toBe('2023-01-01');
    expect(formatDate('2023/01/01', 'YYYY-MM-DD')).toBe('2023-01-01');
  });

  test('应该对无效日期返回空字符串', () => {
    expect(formatDate('invalid-date')).toBe('');
    expect(formatDate(new Date('invalid'))).toBe('');
  });
}); 