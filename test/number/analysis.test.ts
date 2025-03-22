import {
  growthRate,
  compoundGrowthRate,
  movingAverage,
  exponentialMovingAverage,
  trend,
  distribution,
  correlation,
  forecast,
  seasonality,
  outliers
} from '../../src/number/analysis';

describe('数据分析函数', () => {
  describe('growthRate', () => {
    it('应该计算增长率', () => {
      expect(growthRate(100, 150)).toBe(0.5);
      expect(growthRate(100, 50)).toBe(-0.5);
    });

    it('应该处理零和负数', () => {
      expect(growthRate(0, 100)).toBe(Infinity);
      expect(growthRate(-100, 0)).toBe(1);
    });
  });

  describe('compoundGrowthRate', () => {
    it('应该计算复合增长率', () => {
      expect(compoundGrowthRate(100, 150, 2)).toBeCloseTo(0.2247, 4);
      expect(compoundGrowthRate(100, 50, 2)).toBeCloseTo(-0.2929, 4);
    });

    it('应该处理零和负数', () => {
      expect(compoundGrowthRate(0, 100, 2)).toBe(Infinity);
      expect(compoundGrowthRate(-100, 0, 2)).toBe(1);
    });
  });

  describe('movingAverage', () => {
    it('应该计算移动平均', () => {
      expect(movingAverage([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
    });

    it('应该处理不同窗口大小', () => {
      expect(movingAverage([1, 2, 3, 4, 5], 2)).toEqual([1.5, 2.5, 3.5, 4.5]);
    });

    it('应该处理空数组和单个元素', () => {
      expect(movingAverage([], 3)).toEqual([]);
      expect(movingAverage([1], 1)).toEqual([1]);
    });
  });

  describe('exponentialMovingAverage', () => {
    it('应该计算指数移动平均', () => {
      expect(exponentialMovingAverage([1, 2, 3, 4, 5], 0.2)).toEqual([
        1,
        1.2,
        1.56,
        2.048,
        2.6384
      ]);
    });

    it('应该处理不同的平滑因子', () => {
      const values = [1, 2, 3, 4, 5];
      const result1 = exponentialMovingAverage(values, 0.2);
      const result2 = exponentialMovingAverage(values, 0.5);
      expect(result2[4]).toBeGreaterThan(result1[4]);
    });

    it('应该处理空数组和单个元素', () => {
      expect(exponentialMovingAverage([], 0.2)).toEqual([]);
      expect(exponentialMovingAverage([1], 0.2)).toEqual([1]);
    });
  });

  describe('trend', () => {
    it('应该识别上升趋势', () => {
      expect(trend([1, 2, 3, 4, 5])).toBe(1);
    });

    it('应该识别下降趋势', () => {
      expect(trend([5, 4, 3, 2, 1])).toBe(-1);
    });

    it('应该识别平稳趋势', () => {
      expect(trend([1, 1, 1, 1, 1])).toBe(0);
    });

    it('应该处理空数组和单个元素', () => {
      expect(trend([])).toBe(0);
      expect(trend([1])).toBe(0);
    });
  });

  describe('distribution', () => {
    it('应该计算分布', () => {
      const result = distribution([1, 2, 2, 3, 3, 3, 4, 4, 5], 3);
      expect(Object.keys(result)).toHaveLength(3);
      expect(result['1.00-2.33']).toBe(3);
      expect(result['2.33-3.67']).toBe(3);
      expect(result['3.67-5.00']).toBe(3);
    });

    it('应该处理空数组', () => {
      expect(distribution([], 3)).toEqual({});
    });

    it('应该处理单个元素', () => {
      const result = distribution([1], 3);
      expect(Object.keys(result)).toHaveLength(3);
      expect(result['1.00-1.00']).toBe(1);
    });
  });

  describe('correlation', () => {
    it('应该计算完全正相关', () => {
      expect(correlation([1, 2, 3], [2, 4, 6])).toBe(1);
    });

    it('应该计算完全负相关', () => {
      expect(correlation([1, 2, 3], [6, 4, 2])).toBe(-1);
    });

    it('应该计算无相关', () => {
      expect(correlation([1, 2, 3], [1, 1, 1])).toBe(0);
    });

    it('应该处理不同长度的数组', () => {
      expect(() => correlation([1, 2], [1, 2, 3])).toThrow('Arrays must have the same length');
    });
  });

  describe('forecast', () => {
    it('应该计算预测值', () => {
      expect(forecast([1, 2, 3, 4, 5], 2)).toEqual([6, 7]);
    });

    it('应该处理不同长度的输入', () => {
      expect(forecast([1, 2, 3], 1)).toEqual([4]);
    });

    it('应该处理无效输入', () => {
      expect(() => forecast([1], 1)).toThrow('Need at least 2 values for forecasting');
    });
  });

  describe('seasonality', () => {
    it('应该计算季节性因子', () => {
      expect(seasonality([1, 2, 1, 2, 1, 2], 2)).toEqual([0.5, 1.5]);
    });

    it('应该处理不同周期', () => {
      expect(seasonality([1, 2, 3, 1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    it('应该处理空数组', () => {
      expect(seasonality([], 2)).toEqual([0, 0]);
    });
  });

  describe('outliers', () => {
    it('应该识别异常值', () => {
      const values = [1, 2, 3, 100, 4, 5];
      const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
      const stdDev = Math.sqrt(
        values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length
      );
      const threshold = 2;
      const expectedOutliers = values.filter(
        (value) => Math.abs(value - mean) > threshold * stdDev
      );
      expect(outliers(values, threshold)).toEqual(expectedOutliers);
    });

    it('应该处理不同的阈值', () => {
      const values = [1, 2, 3, 100, 4, 5];
      const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
      const stdDev = Math.sqrt(
        values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length
      );
      const threshold1 = 1;
      const threshold2 = 3;
      const outliers1 = values.filter(
        (value) => Math.abs(value - mean) > threshold1 * stdDev
      );
      const outliers2 = values.filter(
        (value) => Math.abs(value - mean) > threshold2 * stdDev
      );
      expect(outliers(values, threshold1)).toEqual(outliers1);
      expect(outliers(values, threshold2)).toEqual(outliers2);
    });

    it('应该处理空数组', () => {
      expect(outliers([])).toEqual([]);
    });

    it('应该处理单个元素', () => {
      expect(outliers([1])).toEqual([]);
    });
  });
}); 