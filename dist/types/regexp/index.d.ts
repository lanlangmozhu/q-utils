/**
 * 转义正则表达式中的特殊字符
 * @param str - 需要转义的字符串
 * @returns 转义后的字符串
 * @example
 * ```ts
 * escapeRegExp('.*+?^${}()|[]\\') // '\.\*\+\?\^\$\{\}\(\)\|\[\]\\'
 * ```
 */
export declare const escapeRegExp: (str: string) => string;
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
export declare const createRegExp: (pattern: string, flags?: string) => RegExp;
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
export declare const matchAll: (str: string, regexp: RegExp) => RegExpMatchArray[];
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
export declare const replaceAll: (str: string, regexp: RegExp, replacement: string) => string;
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
export declare const split: (str: string, regexp: RegExp) => string[];
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
export declare const test: (str: string, regexp: RegExp) => boolean;
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
export declare const exec: (str: string, regexp: RegExp) => RegExpExecArray | null;
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
export declare const execAll: (str: string, regexp: RegExp) => RegExpExecArray[];
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
export declare const match: (str: string, regexp: RegExp) => RegExpMatchArray | null;
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
export declare const search: (str: string, regexp: RegExp) => number;
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
export declare const replace: (str: string, regexp: RegExp, replacement: string) => string;
/**
 * 获取正则表达式的所有捕获组
 * @param regexp - 正则表达式
 * @returns 捕获组数组
 * @example
 * ```ts
 * getCaptureGroups(/test-(\\d+)-(\\w+)/) // ['$1', '$2']
 * ```
 */
export declare const getCaptureGroups: (regexp: RegExp) => string[];
/**
 * 获取正则表达式的所有标志
 * @param regexp - 正则表达式
 * @returns 标志数组
 * @example
 * ```ts
 * getFlags(/test/gi) // ['g', 'i']
 * ```
 */
export declare const getFlags: (regexp: RegExp) => string[];
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
export declare const hasFlag: (regexp: RegExp, flag: string) => boolean;
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
export declare const addFlag: (regexp: RegExp, flag: string) => RegExp;
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
export declare const removeFlag: (regexp: RegExp, flag: string) => RegExp;
/**
 * 获取正则表达式的源字符串
 * @param regexp - 正则表达式
 * @returns 源字符串
 * @example
 * ```ts
 * getSource(/test/) // 'test'
 * ```
 */
export declare const getSource: (regexp: RegExp) => string;
/**
 * 获取正则表达式的完整字符串表示
 * @param regexp - 正则表达式
 * @returns 完整字符串表示
 * @example
 * ```ts
 * toString(/test/gi) // '/test/gi'
 * ```
 */
export declare const toString: (regexp: RegExp) => string;
/**
 * 克隆正则表达式
 * @param regexp - 正则表达式
 * @returns 新的正则表达式
 * @example
 * ```ts
 * clone(/test/gi) // /test/gi
 * ```
 */
export declare const clone: (regexp: RegExp) => RegExp;
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
export declare const combine: (patterns: RegExp[], flags?: string) => RegExp;
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
export declare const countMatches: (str: string, regexp: RegExp) => number;
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
export declare const firstMatchIndex: (str: string, regexp: RegExp) => number;
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
export declare const lastMatchIndex: (str: string, regexp: RegExp) => number;
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
export declare const allMatchIndices: (str: string, regexp: RegExp) => number[];
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
export declare const allMatchRanges: (str: string, regexp: RegExp) => [number, number][];
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
export declare const allMatchTexts: (str: string, regexp: RegExp) => string[];
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
export declare const allCaptureGroups: (str: string, regexp: RegExp) => string[][];
/**
 * 获取正则表达式的所有命名捕获组
 * @param regexp - 正则表达式
 * @returns 所有命名捕获组
 * @example
 * ```ts
 * getNamedCaptureGroups(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) // ['year', 'month', 'day']
 * ```
 */
export declare const getNamedCaptureGroups: (regexp: RegExp) => string[];
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
export declare const allNamedCaptureGroups: (str: string, regexp: RegExp) => Array<Record<string, string>>;
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
export declare const allMatchPositions: (str: string, regexp: RegExp) => Array<{
    index: number;
    text: string;
}>;
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
export declare const allMatchRangesWithText: (str: string, regexp: RegExp) => Array<{
    start: number;
    end: number;
    text: string;
}>;
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
export declare const allMatchPositionsWithGroups: (str: string, regexp: RegExp) => Array<{
    index: number;
    groups: string[];
}>;
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
export declare const allMatchRangesWithGroups: (str: string, regexp: RegExp) => Array<{
    start: number;
    end: number;
    groups: string[];
}>;
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
export declare const allMatchPositionsWithNamedGroups: (str: string, regexp: RegExp) => Array<{
    index: number;
    groups: Record<string, string>;
}>;
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
export declare const allMatchRangesWithNamedGroups: (str: string, regexp: RegExp) => Array<{
    start: number;
    end: number;
    groups: Record<string, string>;
}>;
//# sourceMappingURL=index.d.ts.map