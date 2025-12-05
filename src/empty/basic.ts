/**
 * 基础空值检测工具函数
 * @packageDocumentation
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

