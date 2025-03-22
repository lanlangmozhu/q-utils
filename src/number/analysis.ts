/**
 * 数据分析相关函数
 */

/**
 * 计算增长率
 * @param initialValue - 初始值
 * @param finalValue - 最终值
 * @returns 增长率
 * @example
 * growthRate(100, 150) // 0.5
 */
export const growthRate = (
  initialValue: number | null | undefined,
  finalValue: number | null | undefined
): number => {
  const init = initialValue ?? 0;
  const final = finalValue ?? 0;
  return init === 0 ? (final === 0 ? 0 : Infinity) : (final - init) / init;
};

/**
 * 计算复合增长率
 * @param initialValue - 初始值
 * @param finalValue - 最终值
 * @param periods - 期数
 * @returns 复合增长率
 * @example
 * compoundGrowthRate(100, 150, 2) // 0.2247
 */
export const compoundGrowthRate = (
  initialValue: number | null | undefined,
  finalValue: number | null | undefined,
  periods: number | null | undefined
): number => {
  const init = initialValue ?? 0;
  const final = finalValue ?? 0;
  const p = periods ?? 1;
  return init === 0 ? (final === 0 ? 0 : Infinity) : Math.pow(final / init, 1 / p) - 1;
};

/**
 * 计算移动平均
 * @param values - 数值数组
 * @param windowSize - 窗口大小
 * @returns 移动平均数组
 * @example
 * movingAverage([1, 2, 3, 4, 5], 3) // [2, 3, 4]
 */
export const movingAverage = (
  values: number[] | null | undefined,
  windowSize: number | null | undefined
): number[] => {
  if (!values?.length || !windowSize || windowSize <= 0) return [];
  
  const result: number[] = [];
  
  for (let i = 0; i <= values.length - windowSize; i++) {
    const window = values.slice(i, i + windowSize);
    const average = window.reduce((sum, value) => sum + (value ?? 0), 0) / windowSize;
    result.push(average);
  }
  
  return result;
};

/**
 * 计算指数移动平均
 * @param values - 数值数组
 * @param alpha - 平滑因子
 * @returns 指数移动平均数组
 * @example
 * exponentialMovingAverage([1, 2, 3, 4, 5], 0.2) // [1, 1.2, 1.56, 2.048, 2.6384]
 */
export const exponentialMovingAverage = (
  values: number[] | null | undefined,
  alpha: number | null | undefined
): number[] => {
  if (!values?.length || alpha === null || alpha === undefined) return [];
  
  const result: number[] = [values[0] ?? 0];
  
  for (let i = 1; i < values.length; i++) {
    const ema = alpha * (values[i] ?? 0) + (1 - alpha) * result[i - 1];
    result.push(ema);
  }
  
  return result;
};

/**
 * 计算趋势
 * @param values - 数值数组
 * @returns 趋势（1: 上升, -1: 下降, 0: 平稳）
 * @example
 * trend([1, 2, 3, 4, 5]) // 1
 * trend([5, 4, 3, 2, 1]) // -1
 */
export const trend = (values: number[] | null | undefined): number => {
  if (!values?.length || values.length < 2) return 0;
  
  const firstHalf = values.slice(0, Math.floor(values.length / 2));
  const secondHalf = values.slice(-Math.floor(values.length / 2));
  
  const firstAvg =
    firstHalf.reduce((sum, value) => sum + (value ?? 0), 0) / firstHalf.length;
  const secondAvg =
    secondHalf.reduce((sum, value) => sum + (value ?? 0), 0) / secondHalf.length;
  
  if (Math.abs(secondAvg - firstAvg) < 0.0001) return 0;
  return secondAvg > firstAvg ? 1 : -1;
};

/**
 * 计算分布
 * @param values - 数值数组
 * @param bins - 区间数
 * @returns 分布对象
 * @example
 * distribution([1, 2, 2, 3, 3, 3, 4, 4, 5], 3) // { "1-2": 3, "2-3": 3, "3-4": 3 }
 */
export const distribution = (
  values: number[] | null | undefined,
  bins: number | null | undefined
): Record<string, number> => {
  if (!values?.length || !bins || bins <= 0) return {};
  
  const validValues = values.filter((v): v is number => v !== null && v !== undefined);
  if (!validValues.length) return {};
  
  const min = Math.min(...validValues);
  const max = Math.max(...validValues);
  const binSize = (max - min) / bins;
  
  const result: Record<string, number> = {};
  
  for (let i = 0; i < bins; i++) {
    const binStart = min + i * binSize;
    const binEnd = binStart + binSize;
    const binKey = `${binStart.toFixed(2)}-${binEnd.toFixed(2)}`;
    
    result[binKey] = validValues.filter(
      (value) => value >= binStart && value < binEnd
    ).length;
  }
  
  // 处理最后一个区间
  const lastBinKey = `${(min + (bins - 1) * binSize).toFixed(2)}-${max.toFixed(2)}`;
  result[lastBinKey] = validValues.filter(
    (value) => value >= min + (bins - 1) * binSize && value <= max
  ).length;
  
  return result;
};

/**
 * 计算相关性
 * @param x - X数组
 * @param y - Y数组
 * @returns 相关系数
 * @example
 * correlation([1, 2, 3], [2, 4, 6]) // 1
 */
export const correlation = (x: number[] | null | undefined, y: number[] | null | undefined): number => {
  if (!x?.length || !y?.length || x.length !== y.length) {
    throw new Error('Arrays must have the same length');
  }
  
  const validPairs = x.map((xi, i) => ({ x: xi, y: y[i] }))
    .filter(({ x, y }) => x !== null && x !== undefined && y !== null && y !== undefined);
  
  if (validPairs.length < 2) {
    throw new Error('Need at least 2 valid pairs for correlation');
  }
  
  const n = validPairs.length;
  const sumX = validPairs.reduce((sum, { x }) => sum + x, 0);
  const sumY = validPairs.reduce((sum, { y }) => sum + y, 0);
  const sumXY = validPairs.reduce((sum, { x, y }) => sum + x * y, 0);
  const sumX2 = validPairs.reduce((sum, { x }) => sum + x * x, 0);
  const sumY2 = validPairs.reduce((sum, { y }) => sum + y * y, 0);
  
  const numerator = n * sumXY - sumX * sumY;
  const denominator = Math.sqrt(
    (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
  );
  
  return denominator === 0 ? 0 : numerator / denominator;
};

/**
 * 计算预测值
 * @param values - 数值数组
 * @param periods - 预测期数
 * @returns 预测值数组
 * @example
 * forecast([1, 2, 3, 4, 5], 2) // [6, 7]
 */
export const forecast = (
  values: number[] | null | undefined,
  periods: number | null | undefined
): number[] => {
  if (!values?.length || values.length < 2 || !periods || periods <= 0) {
    throw new Error('Need at least 2 values for forecasting');
  }
  
  const validValues = values.filter((v): v is number => v !== null && v !== undefined);
  if (validValues.length < 2) {
    throw new Error('Need at least 2 valid values for forecasting');
  }
  
  const n = validValues.length;
  const x = Array.from({ length: n }, (_, i) => i + 1);
  const y = validValues;
  
  const sumX = x.reduce((sum, value) => sum + value, 0);
  const sumY = y.reduce((sum, value) => sum + value, 0);
  const sumXY = x.reduce((sum, value, i) => sum + value * y[i], 0);
  const sumX2 = x.reduce((sum, value) => sum + value * value, 0);
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  const result: number[] = [];
  for (let i = 0; i < periods; i++) {
    result.push(slope * (n + i + 1) + intercept);
  }
  
  return result;
};

/**
 * 计算季节性
 * @param values - 数值数组
 * @param period - 周期
 * @returns 季节性因子数组
 * @example
 * seasonality([1, 2, 1, 2, 1, 2], 2) // [0.5, 1.5]
 */
export const seasonality = (
  values: number[] | null | undefined,
  period: number | null | undefined
): number[] => {
  if (!values?.length || !period || period <= 0) return Array(period ?? 0).fill(0);
  
  const validValues = values.filter((v): v is number => v !== null && v !== undefined);
  if (!validValues.length) return Array(period).fill(0);
  
  const result: number[] = Array(period).fill(0);
  const counts: number[] = Array(period).fill(0);
  
  validValues.forEach((value, index) => {
    const position = index % period;
    result[position] += value;
    counts[position]++;
  });
  
  const totalCount = counts.reduce((sum, count) => sum + count, 0);
  return result.map((sum, index) => (sum / counts[index]) * (period / totalCount));
};

/**
 * 计算异常值
 * @param values - 数值数组
 * @param threshold - 阈值（标准差的倍数）
 * @returns 异常值数组
 * @example
 * outliers([1, 2, 3, 100, 4, 5], 2) // [100]
 */
export const outliers = (
  values: number[] | null | undefined,
  threshold: number | null | undefined = 2
): number[] => {
  if (!values?.length || values.length <= 1) {
    return [];
  }

  const validValues = values.filter((v): v is number => v !== null && v !== undefined);
  if (validValues.length <= 1) {
    return [];
  }

  const mean = validValues.reduce((sum, value) => sum + value, 0) / validValues.length;
  const stdDev = Math.sqrt(
    validValues.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) /
      validValues.length
  );
  const t = threshold ?? 2;
  
  return validValues.filter(
    (value) => Math.abs(value - mean) > t * stdDev
  );
}; 