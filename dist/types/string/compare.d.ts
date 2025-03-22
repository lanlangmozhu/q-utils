/**
 * 字符串比较工具函数
 * @packageDocumentation
 */
/**
 * 比较两个字符串
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 比较结果：-1 表示 str1 < str2，0 表示相等，1 表示 str1 > str2
 * @example
 * ```ts
 * compare('a', 'b'); // -1
 * compare('b', 'a'); // 1
 * compare('a', 'a'); // 0
 * ```
 */
export declare function compare(str1: string | null | undefined, str2: string | null | undefined): number;
/**
 * 忽略大小写比较两个字符串
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 比较结果：-1 表示 str1 < str2，0 表示相等，1 表示 str1 > str2
 * @example
 * ```ts
 * compareIgnoreCase('a', 'B'); // -1
 * compareIgnoreCase('B', 'a'); // 1
 * compareIgnoreCase('a', 'A'); // 0
 * ```
 */
export declare function compareIgnoreCase(str1: string | null | undefined, str2: string | null | undefined): number;
/**
 * 检查两个字符串是否相等
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 是否相等
 * @example
 * ```ts
 * equals('hello', 'hello'); // true
 * equals('hello', 'world'); // false
 * ```
 */
export declare function equals(str1: string | null | undefined, str2: string | null | undefined): boolean;
/**
 * 忽略大小写检查两个字符串是否相等
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 是否相等
 * @example
 * ```ts
 * equalsIgnoreCase('hello', 'HELLO'); // true
 * equalsIgnoreCase('hello', 'world'); // false
 * ```
 */
export declare function equalsIgnoreCase(str1: string | null | undefined, str2: string | null | undefined): boolean;
/**
 * 计算两个字符串的相似度（Levenshtein距离）
 * @param str1 - 第一个字符串
 * @param str2 - 第二个字符串
 * @returns 相似度（0-1之间的数值）
 * @example
 * ```ts
 * similarity('hello', 'hallo'); // 0.8
 * similarity('world', 'word'); // 0.8
 * ```
 */
export declare function similarity(str1: string | null | undefined, str2: string | null | undefined): number;
//# sourceMappingURL=compare.d.ts.map