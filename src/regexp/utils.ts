/**
 * 正则表达式工具函数
 * @packageDocumentation
 */

/**
 * 获取正则表达式的源字符串
 * @param regexp - 正则表达式
 * @returns 源字符串
 * @example
 * ```ts
 * getSource(/test/) // 'test'
 * ```
 */
export const getSource = (regexp: RegExp): string => {
  return regexp.source;
};

/**
 * 获取正则表达式的完整字符串表示
 * @param regexp - 正则表达式
 * @returns 完整字符串表示
 * @example
 * ```ts
 * toString(/test/gi) // '/test/gi'
 * ```
 */
export const toString = (regexp: RegExp): string => {
  return regexp.toString();
};

/**
 * 合并多个正则表达式
 * @param patterns - 正则表达式数组
 * @param flags - 正则表达式标志
 * @returns 合并后的正则表达式
 * @example
 * ```ts
 * combine([/\d+/, /\w+/], 'g') // /(\d+)|(\w+)/g
 * ```
 */
export const combine = (patterns: RegExp[], flags?: string): RegExp => {
  const source = patterns.map(p => `(${p.source})`).join('|');
  return new RegExp(source, flags);
};

/**
 * 获取正则表达式的匹配次数
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配次数
 * @example
 * ```ts
 * countMatches('test1 test2 test3', /\w+(\d+)/g) // 3
 * ```
 */
export const countMatches = (str: string, regexp: RegExp): number => {
  return (str.match(regexp) || []).length;
};

/**
 * 获取正则表达式的第一个匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 第一个匹配位置
 * @example
 * ```ts
 * firstMatchIndex('test123', /\d+/) // 4
 * ```
 */
export const firstMatchIndex = (str: string, regexp: RegExp): number => {
  const match = str.match(regexp);
  return match ? str.indexOf(match[0]) : -1;
};

/**
 * 获取正则表达式的最后一个匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 最后一个匹配位置
 * @example
 * ```ts
 * lastMatchIndex('test123', /\d+/) // 4
 * ```
 */
export const lastMatchIndex = (str: string, regexp: RegExp): number => {
  const matches = str.match(regexp);
  return matches ? str.lastIndexOf(matches[matches.length - 1]) : -1;
};

