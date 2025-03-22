/**
 * 函数柯里化，将接受多个参数的函数转换为接受单个参数的函数序列
 *
 * @param func - 要柯里化的函数
 * @param arity - 可选的参数数量，默认为函数的参数长度
 * @returns 柯里化后的函数
 * @example
 * ```ts
 * // 基本用法
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const curriedAdd = curry(add);
 *
 * curriedAdd(1)(2)(3); // 返回 6
 * curriedAdd(1, 2)(3); // 也返回 6
 * curriedAdd(1)(2, 3); // 也返回 6
 * curriedAdd(1, 2, 3); // 也返回 6
 *
 * // 指定参数数量
 * const multiply = (...args: number[]) => args.reduce((a, b) => a * b, 1);
 * const curriedMultiply = curry(multiply, 3);
 *
 * curriedMultiply(2)(3)(4); // 返回 24
 * ```
 */
export declare function curry<T extends (...args: any[]) => any>(func: T, arity?: number): (...args: any[]) => any;
//# sourceMappingURL=curry.d.ts.map