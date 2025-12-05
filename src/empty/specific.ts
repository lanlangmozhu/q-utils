/**
 * 特定类型空值检测工具函数
 * @packageDocumentation
 */

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

