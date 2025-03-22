import {
  convertTimeZone,
  getTimezoneOffset,
  utcToLocal,
  localToUtc
} from '../../src/date/timezone';

describe('Timezone Operations', () => {
  describe('getTimezoneOffset', () => {
    test('应该正确获取时区偏移量', () => {
      expect(getTimezoneOffset('UTC')).toBe(0);
      expect(getTimezoneOffset('Asia/Shanghai')).toBe(8);
      expect(getTimezoneOffset('America/New_York')).toBe(-4);
      expect(getTimezoneOffset('Europe/London')).toBe(0);
      expect(getTimezoneOffset('Asia/Tokyo')).toBe(9);
    });

    test('应该正确处理未知时区', () => {
      expect(getTimezoneOffset('Unknown/Timezone')).toBe(0);
    });
  });

  describe('convertTimeZone', () => {
    test('应该正确转换时区', () => {
      const date = new Date('2024-03-20T00:00:00Z');
      const result = convertTimeZone(date, 'UTC', 'Asia/Shanghai');
      
      expect(result.getHours()).toBe(8);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
    });

    test('应该正确处理跨日期的时区转换', () => {
      const date = new Date('2024-03-20T23:00:00Z');
      const result = convertTimeZone(date, 'UTC', 'Asia/Shanghai');
      
      expect(result.getDate()).toBe(21);
      expect(result.getHours()).toBe(7);
    });

    test('应该正确处理负时区', () => {
      const date = new Date('2024-03-20T12:00:00Z');
      const result = convertTimeZone(date, 'UTC', 'America/New_York');
      
      expect(result.getHours()).toBe(8);
    });

    test('应该正确处理相同时区', () => {
      const date = new Date('2024-03-20T12:00:00Z');
      const result = convertTimeZone(date, 'UTC', 'UTC');
      
      expect(result.getTime()).toBe(date.getTime());
    });
  });

  describe('utcToLocal', () => {
    test('应该正确转换UTC到本地时间', () => {
      const utcDate = new Date('2024-03-20T00:00:00Z');
      const result = utcToLocal(utcDate);
      
      // 由于本地时区可能不同，我们只验证转换后的时间与UTC时间的差值
      const localOffset = new Date().getTimezoneOffset() / 60;
      const expectedHours = (24 + localOffset) % 24;
      
      expect(result.getHours()).toBe(expectedHours);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
    });

    test('应该保持日期部分不变', () => {
      const utcDate = new Date('2024-03-20T00:00:00Z');
      const result = utcToLocal(utcDate);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(20);
    });
  });

  describe('localToUtc', () => {
    test('应该正确转换本地时间到UTC', () => {
      const localDate = new Date('2024-03-20T08:00:00');
      const result = localToUtc(localDate);
      
      // 由于本地时区可能不同，我们只验证转换后的时间与本地时间的差值
      const localOffset = new Date().getTimezoneOffset() / 60;
      const expectedHours = (8 + localOffset) % 24;
      
      expect(result.getHours()).toBe(expectedHours);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
    });

    test('应该保持日期部分不变', () => {
      const localDate = new Date('2024-03-20T08:00:00');
      const result = localToUtc(localDate);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(20);
    });
  });
}); 