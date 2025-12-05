/**
 * 正则表达式基础操作工具函数
 * @packageDocumentation
 */

/**
 * 转义正则表达式中的特殊字符
 * @param str - 需要转义的字符串
 * @returns 转义后的字符串
 * @example
 * ```ts
 * escapeRegExp('.*+?^${}()|[]\\') // '\.\*\+\?\^\$\{\}\(\)\|\[\]\\'
 * ```
 */
export const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * 创建正则表达式对象
 * @param pattern - 正则表达式模式
 * @param flags - 正则表达式标志
 * @returns 正则表达式对象
 * @example
 * ```ts
 * createRegExp('test', 'gi') // /test/gi
 * ```
 */
export const createRegExp = (pattern: string, flags?: string): RegExp => {
  return new RegExp(pattern, flags);
};

/**
 * 克隆正则表达式
 * @param regexp - 正则表达式
 * @returns 新的正则表达式
 * @example
 * ```ts
 * clone(/test/gi) // /test/gi
 * ```
 */
export const clone = (regexp: RegExp): RegExp => {
  return new RegExp(regexp.source, regexp.flags);
};

