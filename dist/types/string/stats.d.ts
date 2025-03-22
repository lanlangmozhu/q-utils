/**
 * 字符串统计工具函数
 * @packageDocumentation
 */
/**
 * 统计子字符串出现次数
 * @param str - 要统计的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 出现次数
 * @example
 * ```ts
 * count('Hello World World', 'World'); // 2
 * count('aaa', 'aa'); // 2
 * ```
 */
export declare function count(str: string, searchStr: string): number;
/**
 * 统计字符出现频率
 * @param str - 要统计的字符串
 * @returns 字符出现频率对象
 * @example
 * ```ts
 * frequency('hello'); // { h: 1, e: 1, l: 2, o: 1 }
 * ```
 */
export declare function frequency(str: string): Record<string, number>;
/**
 * 获取字符串中的数字
 * @param str - 要处理的字符串
 * @returns 数字数组
 * @example
 * ```ts
 * getNumbers('abc123def456'); // [123, 456]
 * getNumbers('1.23, 4.56'); // [1.23, 4.56]
 * ```
 */
export declare function getNumbers(str: string): number[];
/**
 * 获取字符串中的字母
 * @param str - 要处理的字符串
 * @returns 字母数组
 * @example
 * ```ts
 * getLetters('abc123def456'); // ['a', 'b', 'c', 'd', 'e', 'f']
 * getLetters('Hello World'); // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']
 * ```
 */
export declare function getLetters(str: string): string[];
//# sourceMappingURL=stats.d.ts.map