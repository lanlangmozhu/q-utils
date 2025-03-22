import {
  getWorkingDays,
  getDatesBetween
} from '../../src/date/statistics';

describe('Date Statistics Operations', () => {
  describe('getWorkingDays', () => {
    test('应该正确计算工作日数量', () => {
      const startDate = new Date('2024-03-20'); // 周三
      const endDate = new Date('2024-03-25'); // 周一
      
      expect(getWorkingDays(startDate, endDate)).toBe(4); // 周三、周四、周五、周一
    });

    test('应该正确处理包含周末的日期范围', () => {
      const startDate = new Date('2024-03-22'); // 周五
      const endDate = new Date('2024-03-25'); // 周一
      
      expect(getWorkingDays(startDate, endDate)).toBe(2); // 周五、周一
    });

    test('应该正确处理单日', () => {
      const date = new Date('2024-03-20'); // 周三
      expect(getWorkingDays(date, date)).toBe(1);
    });

    test('应该正确处理周末单日', () => {
      const date = new Date('2024-03-23'); // 周六
      expect(getWorkingDays(date, date)).toBe(0);
    });

    test('应该正确处理跨周的日期范围', () => {
      const startDate = new Date('2024-03-22'); // 周五
      const endDate = new Date('2024-03-29'); // 周五
      
      expect(getWorkingDays(startDate, endDate)).toBe(5); // 周五、周一、周二、周三、周四
    });
  });

  describe('getDatesBetween', () => {
    test('应该正确获取日期范围内的所有日期', () => {
      const startDate = new Date('2024-03-20');
      const endDate = new Date('2024-03-22');
      const result = getDatesBetween(startDate, endDate);
      
      expect(result.length).toBe(3);
      expect(result[0].toISOString().split('T')[0]).toBe('2024-03-20');
      expect(result[1].toISOString().split('T')[0]).toBe('2024-03-21');
      expect(result[2].toISOString().split('T')[0]).toBe('2024-03-22');
    });

    test('应该正确处理单日', () => {
      const date = new Date('2024-03-20');
      const result = getDatesBetween(date, date);
      
      expect(result.length).toBe(1);
      expect(result[0].toISOString().split('T')[0]).toBe('2024-03-20');
    });

    test('应该正确处理跨月的日期范围', () => {
      const startDate = new Date('2024-03-30');
      const endDate = new Date('2024-04-02');
      const result = getDatesBetween(startDate, endDate);
      
      expect(result.length).toBe(4);
      expect(result[0].toISOString().split('T')[0]).toBe('2024-03-30');
      expect(result[1].toISOString().split('T')[0]).toBe('2024-03-31');
      expect(result[2].toISOString().split('T')[0]).toBe('2024-04-01');
      expect(result[3].toISOString().split('T')[0]).toBe('2024-04-02');
    });

    test('应该正确处理跨年的日期范围', () => {
      const startDate = new Date('2023-12-31');
      const endDate = new Date('2024-01-02');
      const result = getDatesBetween(startDate, endDate);
      
      expect(result.length).toBe(3);
      expect(result[0].toISOString().split('T')[0]).toBe('2023-12-31');
      expect(result[1].toISOString().split('T')[0]).toBe('2024-01-01');
      expect(result[2].toISOString().split('T')[0]).toBe('2024-01-02');
    });

    test('应该返回新的Date对象', () => {
      const startDate = new Date('2024-03-20');
      const endDate = new Date('2024-03-22');
      const result = getDatesBetween(startDate, endDate);
      
      // 验证返回的是新的Date对象
      result.forEach(date => {
        expect(date).not.toBe(startDate);
        expect(date).not.toBe(endDate);
      });
    });
  });
}); 