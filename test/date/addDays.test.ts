import { addDays } from '../../src/date/addDays';

describe('addDays', () => {
  test('添加正数天数', () => {
    const date = new Date(2023, 0, 1); // 2023-01-01
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(6); // 2023-01-06
  });

  test('添加负数天数', () => {
    const date = new Date(2023, 0, 10); // 2023-01-10
    const result = addDays(date, -5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(5); // 2023-01-05
  });

  test('添加零天数应返回相同日期的新实例', () => {
    const date = new Date(2023, 0, 1);
    const result = addDays(date, 0);
    
    expect(result).not.toBe(date); // 应该是新的实例
    expect(result.getTime()).toBe(date.getTime()); // 但时间相同
  });

  test('跨月添加天数', () => {
    const date = new Date(2023, 0, 28); // 2023-01-28
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(1); // 月份变为2月
    expect(result.getDate()).toBe(2); // 2023-02-02
  });

  test('跨年添加天数', () => {
    const date = new Date(2023, 11, 28); // 2023-12-28
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // 月份变为1月
    expect(result.getDate()).toBe(2); // 2024-01-02
  });

  test('处理大量天数', () => {
    const date = new Date(2023, 0, 1); // 2023-01-01
    const result = addDays(date, 365);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1); // 2024-01-01
  });

  test('处理日期字符串输入', () => {
    const result = addDays('2023-01-01', 5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(6);
  });

  test('处理时间戳输入', () => {
    const timestamp = new Date(2023, 0, 1).getTime();
    const result = addDays(timestamp, 5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(6);
  });

  test('处理无效输入', () => {
    expect(() => addDays('invalid-date', 5)).toThrow();
  });

  test('保留时分秒毫秒信息', () => {
    const date = new Date(2023, 0, 1, 14, 30, 45, 500);
    const result = addDays(date, 5);
    
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(6);
    expect(result.getHours()).toBe(14);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(45);
    expect(result.getMilliseconds()).toBe(500);
  });

  test('处理闰年', () => {
    // 2020年是闰年，2月有29天
    const date = new Date(2020, 1, 28); // 2020-02-28
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(29); // 2020-02-29
    
    const result2 = addDays(date, 2);
    expect(result2.getFullYear()).toBe(2020);
    expect(result2.getMonth()).toBe(2);
    expect(result2.getDate()).toBe(1); // 2020-03-01
  });
}); 