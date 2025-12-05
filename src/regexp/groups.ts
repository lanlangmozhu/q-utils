/**
 * 正则表达式捕获组相关工具函数
 * @packageDocumentation
 */

/**
 * 获取正则表达式的所有捕获组
 * @param regexp - 正则表达式
 * @returns 捕获组数组
 * @example
 * ```ts
 * getCaptureGroups(/test-(\\d+)-(\\w+)/) // ['$1', '$2']
 * ```
 */
export const getCaptureGroups = (regexp: RegExp): string[] => {
  const groups: string[] = [];
  const source = regexp.source;
  const groupRegex = /\([^)]*\)/g;
  let index = 0;
  while (groupRegex.exec(source) !== null) {
    groups.push(`$${++index}`);
  }
  return groups;
};

/**
 * 获取正则表达式的所有捕获组值
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有捕获组值
 * @example
 * ```ts
 * allCaptureGroups('test1 test2 test3', /\w+(\d+)/g) // [['1'], ['2'], ['3']]
 * ```
 */
export const allCaptureGroups = (str: string, regexp: RegExp): string[][] => {
  const groups: string[][] = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    groups.push(match.slice(1));
  }
  return groups;
};

/**
 * 获取正则表达式的所有命名捕获组
 * @param regexp - 正则表达式
 * @returns 所有命名捕获组
 * @example
 * ```ts
 * getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // ['year', 'month', 'day']
 * ```
 */
export const getNamedCaptureGroups = (regexp: RegExp): string[] => {
  const groups: string[] = [];
  const source = regexp.source;
  const groupRegex = /\(\?<(\w+)>[^)]*\)/g;
  let match: RegExpExecArray | null;
  while ((match = groupRegex.exec(source)) !== null) {
    groups.push(match[1]);
  }
  return groups;
};

/**
 * 获取正则表达式的所有命名捕获组值
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有命名捕获组值
 * @example
 * ```ts
 * allNamedCaptureGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ year: '2023', month: '01', day: '01' }]
 * ```
 */
export const allNamedCaptureGroups = (str: string, regexp: RegExp): Array<Record<string, string>> => {
  const results: Array<Record<string, string>> = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    if (match.groups) {
      results.push(match.groups as Record<string, string>);
    }
  }
  return results;
};

