/**
 * 从对象中选取指定的属性，创建一个新对象
 *
 * @param obj - 源对象，可以为 null 或 undefined
 * @param keys - 要选取的属性名数组
 * @returns 包含选定属性的新对象，如果源对象为 null 或 undefined，则返回空对象
 * @example
 * ```ts
 * // 基本用法
 * const user = { id: 1, name: '张三', age: 30, email: 'zhangsan@example.com' };
 *
 * const userBasic = pick(user, ['id', 'name']);
 * console.log(userBasic); // 输出: { id: 1, name: '张三' }
 *
 * // 处理不存在的属性
 * const result = pick(user, ['id', 'role']);
 * console.log(result); // 输出: { id: 1 }
 *
 * // 处理 null 或 undefined
 * const nullResult = pick(null, ['id']);
 * console.log(nullResult); // 输出: {}
 * ```
 */
export declare function pick<T extends object | null | undefined, K extends keyof NonNullable<T>>(obj: T, keys: K[]): T extends object ? Pick<T, K> : Record<string, never>;
//# sourceMappingURL=pick.d.ts.map