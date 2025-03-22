/**
 * 字符串查找和替换工具函数
 * @packageDocumentation
 */
/**
 * 查找子字符串
 * @param str - 要搜索的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 子字符串的位置，如果未找到则返回-1
 * @example
 * ```ts
 * indexOf('Hello World', 'World'); // 6
 * indexOf('Hello World', 'xyz'); // -1
 * ```
 */
export declare function indexOf(str: string, searchStr: string): number;
/**
 * 替换字符串
 * @param str - 要处理的字符串
 * @param searchStr - 要替换的子字符串
 * @param replaceStr - 替换后的字符串
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replace('Hello World', 'World', 'JavaScript'); // 'Hello JavaScript'
 * ```
 */
export declare function replace(str: string, searchStr: string, replaceStr: string): string;
/**
 * 替换所有匹配项
 * @param str - 要处理的字符串
 * @param searchStr - 要替换的子字符串
 * @param replaceStr - 替换后的字符串
 * @returns 替换后的字符串
 * @example
 * ```ts
 * replaceAll('Hello World World', 'World', 'JavaScript'); // 'Hello JavaScript JavaScript'
 * ```
 */
export declare function replaceAll(str: string, searchStr: string, replaceStr: string): string;
/**
 * 是否包含子字符串
 * @param str - 要搜索的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 是否包含
 * @example
 * ```ts
 * includes('Hello World', 'World'); // true
 * includes('Hello World', 'xyz'); // false
 * ```
 */
export declare function includes(str: string, searchStr: string): boolean;
/**
 * 是否以某字符串开头
 * @param str - 要检查的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 是否以该字符串开头
 * @example
 * ```ts
 * startsWith('Hello World', 'Hello'); // true
 * startsWith('Hello World', 'World'); // false
 * ```
 */
export declare function startsWith(str: string, searchStr: string): boolean;
/**
 * 是否以某字符串结尾
 * @param str - 要检查的字符串
 * @param searchStr - 要查找的子字符串
 * @returns 是否以该字符串结尾
 * @example
 * ```ts
 * endsWith('Hello World', 'World'); // true
 * endsWith('Hello World', 'Hello'); // false
 * ```
 */
export declare function endsWith(str: string, searchStr: string): boolean;
//# sourceMappingURL=search.d.ts.map