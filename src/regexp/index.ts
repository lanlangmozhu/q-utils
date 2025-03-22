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

/**
 * 获取正则表达式的所有匹配位置
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置
 * @example
 * ```ts
 * allMatchIndices('test1 test2 test3', /\w+(\d+)/g) // [0, 6, 12]
 * ```
 */
export const allMatchIndices = (str: string, regexp: RegExp): number[] => {
  const indices: number[] = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    indices.push(match.index);
  }
  return indices;
};

/**
 * 获取正则表达式的所有匹配范围
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围
 * @example
 * ```ts
 * allMatchRanges('test1 test2 test3', /\w+(\d+)/g) // [[0, 5], [6, 11], [12, 17]]
 * ```
 */
export const allMatchRanges = (str: string, regexp: RegExp): [number, number][] => {
  const ranges: [number, number][] = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    ranges.push([match.index, match.index + match[0].length]);
  }
  return ranges;
};

/**
 * 获取正则表达式的所有匹配文本
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配文本
 * @example
 * ```ts
 * allMatchTexts('test1 test2 test3', /\w+(\d+)/g) // ['test1', 'test2', 'test3']
 * ```
 */
export const allMatchTexts = (str: string, regexp: RegExp): string[] => {
  return (str.match(regexp) || []);
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

/**
 * 获取正则表达式的所有匹配位置和文本
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置和文本
 * @example
 * ```ts
 * allMatchPositions('test1 test2 test3', /\w+(\d+)/g) // [{ index: 0, text: 'test1' }, { index: 6, text: 'test2' }, { index: 12, text: 'test3' }]
 * ```
 */
export const allMatchPositions = (str: string, regexp: RegExp): Array<{ index: number; text: string }> => {
  const positions: Array<{ index: number; text: string }> = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    positions.push({
      index: match.index,
      text: match[0]
    });
  }
  return positions;
};

/**
 * 获取正则表达式的所有匹配范围和文本
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围和文本
 * @example
 * ```ts
 * allMatchRangesWithText('test1 test2 test3', /\w+(\d+)/g) // [{ start: 0, end: 5, text: 'test1' }, { start: 6, end: 11, text: 'test2' }, { start: 12, end: 17, text: 'test3' }]
 * ```
 */
export const allMatchRangesWithText = (str: string, regexp: RegExp): Array<{ start: number; end: number; text: string }> => {
  const ranges: Array<{ start: number; end: number; text: string }> = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    ranges.push({
      start: match.index,
      end: match.index + match[0].length,
      text: match[0]
    });
  }
  return ranges;
};

/**
 * 获取正则表达式的所有匹配位置和捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置和捕获组
 * @example
 * ```ts
 * allMatchPositionsWithGroups('test1 test2 test3', /\w+(\d+)/g) // [{ index: 0, groups: ['1'] }, { index: 6, groups: ['2'] }, { index: 12, groups: ['3'] }]
 * ```
 */
export const allMatchPositionsWithGroups = (str: string, regexp: RegExp): Array<{ index: number; groups: string[] }> => {
  const positions: Array<{ index: number; groups: string[] }> = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    positions.push({
      index: match.index,
      groups: match.slice(1)
    });
  }
  return positions;
};

/**
 * 获取正则表达式的所有匹配范围和捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围和捕获组
 * @example
 * ```ts
 * allMatchRangesWithGroups('test1 test2 test3', /\w+(\d+)/g) // [{ start: 0, end: 5, groups: ['1'] }, { start: 6, end: 11, groups: ['2'] }, { start: 12, end: 17, groups: ['3'] }]
 * ```
 */
export const allMatchRangesWithGroups = (str: string, regexp: RegExp): Array<{ start: number; end: number; groups: string[] }> => {
  const ranges: Array<{ start: number; end: number; groups: string[] }> = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    ranges.push({
      start: match.index,
      end: match.index + match[0].length,
      groups: match.slice(1)
    });
  }
  return ranges;
};

/**
 * 获取正则表达式的所有匹配位置和命名捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配位置和命名捕获组
 * @example
 * ```ts
 * allMatchPositionsWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ index: 0, groups: { year: '2023', month: '01', day: '01' } }]
 * ```
 */
export const allMatchPositionsWithNamedGroups = (str: string, regexp: RegExp): Array<{ index: number; groups: Record<string, string> }> => {
  const results: Array<{ index: number; groups: Record<string, string> }> = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    if (match.groups) {
      results.push({
        index: match.index,
        groups: match.groups as Record<string, string>
      });
    }
  }
  return results;
};

/**
 * 获取正则表达式的所有匹配范围和命名捕获组
 * @param str - 要匹配的字符串
 * @param regexp - 正则表达式
 * @returns 所有匹配范围和命名捕获组
 * @example
 * ```ts
 * allMatchRangesWithNamedGroups('2023-01-01', /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // [{ start: 0, end: 10, groups: { year: '2023', month: '01', day: '01' } }]
 * ```
 */
export const allMatchRangesWithNamedGroups = (str: string, regexp: RegExp): Array<{ start: number; end: number; groups: Record<string, string> }> => {
  const results: Array<{ start: number; end: number; groups: Record<string, string> }> = [];
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(str)) !== null) {
    if (match.groups) {
      results.push({
        start: match.index,
        end: match.index + match[0].length,
        groups: match.groups as Record<string, string>
      });
    }
  }
  return results;
}; 