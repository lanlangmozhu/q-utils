/**
 * 创建一个只执行一次的函数
 * 确保函数无论被调用多少次，只会执行一次，并返回第一次执行的结果
 *
 * @param func - 要执行一次的函数
 * @returns 包装后的函数，只会执行一次
 * @example
 * ```ts
 * // 基本用法
 * const initialize = once(() => {
 *   console.log('初始化操作，只会执行一次');
 *   return { initialized: true };
 * });
 *
 * const result1 = initialize(); // 输出: '初始化操作，只会执行一次'
 * const result2 = initialize(); // 不会再次输出
 *
 * console.log(result1 === result2); // true, 返回相同的结果
 * ```
 */
export declare function once<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T>;
//# sourceMappingURL=once.d.ts.map