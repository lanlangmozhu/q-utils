/**
 * 统计计算相关函数
 */

/**
 * 计算平均值
 * @param numbers - 数字数组
 * @returns 平均值
 * @example
 * mean([1, 2, 3, 4, 5]) // 3
 */
export const mean = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};

/**
 * 计算中位数
 * @param numbers - 数字数组
 * @returns 中位数
 * @example
 * median([1, 2, 3, 4, 5]) // 3
 * median([1, 2, 3, 4]) // 2.5
 */
export const median = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
};

/**
 * 计算众数
 * @param numbers - 数字数组
 * @returns 众数数组
 * @example
 * mode([1, 2, 2, 3, 3, 3]) // [3]
 * mode([1, 2, 2, 3, 3]) // [2, 3]
 */
export const mode = (numbers: number[]): number[] => {
  if (numbers.length === 0) return [];
  const frequency: Record<number, number> = {};
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  const maxFreq = Math.max(...Object.values(frequency));
  return Object.entries(frequency)
    .filter(([_, freq]) => freq === maxFreq)
    .map(([num]) => Number(num));
};

/**
 * 计算方差
 * @param numbers - 数字数组
 * @returns 方差
 * @example
 * variance([1, 2, 3, 4, 5]) // 2
 */
export const variance = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  const avg = mean(numbers);
  return numbers.reduce((sum, num) => sum + Math.pow(num - avg, 2), 0) / numbers.length;
};

/**
 * 计算标准差
 * @param numbers - 数字数组
 * @returns 标准差
 * @example
 * standardDeviation([1, 2, 3, 4, 5]) // 1.4142135623730951
 */
export const standardDeviation = (numbers: number[]): number => {
  return Math.sqrt(variance(numbers));
};

/**
 * 计算百分位数
 * @param numbers - 数字数组
 * @param percentile - 百分位数 (0-100)
 * @returns 百分位数对应的值
 * @example
 * percentile([1, 2, 3, 4, 5], 50) // 3
 */
export const percentile = (numbers: number[], percentile: number): number => {
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const index = (percentile / 100) * (sorted.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) return sorted[lower];
  return sorted[lower] + (index - lower) * (sorted[upper] - sorted[lower]);
};

/**
 * 计算四分位数
 * @param numbers - 数字数组
 * @returns 四分位数对象
 * @example
 * quartiles([1, 2, 3, 4, 5]) // { q1: 2, q2: 3, q3: 4 }
 */
export const quartiles = (numbers: number[]): { q1: number; q2: number; q3: number } => {
  return {
    q1: percentile(numbers, 25),
    q2: percentile(numbers, 50),
    q3: percentile(numbers, 75)
  };
};

/**
 * 计算偏度
 * @param numbers - 数字数组
 * @returns 偏度
 * @example
 * skewness([1, 2, 3, 4, 5]) // 0
 */
export const skewness = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  const avg = mean(numbers);
  const stdDev = standardDeviation(numbers);
  if (stdDev === 0) return 0;
  return numbers.reduce((sum, num) => sum + Math.pow((num - avg) / stdDev, 3), 0) / numbers.length;
};

/**
 * 计算峰度
 * @param numbers - 数字数组
 * @returns 峰度
 * @example
 * kurtosis([1, 2, 3, 4, 5]) // -1.2
 */
export const kurtosis = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  const avg = mean(numbers);
  const stdDev = standardDeviation(numbers);
  if (stdDev === 0) return 0;
  return numbers.reduce((sum, num) => sum + Math.pow((num - avg) / stdDev, 4), 0) / numbers.length - 3;
}; 