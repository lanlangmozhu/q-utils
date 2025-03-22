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
export declare const growthRate: (initialValue: number | null | undefined, finalValue: number | null | undefined) => number;
/**
 * 计算复合增长率
 * @param initialValue - 初始值
 * @param finalValue - 最终值
 * @param periods - 期数
 * @returns 复合增长率
 * @example
 * compoundGrowthRate(100, 150, 2) // 0.2247
 */
export declare const compoundGrowthRate: (initialValue: number | null | undefined, finalValue: number | null | undefined, periods: number | null | undefined) => number;
/**
 * 计算移动平均
 * @param values - 数值数组
 * @param windowSize - 窗口大小
 * @returns 移动平均数组
 * @example
 * movingAverage([1, 2, 3, 4, 5], 3) // [2, 3, 4]
 */
export declare const movingAverage: (values: number[] | null | undefined, windowSize: number | null | undefined) => number[];
/**
 * 计算指数移动平均
 * @param values - 数值数组
 * @param alpha - 平滑因子
 * @returns 指数移动平均数组
 * @example
 * exponentialMovingAverage([1, 2, 3, 4, 5], 0.2) // [1, 1.2, 1.56, 2.048, 2.6384]
 */
export declare const exponentialMovingAverage: (values: number[] | null | undefined, alpha: number | null | undefined) => number[];
/**
 * 计算趋势
 * @param values - 数值数组
 * @returns 趋势（1: 上升, -1: 下降, 0: 平稳）
 * @example
 * trend([1, 2, 3, 4, 5]) // 1
 * trend([5, 4, 3, 2, 1]) // -1
 */
export declare const trend: (values: number[] | null | undefined) => number;
/**
 * 计算分布
 * @param values - 数值数组
 * @param bins - 区间数
 * @returns 分布对象
 * @example
 * distribution([1, 2, 2, 3, 3, 3, 4, 4, 5], 3) // { "1-2": 3, "2-3": 3, "3-4": 3 }
 */
export declare const distribution: (values: number[] | null | undefined, bins: number | null | undefined) => Record<string, number>;
/**
 * 计算相关性
 * @param x - X数组
 * @param y - Y数组
 * @returns 相关系数
 * @example
 * correlation([1, 2, 3], [2, 4, 6]) // 1
 */
export declare const correlation: (x: number[] | null | undefined, y: number[] | null | undefined) => number;
/**
 * 计算预测值
 * @param values - 数值数组
 * @param periods - 预测期数
 * @returns 预测值数组
 * @example
 * forecast([1, 2, 3, 4, 5], 2) // [6, 7]
 */
export declare const forecast: (values: number[] | null | undefined, periods: number | null | undefined) => number[];
/**
 * 计算季节性
 * @param values - 数值数组
 * @param period - 周期
 * @returns 季节性因子数组
 * @example
 * seasonality([1, 2, 1, 2, 1, 2], 2) // [0.5, 1.5]
 */
export declare const seasonality: (values: number[] | null | undefined, period: number | null | undefined) => number[];
/**
 * 计算异常值
 * @param values - 数值数组
 * @param threshold - 阈值（标准差的倍数）
 * @returns 异常值数组
 * @example
 * outliers([1, 2, 3, 100, 4, 5], 2) // [100]
 */
export declare const outliers: (values: number[] | null | undefined, threshold?: number | null | undefined) => number[];
//# sourceMappingURL=analysis.d.ts.map