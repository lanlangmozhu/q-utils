/**
 * 函数组合，从右到左组合多个函数
 * 组合函数方向为：compose(f, g, h)(x) 等同于 f(g(h(x)))
 *
 * @param funcs - 要组合的函数列表，从右到左执行
 * @returns 组合后的函数
 * @example
 * ```ts
 * // 基本用法
 * const add10 = (x: number) => x + 10;
 * const multiply2 = (x: number) => x * 2;
 * const toString = (x: number) => `结果是: ${x}`;
 *
 * // 组合函数：toString(multiply2(add10(5)))
 * const calculate = compose(toString, multiply2, add10);
 *
 * calculate(5); // 返回 "结果是: 30"
 *
 * // 数据流向：5 -> add10 -> 15 -> multiply2 -> 30 -> toString -> "结果是: 30"
 * ```
 */
export declare function compose<R>(...funcs: Array<(arg: any) => any>): (arg: any) => R;
//# sourceMappingURL=compose.d.ts.map