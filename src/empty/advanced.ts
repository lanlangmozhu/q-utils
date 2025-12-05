/**
 * 高级空值检测工具函数
 * @packageDocumentation
 */

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

