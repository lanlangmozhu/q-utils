/**
 * 布尔值工具函数
 * @packageDocumentation
 */

/**
 * 将值转换为布尔值
 * @param value - 要转换的值
 * @returns 布尔值
 * @example
 * toBoolean('true') // true
 * toBoolean('false') // false
 * toBoolean(1) // true
 * toBoolean(0) // false
 * toBoolean(null) // false
 * toBoolean(undefined) // false
 */
export const toBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalized = value.toLowerCase().trim();
    if (normalized === 'true') return true;
    if (normalized === 'false') return false;
  }
  if (typeof value === 'number') return value !== 0;
  return false;
};

/**
 * 检查值是否为真值
 * @param value - 要检查的值
 * @returns 是否为真值
 * @example
 * isTruthy(true) // true
 * isTruthy(1) // true
 * isTruthy('test') // true
 * isTruthy([]) // true
 * isTruthy({}) // true
 * isTruthy(false) // false
 * isTruthy(0) // false
 * isTruthy('') // false
 * isTruthy(null) // false
 * isTruthy(undefined) // false
 */
export const isTruthy = (value: unknown): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.length > 0;
  if (typeof value === 'number') return value !== 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
};

/**
 * 检查值是否为假值
 * @param value - 要检查的值
 * @returns 是否为假值
 * @example
 * isFalsy(false) // true
 * isFalsy(0) // true
 * isFalsy('') // true
 * isFalsy(null) // true
 * isFalsy(undefined) // true
 * isFalsy(true) // false
 * isFalsy(1) // false
 * isFalsy('test') // false
 * isFalsy([]) // false
 * isFalsy({}) // false
 */
export const isFalsy = (value: unknown): boolean => !isTruthy(value); 