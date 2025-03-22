import {
  clamp,
  round,
  inRange,
  lerp
} from '../../src/number/range';

describe('范围处理模块', () => {
  describe('clamp', () => {
    it('应该将数字限制在指定范围内', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-1, 0, 10)).toBe(0);
      expect(clamp(11, 0, 10)).toBe(10);
    });

    it('应该处理边界值', () => {
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
    });
  });

  describe('round', () => {
    it('应该正确四舍五入到指定小数位数', () => {
      expect(round(3.14159, 2)).toBe(3.14);
      expect(round(3.14159, 1)).toBe(3.1);
      expect(round(3.14159, 0)).toBe(3);
    });

    it('应该处理零和负数', () => {
      expect(round(0, 2)).toBe(0);
      expect(round(-3.14159, 2)).toBe(-3.14);
    });
  });

  describe('inRange', () => {
    it('应该正确检查数字是否在范围内', () => {
      expect(inRange(5, 1, 10)).toBe(true);
      expect(inRange(5, 1, 5, true)).toBe(true);
      expect(inRange(5, 1, 5, false)).toBe(false);
    });

    it('应该处理边界值', () => {
      expect(inRange(0, 0, 10)).toBe(true);
      expect(inRange(10, 0, 10)).toBe(true);
      expect(inRange(0, 0, 10, false)).toBe(false);
      expect(inRange(10, 0, 10, false)).toBe(false);
    });

    it('应该处理无效值', () => {
      expect(inRange(NaN, 1, 10)).toBe(false);
      expect(inRange(5, NaN, 10)).toBe(false);
      expect(inRange(5, 1, NaN)).toBe(false);
    });
  });

  describe('lerp', () => {
    it('应该正确进行线性插值', () => {
      expect(lerp(0, 100, 0.5)).toBe(50);
      expect(lerp(0, 100, 0)).toBe(0);
      expect(lerp(0, 100, 1)).toBe(100);
    });

    it('应该处理边界值', () => {
      expect(lerp(0, 100, -1)).toBe(0);
      expect(lerp(0, 100, 2)).toBe(100);
    });

    it('应该处理无效值', () => {
      expect(lerp(NaN, 100, 0.5)).toBe(NaN);
      expect(lerp(0, NaN, 0.5)).toBe(NaN);
      expect(lerp(0, 100, NaN)).toBe(NaN);
    });
  });
}); 