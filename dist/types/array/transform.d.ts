/**
 * 数组转换相关工具函数
 * @packageDocumentation
 */
/**
 * 将数组转换为对象
 * @param arr - 源数组
 * @param keyFn - 生成键的函数
 * @param valueFn - 生成值的函数
 * @returns 转换后的对象
 * @example
 * ```typescript
 * toObject(
 *   [{ id: 1, name: 'a' }, { id: 2, name: 'b' }],
 *   item => item.id,
 *   item => item.name
 * )
 * // 返回 { 1: 'a', 2: 'b' }
 * ```
 */
export declare function toObject<T, K extends string | number, V>(arr: T[] | null | undefined, keyFn: (item: T) => K, valueFn: (item: T) => V): Record<K, V>;
/**
 * 将数组转换为Map
 * @param arr - 源数组
 * @param keyFn - 生成键的函数
 * @param valueFn - 生成值的函数
 * @returns 转换后的Map
 * @example
 * ```typescript
 * toMap(
 *   [{ id: 1, name: 'a' }, { id: 2, name: 'b' }],
 *   item => item.id,
 *   item => item.name
 * )
 * // 返回 Map(2) { 1 => 'a', 2 => 'b' }
 * ```
 */
export declare function toMap<T, K, V>(arr: T[] | null | undefined, keyFn: (item: T) => K, valueFn: (item: T) => V): Map<K, V>;
/**
 * 将数组转换为Set
 * @param arr - 源数组
 * @param transformFn - 转换函数
 * @returns 转换后的Set
 * @example
 * ```typescript
 * toSet([1, 2, 3, 3, 4, 4, 5])
 * // 返回 Set(5) { 1, 2, 3, 4, 5 }
 * ```
 */
export declare function toSet<T, R = T>(arr: T[] | null | undefined, transformFn?: (item: T) => R): Set<R>;
/**
 * 将数组转换为字符串
 * @param arr - 源数组
 * @param separator - 分隔符
 * @returns 转换后的字符串
 * @example
 * ```typescript
 * toString([1, 2, 3], '-')
 * // 返回 '1-2-3'
 * ```
 */
export declare function toString<T>(arr: T[] | null | undefined, separator?: string): string;
//# sourceMappingURL=transform.d.ts.map