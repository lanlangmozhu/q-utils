/**
 * 对象类型检测工具函数
 * @packageDocumentation
 */

/**
 * 检查值是否为对象
 * @param value - 要检查的值
 * @returns 是否为对象
 * @example
 * isObject({}) // true
 * isObject([]) // true
 * isObject(null) // false
 * isObject(undefined) // false
 */
export const isObject = (value: unknown): value is object => 
  typeof value === 'object' && value !== null;

/**
 * 检查值是否为普通对象（由 Object 构造函数创建或原型链上没有其他对象）
 * @param value - 要检查的值
 * @returns 是否为普通对象
 * @example
 * isPlainObject({}) // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject(new Date()) // false
 * isPlainObject([]) // false
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== 'object' || value === null) return false;
  
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

/**
 * 检查值是否为数组
 * @param value - 要检查的值
 * @returns 是否为数组
 * @example
 * isArray([]) // true
 * isArray([1, 2, 3]) // true
 * isArray({}) // false
 */
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

/**
 * 检查值是否为函数
 * @param value - 要检查的值
 * @returns 是否为函数
 * @example
 * isFunction(() => {}) // true
 * isFunction(function() {}) // true
 * isFunction({}) // false
 */
export const isFunction = (value: unknown): value is (...args: unknown[]) => unknown => typeof value === 'function';

/**
 * 检查值是否为日期对象
 * @param value - 要检查的值
 * @returns 是否为日期对象
 * @example
 * isDate(new Date()) // true
 * isDate('2024-03-18') // false
 */
export const isDate = (value: unknown): value is Date => value instanceof Date;

