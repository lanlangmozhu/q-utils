/**
 * 正则表达式搜索相关工具函数
 * @packageDocumentation
 */

/**
 * 返回匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配位置
 * @example
 * ```ts
 * search('test123', /\d+/) // 4
 * search('test', /\d+/) // -1
 * ```
 */
export const search = (str: string, regexp: RegExp): number => {
  return str.search(regexp);
};

/**
 * 测试字符串是否匹配正则表达式
 * @param str - 要测试的字符串
 * @param regexp - 正则表达式
 * @returns 是否匹配
 * @example
 * ```ts
 * test('test123', /\d+/) // true
 * test('test', /\d+/) // false
 * ```
 */
export const test = (str: string, regexp: RegExp): boolean => {
  return regexp.test(str);
};

/**
 * 按正则表达式分割字符串
 * @param str - 要分割的字符串
 * @param regexp - 正则表达式
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * split('test1,test2;test3', /[,;]/) // ['test1', 'test2', 'test3']
 * ```
 */
export const split = (str: string, regexp: RegExp): string[] => {
  return str.split(regexp);
};

