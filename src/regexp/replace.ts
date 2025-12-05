/**
 * 正则表达式替换相关工具函数
 * @packageDocumentation
 */

/**
 * 替换所有匹配项
 * @param str - 要替换的字符串
 * @param regexp - 正则表达式
 * @param replacement - 替换内容
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replaceAll('test1 test2 test3', /\w+(\d+)/g, 'word$1') // 'word1 word2 word3'
 * ```
 */
export const replaceAll = (str: string, regexp: RegExp, replacement: string): string => {
  return str.replace(new RegExp(regexp.source, regexp.flags + 'g'), replacement);
};

/**
 * 替换匹配项
 * @param str - 要替换的字符串
 * @param regexp - 正则表达式
 * @param replacement - 替换内容
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replace('test123', /(\d+)/, '456') // 'test456'
 * ```
 */
export const replace = (str: string, regexp: RegExp, replacement: string): string => {
  return str.replace(regexp, replacement);
};

