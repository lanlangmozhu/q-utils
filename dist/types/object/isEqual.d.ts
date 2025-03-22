/**
 * 深度比较两个值是否相等
 *
 * @param value - 第一个要比较的值
 * @param other - 第二个要比较的值
 * @returns 如果两个值深度相等则返回true，否则返回false
 * @example
 * ```ts
 * // 基本类型比较
 * isEqual(1, 1);                      // 返回: true
 * isEqual('a', 'a');                  // 返回: true
 * isEqual(null, null);                // 返回: true
 * isEqual(undefined, undefined);      // 返回: true
 * isEqual(NaN, NaN);                  // 返回: true
 *
 * // 对象比较
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); // 返回: true
 * isEqual({a: 1, b: 2}, {b: 2, a: 1}); // 返回: true (属性顺序不影响结果)
 * isEqual({a: 1}, {a: '1'});           // 返回: false
 *
 * // 数组比较
 * isEqual([1, 2, 3], [1, 2, 3]);      // 返回: true
 * isEqual([1, 2, 3], [3, 2, 1]);      // 返回: false
 *
 * // 嵌套对象比较
 * isEqual(
 *   {a: 1, b: {c: 3}},
 *   {a: 1, b: {c: 3}}
 * );  // 返回: true
 *
 * // Set比较
 * isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])); // 返回: true
 * isEqual(new Set([1, 2, 3]), new Set([3, 2, 1])); // 返回: true (Set元素顺序不影响结果)
 *
 * // Map比较
 * isEqual(
 *   new Map([['a', 1], ['b', 2]]),
 *   new Map([['a', 1], ['b', 2]])
 * ); // 返回: true
 *
 * // 混合类型比较
 * isEqual(
 *   { a: 1, b: [1, 2, { c: new Set([1, 2]) }] },
 *   { a: 1, b: [1, 2, { c: new Set([1, 2]) }] }
 * ); // 返回: true
 * ```
 */
export declare function isEqual(value: any, other: any): boolean;
//# sourceMappingURL=isEqual.d.ts.map