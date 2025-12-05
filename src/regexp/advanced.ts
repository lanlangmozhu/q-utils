/**
 * 正则表达式高级功能工具函数
 * @packageDocumentation
 */

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

