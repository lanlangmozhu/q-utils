/**
 * 字符串转换工具函数
 * @packageDocumentation
 */
/**
 * 首字母大写
 * @param str - 要处理的字符串
 * @returns 首字母大写的字符串
 * @example
 * ```ts
 * capitalize('hello'); // 'Hello'
 * capitalize('hello world'); // 'Hello world'
 * ```
 */
export declare function capitalize(str: string | null | undefined): string;
/**
 * 每个单词首字母大写
 * @param str - 要处理的字符串
 * @param delimiter - 单词分隔符，默认为空格
 * @returns 每个单词首字母大写的字符串
 * @example
 * ```ts
 * capitalizeWords('hello world'); // 'Hello World'
 * capitalizeWords('hello-world', '-'); // 'Hello-World'
 * ```
 */
export declare function capitalizeWords(str: string | null | undefined, delimiter?: string): string;
/**
 * 将连字符分隔的字符串转换为驼峰式
 * @param str - 要转换的字符串
 * @returns 驼峰式字符串
 * @example
 * ```ts
 * camelize('hello-world'); // 'helloWorld'
 * camelize('background-color'); // 'backgroundColor'
 * ```
 */
export declare function camelize(str: string | null | undefined): string;
/**
 * 将驼峰命名法转换为横线连接命名法
 * @param str - 要转换的字符串
 * @returns 横线连接命名字符串
 * @example
 * ```ts
 * dasherize('helloWorld'); // 'hello-world'
 * dasherize('backgroundColor'); // 'background-color'
 * ```
 */
export declare function dasherize(str: string | null | undefined): string;
/**
 * 转换为数字
 * @param str - 要转换的字符串
 * @returns 转换后的数字
 * @example
 * ```ts
 * toNumber('123'); // 123
 * toNumber('12.34'); // 12.34
 * toNumber('abc'); // NaN
 * ```
 */
export declare function toNumber(str: string | null | undefined): number;
/**
 * 转换为布尔值
 * @param str - 要转换的字符串
 * @returns 转换后的布尔值
 * @example
 * ```ts
 * toBoolean('true'); // true
 * toBoolean('false'); // false
 * toBoolean('1'); // true
 * toBoolean('0'); // false
 * ```
 */
export declare function toBoolean(str: string | null | undefined): boolean;
//# sourceMappingURL=transform.d.ts.map