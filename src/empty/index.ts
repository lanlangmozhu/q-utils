/**
 * 空值检测工具函数
 */

/**
 * 检查值是否为 null 或 undefined
 * @param value - 要检查的值
 * @returns 是否为 null 或 undefined
 * @example
 * isNil(null) // true
 * isNil(undefined) // true
 * isNil('') // false
 * isNil(0) // false
 * isNil(false) // false
 */
export const isNil = (value: unknown): value is null | undefined => 
  value === null || value === undefined;

/**
 * 检查值是否为空（null、undefined、空字符串、空数组、空对象）
 * @param value - 要检查的值
 * @returns 是否为空
 * @example
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty('') // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(0) // false
 * isEmpty('0') // false
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as object).length === 0;
  return false;
};

/**
 * 判断字符串是否为空
 * @param str 要判断的字符串
 * @returns 是否为空字符串
 */
export function isEmptyString(str: string): boolean {
  return str === '';
}

/**
 * 检查值是否为空数组
 * @param value - 要检查的值
 * @returns 是否为空数组
 * @example
 * isEmptyArray([]) // true
 * isEmptyArray([1, 2, 3]) // false
 * isEmptyArray({}) // false
 */
export const isEmptyArray = (value: unknown): value is [] => 
  Array.isArray(value) && value.length === 0;

/**
 * 判断对象是否为空
 * @param obj 要判断的对象
 * @returns 是否为空对象
 */
export function isEmptyObject(obj: object): boolean {
  if (Array.isArray(obj)) {
    return false;
  }
  return Object.keys(obj).length === 0;
}

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
 * 检查值是否为空 Date
 * @param value - 要检查的值
 * @returns 是否为空 Date
 * @example
 * isEmptyDate(new Date('')) // true
 * isEmptyDate(new Date()) // false
 */
export const isEmptyDate = (value: unknown): value is Date => 
  value instanceof Date && isNaN(value.getTime());

/**
 * 检查值是否为空正则表达式
 * @param value - 要检查的值
 * @returns 是否为空正则表达式
 * @example
 * isEmptyRegExp(new RegExp('')) // true
 * isEmptyRegExp(/test/) // false
 */
export const isEmptyRegExp = (value: unknown): value is RegExp => 
  value instanceof RegExp && value.toString() === '/(?:)/';

/**
 * 检查值是否为空 Error
 * @param value - 要检查的值
 * @returns 是否为空 Error
 * @example
 * isEmptyError(new Error('')) // true
 * isEmptyError(new Error('test')) // false
 */
export const isEmptyError = (value: unknown): value is Error => 
  value instanceof Error && value.message === '';

/**
 * 判断 Promise 是否为空
 * @param promise 要判断的 Promise
 * @returns 是否为空 Promise
 */
export async function isEmptyPromise(promise: Promise<unknown>): Promise<boolean> {
  try {
    const value = await promise;
    return value === undefined || value === null;
  } catch {
    return false;
  }
}

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

/**
 * 检查值是否为空或假值
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsy(null) // true
 * isEmptyOrFalsy(undefined) // true
 * isEmptyOrFalsy('') // true
 * isEmptyOrFalsy(0) // true
 * isEmptyOrFalsy(false) // true
 * isEmptyOrFalsy('test') // false
 * isEmptyOrFalsy(1) // false
 */
export const isEmptyOrFalsy = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'boolean') return !value;
  if (typeof value === 'string') return value.length === 0;
  if (typeof value === 'number') return value === 0;
  return false;
};

/**
 * 检查值是否为空或假值（不包括空数组和空对象）
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsyStrict(null) // true
 * isEmptyOrFalsyStrict(undefined) // true
 * isEmptyOrFalsyStrict('') // true
 * isEmptyOrFalsyStrict(0) // true
 * isEmptyOrFalsyStrict(false) // true
 * isEmptyOrFalsyStrict([]) // false
 * isEmptyOrFalsyStrict({}) // false
 * isEmptyOrFalsyStrict('test') // false
 * isEmptyOrFalsyStrict(1) // false
 */
export const isEmptyOrFalsyStrict = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'boolean') return !value;
  if (typeof value === 'string') return value.length === 0;
  if (typeof value === 'number') return value === 0;
  if (Array.isArray(value)) return false;
  if (typeof value === 'object') return false;
  return false;
};

/**
 * 检查值是否为空或假值（包括空数组和空对象）
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsyLoose(null) // true
 * isEmptyOrFalsyLoose(undefined) // true
 * isEmptyOrFalsyLoose('') // true
 * isEmptyOrFalsyLoose(0) // true
 * isEmptyOrFalsyLoose(false) // true
 * isEmptyOrFalsyLoose([]) // true
 * isEmptyOrFalsyLoose({}) // true
 * isEmptyOrFalsyLoose('test') // false
 * isEmptyOrFalsyLoose(1) // false
 */
export const isEmptyOrFalsyLoose = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'boolean') return !value;
  if (typeof value === 'string') return value.length === 0;
  if (typeof value === 'number') return value === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as object).length === 0;
  return false;
};

/**
 * 检查值是否为空或假值（包括空数组、空对象和空字符串）
 * @param value - 要检查的值
 * @returns 是否为空或假值
 * @example
 * isEmptyOrFalsyStrictest(null) // true
 * isEmptyOrFalsyStrictest(undefined) // true
 * isEmptyOrFalsyStrictest('') // true
 * isEmptyOrFalsyStrictest(0) // true
 * isEmptyOrFalsyStrictest(false) // true
 * isEmptyOrFalsyStrictest([]) // true
 * isEmptyOrFalsyStrictest({}) // true
 * isEmptyOrFalsyStrictest('test') // false
 * isEmptyOrFalsyStrictest(1) // false
 */
export const isEmptyOrFalsyStrictest = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'boolean') return !value;
  if (typeof value === 'string') return value.length === 0;
  if (typeof value === 'number') return value === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as object).length === 0;
  return false;
}; 