import { easeInOut, spring, bezier, interpolate } from '../../src/number/animation';

describe('动画计算测试', () => {
  describe('easeInOut', () => {
    it('应该正确计算缓入缓出值', () => {
      expect(easeInOut(0)).toBe(0);
      expect(easeInOut(0.5)).toBe(0.5);
      expect(easeInOut(1)).toBe(1);
    });

    it('应该在0-1范围内', () => {
      expect(easeInOut(-1)).toBe(0);
      expect(easeInOut(2)).toBe(1);
    });

    it('应该保持对称性', () => {
      expect(easeInOut(0.25)).toBeCloseTo(1 - easeInOut(0.75), 10);
    });
  });

  describe('spring', () => {
    it('应该正确计算弹簧动画值', () => {
      const config = { tension: 100, friction: 10 };
      expect(spring(0, config)).toBe(0);
      expect(spring(1, config)).toBeGreaterThan(0);
      expect(spring(1, config)).toBeLessThanOrEqual(1);
    });

    it('应该处理不同的弹簧参数', () => {
      const config1 = { tension: 100, friction: 10 };
      const config2 = { tension: 200, friction: 20 };
      const value1 = spring(1, config1);
      const value2 = spring(1, config2);
      expect(value1).not.toBe(value2);
    });

    it('应该在0-1范围内', () => {
      const config = { tension: 100, friction: 10 };
      expect(spring(-1, config)).toBe(0);
      expect(spring(2, config)).toBe(1);
    });
  });

  describe('bezier', () => {
    it('应该正确计算贝塞尔曲线值', () => {
      const curve = [0.4, 0, 0.2, 1];
      expect(bezier(0, curve)).toBe(0);
      expect(bezier(1, curve)).toBe(1);
      expect(bezier(0.5, curve)).toBeGreaterThan(0);
      expect(bezier(0.5, curve)).toBeLessThan(1);
    });

    it('应该处理不同的控制点', () => {
      const curve1 = [0.4, 0, 0.2, 1];
      const curve2 = [0.2, 0, 0.4, 1];
      const value1 = bezier(0.5, curve1);
      const value2 = bezier(0.5, curve2);
      expect(value1).not.toBe(value2);
    });

    it('应该在0-1范围内', () => {
      const curve = [0.4, 0, 0.2, 1];
      expect(bezier(-1, curve)).toBe(0);
      expect(bezier(2, curve)).toBe(1);
    });
  });

  describe('interpolate', () => {
    it('应该正确计算线性插值', () => {
      expect(interpolate(0, 0, 100, 0)).toBe(0);
      expect(interpolate(0.5, 0, 100, 0)).toBe(50);
      expect(interpolate(1, 0, 100, 0)).toBe(100);
    });

    it('应该处理不同的输入范围', () => {
      expect(interpolate(0.5, 0, 200, 0)).toBe(100);
      expect(interpolate(0.5, 0, 100, 50)).toBe(75);
    });

    it('应该处理边界情况', () => {
      expect(interpolate(-1, 0, 100, 0)).toBe(0);
      expect(interpolate(2, 0, 100, 0)).toBe(100);
    });

    it('应该处理反向插值', () => {
      expect(interpolate(0.5, 100, 0, 0)).toBe(50);
    });
  });
}); 