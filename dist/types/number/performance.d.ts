/**
 * 性能优化相关函数
 * @packageDocumentation
 */
/**
 * 优化数字精度
 * @param value - 要优化的数字
 * @param precision - 精度
 * @returns 优化后的数字
 * @example
 * optimizePrecision(1.23456789, 2) // 1.23
 */
export declare function optimizePrecision(value: number, precision: number): number;
/**
 * 缓存计算结果
 * @param fn - 要缓存的函数
 * @returns 缓存后的函数
 * @example
 * const cachedFn = cache((x) => x * x);
 * cachedFn(2) // 4
 * cachedFn(2) // 4 (从缓存返回)
 */
export declare function cache<T extends (...args: any[]) => any>(fn: T): T;
/**
 * 节流函数
 * @param fn - 要节流的函数
 * @param wait - 等待时间（毫秒）
 * @returns 节流后的函数
 * @example
 * const throttledFn = throttle((x) => console.log(x), 1000);
 * throttledFn(1); // 立即执行
 * throttledFn(2); // 被节流
 */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, wait: number): T;
/**
 * 优化四舍五入
 * @param value - 要优化的数字
 * @param decimals - 小数位数
 * @returns 优化后的数字
 * @example
 * optimizeRound(1.23456789, 2) // 1.23
 */
export declare function optimizeRound(value: number, decimals: number): number;
/**
 * 防抖函数
 * @param fn - 要防抖的函数
 * @param wait - 等待时间（毫秒）
 * @returns 防抖后的函数
 * @example
 * const debouncedFn = debounce((x) => console.log(x), 1000);
 * debouncedFn(1); // 延迟执行
 * debouncedFn(2); // 取消之前的执行
 */
export declare function debounce<T extends (...args: any[]) => any>(fn: T, wait: number): T;
//# sourceMappingURL=performance.d.ts.map