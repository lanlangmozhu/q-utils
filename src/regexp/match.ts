/**
 * 正则表达式匹配相关工具函数
 * @packageDocumentation
 */

/**
 * 获取所有匹配结果
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配结果数组
 * @example
 * ```ts
 * matchAll('test1 test2 test3', /\w+(\d+)/g) // [['test1', '1'], ['test2', '2'], ['test3', '3']]
 * ```
 */
export const matchAll = (str: string, regexp: RegExp): RegExpMatchArray[] => {
  return Array.from(str.matchAll(regexp));
};

/**
 * 执行正则表达式匹配
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配结果
 * @example
 * ```ts
 * exec('test123', /(\d+)/) // ['123', '123']
 * ```
 */
export const exec = (str: string, regexp: RegExp): RegExpExecArray | null => {
  return regexp.exec(str);
};

/**
 * 执行所有正则表达式匹配
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配结果
 * @example
 * ```ts
 * execAll('test1 test2 test3', /\w+(\d+)/g) // [['test1', '1'], ['test2', '2'], ['test3', '3']]
 * ```
 */
export const execAll = (str: string, regexp: RegExp): RegExpExecArray[] => {
  const results: RegExpExecArray[] = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    results.push(match);
  }
  return results;
};

/**
 * 返回匹配结果
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 匹配结果
 * @example
 * ```ts
 * match('test123', /(\d+)/) // ['123', '123']
 * ```
 */
export const match = (str: string, regexp: RegExp): RegExpMatchArray | null => {
  return str.match(regexp);
};

