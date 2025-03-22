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
export function toObject<T, K extends string | number, V>(
  arr: T[] | null | undefined,
  keyFn: (item: T) => K,
  valueFn: (item: T) => V
): Record<K, V> {
  if (!Array.isArray(arr)) {
    return {} as Record<K, V>;
  }
  
  return arr.reduce((obj, item) => {
    const key = keyFn(item);
    const value = valueFn(item);
    obj[key] = value;
    return obj;
  }, {} as Record<K, V>);
}

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
export function toMap<T, K, V>(
  arr: T[] | null | undefined,
  keyFn: (item: T) => K,
  valueFn: (item: T) => V
): Map<K, V> {
  if (!Array.isArray(arr)) {
    return new Map();
  }
  
  return new Map(arr.map(item => [keyFn(item), valueFn(item)]));
}

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
export function toSet<T, R = T>(
  arr: T[] | null | undefined,
  transformFn?: (item: T) => R
): Set<R> {
  if (!Array.isArray(arr)) {
    return new Set<R>();
  }
  
  if (transformFn) {
    return new Set<R>(arr.map(transformFn));
  }
  
  return new Set<R>(arr as unknown as R[]);
}

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
export function toString<T>(
  arr: T[] | null | undefined,
  separator: string = ','
): string {
  if (!Array.isArray(arr)) {
    return '';
  }
  
  return arr.join(separator);
}
