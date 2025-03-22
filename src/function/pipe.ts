/**
 * 函数管道，从左到右组合多个函数
 * 管道函数方向为：pipe(f, g, h)(x) 等同于 h(g(f(x)))
 * 与compose相反，pipe是从左到右执行函数
 * 
 * @param funcs - 要组合的函数列表，从左到右执行
 * @returns 组合后的函数
 * @example
 * ```ts
 * // 基本用法
 * const add10 = (x: number) => x + 10;
 * const multiply2 = (x: number) => x * 2;
 * const toString = (x: number) => `结果是: ${x}`;
 * 
 * // 组合函数：toString(multiply2(add10(5)))
 * const calculate = pipe(add10, multiply2, toString);
 * 
 * calculate(5); // 返回 "结果是: 30"
 * 
 * // 数据流向：5 -> add10 -> 15 -> multiply2 -> 30 -> toString -> "结果是: 30"
 * ```
 */
export function pipe<R>(
  ...funcs: Array<(arg: any) => any>
): (arg: any) => R {
  if (funcs.length === 0) {
    return (arg: any) => arg as unknown as R;
  }
  
  if (funcs.length === 1) {
    return funcs[0] as (arg: any) => R;
  }
  
  return function(arg: any): R {
    return funcs.reduce((composed, func) => func(composed), arg) as R;
  };
} 