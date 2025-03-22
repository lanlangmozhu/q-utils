/**
 * 基础字符串操作工具函数
 * @packageDocumentation
 */

/**
 * 判断字符串是否为空
 * @param str - 要检查的字符串
 * @returns 是否为空
 * @example
 * ```ts
 * isEmpty(''); // true
 * isEmpty(' '); // false
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * ```
 */
export function isEmpty(str: string | null | undefined): boolean {
  return str === null || str === undefined || str.trim().length === 0;
}

/**
 * 判断字符串是否非空
 * @param str - 要检查的字符串
 * @returns 是否非空
 * @example
 * ```ts
 * isNotEmpty(''); // false
 * isNotEmpty(' '); // true
 * isNotEmpty('hello'); // true
 * ```
 */
export function isNotEmpty(str: string | null | undefined): boolean {
  return !isEmpty(str);
}

/**
 * 获取字符串长度
 * @param str - 要获取长度的字符串
 * @returns 字符串长度
 * @example
 * ```ts
 * length('hello'); // 5
 * length('你好'); // 2
 * length(''); // 0
 * ```
 */
export function length(str: string | null | undefined): number {
  if (!str || typeof str !== 'string') return 0;
  return str.length;
}

/**
 * 反转字符串
 * @param str - 要反转的字符串
 * @returns 反转后的字符串
 * @example
 * ```ts
 * reverse('hello'); // 'olleh'
 * reverse('你好'); // '好你'
 * ```
 */
export function reverse(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

/**
 * 重复字符串
 * @param str - 要重复的字符串
 * @param count - 重复次数
 * @returns 重复后的字符串
 * @example
 * ```ts
 * repeat('hello', 2); // 'hellohello'
 * repeat('a', 3); // 'aaa'
 * ```
 */
export function repeat(str: string | null | undefined, count: number): string {
  if (!str || typeof str !== 'string') return '';
  return str.repeat(count);
} 