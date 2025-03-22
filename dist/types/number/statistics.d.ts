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
export declare const mean: (numbers: number[]) => number;
/**
 * 计算中位数
 * @param numbers - 数字数组
 * @returns 中位数
 * @example
 * median([1, 2, 3, 4, 5]) // 3
 * median([1, 2, 3, 4]) // 2.5
 */
export declare const median: (numbers: number[]) => number;
/**
 * 计算众数
 * @param numbers - 数字数组
 * @returns 众数数组
 * @example
 * mode([1, 2, 2, 3, 3, 3]) // [3]
 * mode([1, 2, 2, 3, 3]) // [2, 3]
 */
export declare const mode: (numbers: number[]) => number[];
/**
 * 计算方差
 * @param numbers - 数字数组
 * @returns 方差
 * @example
 * variance([1, 2, 3, 4, 5]) // 2
 */
export declare const variance: (numbers: number[]) => number;
/**
 * 计算标准差
 * @param numbers - 数字数组
 * @returns 标准差
 * @example
 * standardDeviation([1, 2, 3, 4, 5]) // 1.4142135623730951
 */
export declare const standardDeviation: (numbers: number[]) => number;
/**
 * 计算百分位数
 * @param numbers - 数字数组
 * @param percentile - 百分位数 (0-100)
 * @returns 百分位数对应的值
 * @example
 * percentile([1, 2, 3, 4, 5], 50) // 3
 */
export declare const percentile: (numbers: number[], percentile: number) => number;
/**
 * 计算四分位数
 * @param numbers - 数字数组
 * @returns 四分位数对象
 * @example
 * quartiles([1, 2, 3, 4, 5]) // { q1: 2, q2: 3, q3: 4 }
 */
export declare const quartiles: (numbers: number[]) => {
    q1: number;
    q2: number;
    q3: number;
};
/**
 * 计算偏度
 * @param numbers - 数字数组
 * @returns 偏度
 * @example
 * skewness([1, 2, 3, 4, 5]) // 0
 */
export declare const skewness: (numbers: number[]) => number;
/**
 * 计算峰度
 * @param numbers - 数字数组
 * @returns 峰度
 * @example
 * kurtosis([1, 2, 3, 4, 5]) // -1.2
 */
export declare const kurtosis: (numbers: number[]) => number;
//# sourceMappingURL=statistics.d.ts.map