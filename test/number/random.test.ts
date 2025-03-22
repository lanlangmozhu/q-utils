import {
  random,
  randomInt,
  randomDigits,
  randomUUID,
  shuffle
} from '../../src/number/random';

describe('随机数生成工具函数', () => {
  describe('random', () => {
    it('应该生成指定范围内的随机数', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const result = random(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });

    it('应该正确处理不包含边界值的情况', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const result = random(min, max, false);
        expect(result).toBeGreaterThan(min);
        expect(result).toBeLessThan(max);
      }
    });

    it('应该处理最小值大于最大值的情况', () => {
      const result = random(10, 1);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });

    it('应该处理无效输入', () => {
      expect(random(NaN, 10)).toBe(NaN);
      expect(random(1, NaN)).toBe(NaN);
      expect(random(NaN, NaN)).toBe(NaN);
    });
  });

  describe('randomInt', () => {
    it('应该生成指定范围内的随机整数', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const result = randomInt(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    it('应该正确处理不包含边界值的情况', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const result = randomInt(min, max, false);
        expect(result).toBeGreaterThan(min);
        expect(result).toBeLessThan(max);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    it('应该处理最小值大于最大值的情况', () => {
      const result = randomInt(10, 1);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    });

    it('应该处理无效输入', () => {
      expect(randomInt(NaN, 10)).toBe(NaN);
      expect(randomInt(1, NaN)).toBe(NaN);
      expect(randomInt(NaN, NaN)).toBe(NaN);
    });
  });

  describe('randomDigits', () => {
    it('应该生成指定长度的随机数字字符串', () => {
      for (let length = 1; length <= 10; length++) {
        const result = randomDigits(length);
        expect(result).toMatch(/^\d+$/);
        expect(result.length).toBe(length);
      }
    });

    it('应该处理无效输入', () => {
      expect(randomDigits(0)).toBe('');
      expect(randomDigits(-1)).toBe('');
    });
  });

  describe('randomUUID', () => {
    it('应该生成有效的UUID', () => {
      for (let i = 0; i < 100; i++) {
        const uuid = randomUUID();
        expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      }
    });

    it('应该生成唯一的UUID', () => {
      const uuids = new Set();
      for (let i = 0; i < 1000; i++) {
        uuids.add(randomUUID());
      }
      expect(uuids.size).toBe(1000);
    });
  });

  describe('shuffle', () => {
    it('应该正确打乱数组', () => {
      const original = [1, 2, 3, 4, 5];
      const result = shuffle(original);
      
      // 检查长度相同
      expect(result.length).toBe(original.length);
      
      // 检查元素相同
      expect(result.sort()).toEqual(original.sort());
      
      // 检查是否创建了新数组
      expect(result).not.toBe(original);
    });

    it('应该处理空数组', () => {
      expect(shuffle([])).toEqual([]);
    });

    it('应该处理单元素数组', () => {
      expect(shuffle([1])).toEqual([1]);
    });

    it('应该保持数组元素不变', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const result = shuffle(array);
      expect(result.map(item => item.id).sort()).toEqual([1, 2, 3]);
    });
  });
}); 