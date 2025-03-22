import {
  mean,
  median,
  mode,
  variance,
  standardDeviation,
  percentile,
  quartiles,
  skewness,
  kurtosis
} from '../../src/number/statistics';

describe('统计计算工具函数', () => {
  const testData = [1, 2, 3, 4, 5];
  const testDataWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 4, 5];

  describe('mean', () => {
    it('应该计算正确的平均值', () => {
      expect(mean(testData)).toBe(3);
      expect(mean([1, 1, 1])).toBe(1);
      expect(mean([-1, 0, 1])).toBe(0);
    });

    it('应该处理空数组', () => {
      expect(mean([])).toBe(0);
    });

    it('应该处理小数', () => {
      expect(mean([1.5, 2.5, 3.5])).toBe(2.5);
    });
  });

  describe('median', () => {
    it('应该计算奇数长度数组的中位数', () => {
      expect(median(testData)).toBe(3);
      expect(median([1])).toBe(1);
    });

    it('应该计算偶数长度数组的中位数', () => {
      expect(median([1, 2, 3, 4])).toBe(2.5);
      expect(median([1, 2])).toBe(1.5);
    });

    it('应该处理空数组', () => {
      expect(median([])).toBe(0);
    });

    it('应该处理乱序数组', () => {
      expect(median([5, 2, 1, 4, 3])).toBe(3);
    });
  });

  describe('mode', () => {
    it('应该计算单个众数', () => {
      expect(mode([1, 2, 2, 3])).toEqual([2]);
    });

    it('应该计算多个众数', () => {
      expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
    });

    it('应该处理空数组', () => {
      expect(mode([])).toEqual([]);
    });

    it('应该处理所有元素出现次数相同的情况', () => {
      expect(mode([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('variance', () => {
    it('应该计算正确的方差', () => {
      expect(variance(testData)).toBe(2);
      expect(variance([1, 1, 1])).toBe(0);
    });

    it('应该处理空数组', () => {
      expect(variance([])).toBe(0);
    });

    it('应该处理小数', () => {
      expect(variance([1.5, 2.5, 3.5])).toBeCloseTo(0.6666666666666666);
    });
  });

  describe('standardDeviation', () => {
    it('应该计算正确的标准差', () => {
      expect(standardDeviation(testData)).toBeCloseTo(1.4142135623730951);
      expect(standardDeviation([1, 1, 1])).toBe(0);
    });

    it('应该处理空数组', () => {
      expect(standardDeviation([])).toBe(0);
    });
  });

  describe('percentile', () => {
    it('应该计算正确的百分位数', () => {
      expect(percentile(testData, 50)).toBe(3);
      expect(percentile(testData, 25)).toBe(2);
      expect(percentile(testData, 75)).toBe(4);
    });

    it('应该处理空数组', () => {
      expect(percentile([], 50)).toBe(0);
    });

    it('应该处理边界值', () => {
      expect(percentile(testData, 0)).toBe(1);
      expect(percentile(testData, 100)).toBe(5);
    });
  });

  describe('quartiles', () => {
    it('应该计算正确的四分位数', () => {
      const result = quartiles(testData);
      expect(result.q1).toBe(2);
      expect(result.q2).toBe(3);
      expect(result.q3).toBe(4);
    });

    it('应该处理空数组', () => {
      const result = quartiles([]);
      expect(result.q1).toBe(0);
      expect(result.q2).toBe(0);
      expect(result.q3).toBe(0);
    });
  });

  describe('skewness', () => {
    it('应该计算正确的偏度', () => {
      expect(skewness(testData)).toBeCloseTo(0);
      expect(skewness([1, 1, 1])).toBe(0);
    });

    it('应该处理空数组', () => {
      expect(skewness([])).toBe(0);
    });

    it('应该处理偏态分布', () => {
      expect(skewness([1, 1, 1, 10])).toBeGreaterThan(0); // 正偏态
      expect(skewness([1, 10, 10, 10])).toBeLessThan(0);  // 负偏态
    });
  });

  describe('kurtosis', () => {
    it('应该计算正确的峰度', () => {
      expect(kurtosis(testData)).toBeCloseTo(-1.2);
      expect(kurtosis([1, 1, 1])).toBe(0);
    });

    it('应该处理空数组', () => {
      expect(kurtosis([])).toBe(0);
    });

    it('应该处理不同分布类型', () => {
      // 尖峰分布
      expect(kurtosis([1, 2, 2, 2, 3])).toBeGreaterThan(-1.2);
      // 平峰分布
      expect(kurtosis([1, 1, 2, 3, 3])).toBeLessThan(-1.2);
    });
  });
}); 