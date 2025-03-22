/**
 * 字符串分割和合并工具函数
 * @packageDocumentation
 */
/**
 * 分割字符串
 * @param str - 要分割的字符串
 * @param separator - 分隔符
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * split('Hello World', ' '); // ['Hello', 'World']
 * split('a,b,c', ','); // ['a', 'b', 'c']
 * ```
 */
export declare function split(str: string, separator: string): string[];
/**
 * 合并字符串数组
 * @param arr - 要合并的字符串数组
 * @param separator - 分隔符
 * @returns 合并后的字符串
 * @example
 * ```ts
 * join(['Hello', 'World'], ' '); // 'Hello World'
 * join(['a', 'b', 'c'], ','); // 'a,b,c'
 * ```
 */
export declare function join(arr: string[], separator: string): string;
/**
 * 按长度分割
 * @param str - 要分割的字符串
 * @param length - 每个部分的长度
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * splitByLength('Hello World', 5); // ['Hello', ' Worl', 'd']
 * splitByLength('123456', 2); // ['12', '34', '56']
 * ```
 */
export declare function splitByLength(str: string, length: number): string[];
/**
 * 按行分割
 * @param str - 要分割的字符串
 * @returns 分割后的字符串数组
 * @example
 * ```ts
 * splitLines('Hello\nWorld'); // ['Hello', 'World']
 * splitLines('Hello\r\nWorld'); // ['Hello', 'World']
 * ```
 */
export declare function splitLines(str: string): string[];
//# sourceMappingURL=split.d.ts.map