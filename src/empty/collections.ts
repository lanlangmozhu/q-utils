/**
 * 集合类型空值检测工具函数
 * @packageDocumentation
 */

/**
 * 检查值是否为空 Map
 * @param value - 要检查的值
 * @returns 是否为空 Map
 * @example
 * isEmptyMap(new Map()) // true
 * isEmptyMap(new Map([['key', 'value']])) // false
 * isEmptyMap({}) // false
 */
export const isEmptyMap = (value: unknown): value is Map<never, never> => 
  value instanceof Map && value.size === 0;

/**
 * 检查值是否为空 Set
 * @param value - 要检查的值
 * @returns 是否为空 Set
 * @example
 * isEmptySet(new Set()) // true
 * isEmptySet(new Set([1, 2, 3])) // false
 * isEmptySet([]) // false
 */
export const isEmptySet = (value: unknown): value is Set<never> => 
  value instanceof Set && value.size === 0;

/**
 * 检查值是否为空 WeakMap
 * @param value - 要检查的值
 * @returns 是否为空 WeakMap
 * @example
 * isEmptyWeakMap(new WeakMap()) // true
 * isEmptyWeakMap(new Map()) // false
 */
export const isEmptyWeakMap = (value: unknown): value is WeakMap<object, never> => 
  value instanceof WeakMap;

/**
 * 检查值是否为空 WeakSet
 * @param value - 要检查的值
 * @returns 是否为空 WeakSet
 * @example
 * isEmptyWeakSet(new WeakSet()) // true
 * isEmptyWeakSet(new Set()) // false
 */
export const isEmptyWeakSet = (value: unknown): value is WeakSet<object> => 
  value instanceof WeakSet;

/**
 * 检查值是否为空迭代器
 * @param value - 要检查的值
 * @returns 是否为空迭代器
 * @example
 * isEmptyIterator([][Symbol.iterator]()) // true
 * isEmptyIterator([1, 2, 3][Symbol.iterator]()) // false
 */
export const isEmptyIterator = (value: unknown): value is Iterator<never> => {
  if (typeof value !== 'object' || value === null) return false;
  const iterator = value as Iterator<unknown>;
  return iterator.next().done === true;
};

/**
 * 检查值是否为空异步迭代器
 * @param value - 要检查的值
 * @returns 是否为空异步迭代器
 * @example
 * isEmptyAsyncIterator({
 *   async *[Symbol.asyncIterator]() {}
 * }[Symbol.asyncIterator]()) // true
 * isEmptyAsyncIterator({
 *   async *[Symbol.asyncIterator]() { yield 1; }
 * }[Symbol.asyncIterator]()) // false
 */
export const isEmptyAsyncIterator = async (value: unknown): Promise<boolean> => {
  if (typeof value !== 'object' || value === null) return false;
  const iterator = value as AsyncIterator<unknown>;
  return iterator.next().then(result => result.done === true);
};

