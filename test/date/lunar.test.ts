import {
  solarToLunar,
  lunarToSolar,
  getLunarFestival,
  getSolarTerm
} from '../../src/date/lunar';

describe('Lunar Date Operations', () => {
  describe('solarToLunar', () => {
    test('应该正确转换公历到农历', () => {
      const date = new Date('2024-03-20');
      const result = solarToLunar(date);
      
      expect(result).toEqual({
        year: 2024,
        month: 2,
        day: 11,
        leap: false
      });
    });

    test('应该正确处理年初日期', () => {
      const date = new Date('2024-01-01');
      const result = solarToLunar(date);
      
      expect(result.year).toBe(2024);
      expect(result.month).toBe(1);
      expect(result.day).toBe(1);
    });

    test('应该正确处理年末日期', () => {
      const date = new Date('2024-12-31');
      const result = solarToLunar(date);
      
      expect(result.year).toBe(2024);
      expect(result.month).toBe(12);
      expect(result.day).toBe(31);
    });
  });

  describe('lunarToSolar', () => {
    test('应该正确转换农历到公历', () => {
      const result = lunarToSolar(2024, 2, 11);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(20);
    });

    test('应该正确处理闰月', () => {
      const result = lunarToSolar(2024, 2, 11, true);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(2); // 3月
      expect(result.getDate()).toBe(20);
    });

    test('应该正确处理年初日期', () => {
      const result = lunarToSolar(2024, 1, 1);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0); // 1月
      expect(result.getDate()).toBe(1);
    });

    test('应该正确处理年末日期', () => {
      const result = lunarToSolar(2024, 12, 31);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(11); // 12月
      expect(result.getDate()).toBe(31);
    });
  });

  describe('getLunarFestival', () => {
    test('应该正确获取农历节日', () => {
      expect(getLunarFestival(new Date('2024-02-10'))).toBe('春节');
      expect(getLunarFestival(new Date('2024-06-10'))).toBe('端午节');
      expect(getLunarFestival(new Date('2024-09-17'))).toBe('中秋节');
    });

    test('应该正确处理非节日日期', () => {
      expect(getLunarFestival(new Date('2024-03-20'))).toBeUndefined();
      expect(getLunarFestival(new Date('2024-07-15'))).toBeUndefined();
      expect(getLunarFestival(new Date('2024-11-25'))).toBeUndefined();
    });
  });

  describe('getSolarTerm', () => {
    test('应该正确获取二十四节气', () => {
      expect(getSolarTerm(new Date('2024-03-20'))).toBe('春分');
      expect(getSolarTerm(new Date('2024-06-21'))).toBe('夏至');
      expect(getSolarTerm(new Date('2024-09-23'))).toBe('秋分');
      expect(getSolarTerm(new Date('2024-12-22'))).toBe('冬至');
    });

    test('应该正确处理非节气日期', () => {
      expect(getSolarTerm(new Date('2024-03-21'))).toBeUndefined();
      expect(getSolarTerm(new Date('2024-06-22'))).toBeUndefined();
      expect(getSolarTerm(new Date('2024-09-24'))).toBeUndefined();
      expect(getSolarTerm(new Date('2024-12-23'))).toBeUndefined();
    });
  });
}); 