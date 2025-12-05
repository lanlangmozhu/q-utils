/**
 * 正则表达式标志相关工具函数
 * @packageDocumentation
 */

/**
 * 获取正则表达式的所有标志
 * @param regexp - 正则表达式
 * @returns 标志数组
 * @example
 * ```ts
 * getFlags(/test/gi) // ['g', 'i']
 * ```
 */
export const getFlags = (regexp: RegExp): string[] => {
  return regexp.flags.split('');
};

/**
 * 检查正则表达式是否包含指定标志
 * @param regexp - 正则表达式
 * @param flag - 要检查的标志
 * @returns 是否包含标志
 * @example
 * ```ts
 * hasFlag(/test/gi, 'g') // true
 * hasFlag(/test/gi, 'm') // false
 * ```
 */
export const hasFlag = (regexp: RegExp, flag: string): boolean => {
  return regexp.flags.includes(flag);
};

/**
 * 添加正则表达式标志
 * @param regexp - 正则表达式
 * @param flag - 要添加的标志
 * @returns 新的正则表达式
 * @example
 * ```ts
 * addFlag(/test/, 'g') // /test/g
 * ```
 */
export const addFlag = (regexp: RegExp, flag: string): RegExp => {
  return new RegExp(regexp.source, regexp.flags + flag);
};

/**
 * 移除正则表达式标志
 * @param regexp - 正则表达式
 * @param flag - 要移除的标志
 * @returns 新的正则表达式
 * @example
 * ```ts
 * removeFlag(/test/gi, 'i') // /test/g
 * ```
 */
export const removeFlag = (regexp: RegExp, flag: string): RegExp => {
  return new RegExp(regexp.source, regexp.flags.replace(flag, ''));
};

