/**
 * 高级类型检测工具函数
 * @packageDocumentation
 */

/**
 * 检查值是否为 Promise
 * @param value - 要检查的值
 * @returns 是否为 Promise
 * @example
 * isPromise(Promise.resolve()) // true
 * isPromise(new Promise(() => {})) // true
 * isPromise({}) // false
 */
export const isPromise = (value: unknown): value is Promise<unknown> => {
  return value instanceof Promise || 
    (typeof value === 'object' && value !== null && 
     typeof (value as Promise<unknown>).then === 'function');
};

/**
 * 检查值是否为正则表达式
 * @param value - 要检查的值
 * @returns 是否为正则表达式
 * @example
 * isRegExp(/test/) // true
 * isRegExp(new RegExp('test')) // true
 * isRegExp('test') // false
 */
export const isRegExp = (value: unknown): value is RegExp => value instanceof RegExp;

/**
 * 检查值是否为 Error 对象
 * @param value - 要检查的值
 * @returns 是否为 Error 对象
 * @example
 * isError(new Error()) // true
 * isError(new TypeError()) // true
 * isError({}) // false
 */
export const isError = (value: unknown): value is Error => value instanceof Error;

/**
 * 检查值是否为 Symbol
 * @param value - 要检查的值
 * @returns 是否为 Symbol
 * @example
 * isSymbol(Symbol()) // true
 * isSymbol(Symbol('test')) // true
 * isSymbol('test') // false
 */
export const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol';

/**
 * 检查值是否为 BigInt
 * @param value - 要检查的值
 * @returns 是否为 BigInt
 * @example
 * isBigInt(BigInt(1)) // true
 * isBigInt(1n) // true
 * isBigInt(1) // false
 */
export const isBigInt = (value: unknown): value is bigint => typeof value === 'bigint';

/**
 * 检查值是否为 Map 对象
 * @param value - 要检查的值
 * @returns 是否为 Map 对象
 * @example
 * isMap(new Map()) // true
 * isMap({}) // false
 */
export const isMap = (value: unknown): value is Map<unknown, unknown> => value instanceof Map;

/**
 * 检查值是否为 Set 对象
 * @param value - 要检查的值
 * @returns 是否为 Set 对象
 * @example
 * isSet(new Set()) // true
 * isSet([]) // false
 */
export const isSet = (value: unknown): value is Set<unknown> => value instanceof Set;

/**
 * 检查值是否为 WeakMap 对象
 * @param value - 要检查的值
 * @returns 是否为 WeakMap 对象
 * @example
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
export const isWeakMap = (value: unknown): value is WeakMap<object, unknown> => 
  value instanceof WeakMap;

/**
 * 检查值是否为 WeakSet 对象
 * @param value - 要检查的值
 * @returns 是否为 WeakSet 对象
 * @example
 * isWeakSet(new WeakSet()) // true
 * isWeakSet(new Set()) // false
 */
export const isWeakSet = (value: unknown): value is WeakSet<object> => 
  value instanceof WeakSet;

/**
 * 检查值是否为可迭代对象
 * @param value - 要检查的值
 * @returns 是否为可迭代对象
 * @example
 * isIterable([]) // true
 * isIterable('') // true
 * isIterable(new Set()) // true
 * isIterable({}) // false
 */
export const isIterable = (value: unknown): value is Iterable<unknown> => {
  return value !== null && 
    typeof (value as Iterable<unknown>)[Symbol.iterator] === 'function';
};

/**
 * 检查值是否为异步可迭代对象
 * @param value - 要检查的值
 * @returns 是否为异步可迭代对象
 * @example
 * isAsyncIterable({
 *   async *[Symbol.asyncIterator]() {
 *     yield 1;
 *   }
 * }) // true
 * isAsyncIterable([]) // false
 */
export const isAsyncIterable = (value: unknown): value is AsyncIterable<unknown> => {
  return value !== null && 
    typeof (value as AsyncIterable<unknown>)[Symbol.asyncIterator] === 'function';
};

