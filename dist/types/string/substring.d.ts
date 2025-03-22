/**
 * 字符串截取和填充工具函数
 * @packageDocumentation
 */
/**
 * 截断字符串，超出指定长度的部分用省略号替代
 * @param str - 要处理的字符串
 * @param length - 最大长度
 * @param omission - 省略符号，默认为'...'
 * @param countingChineseCharsAsTwo - 是否将中文字符按两个字符计算，默认为false
 * @returns 处理后的字符串
 * @example
 * ```ts
 * truncate('Hello World', 5); // 'Hello...'
 * truncate('Hello World', 8, '…'); // 'Hello Wo…'
 * truncate('你好世界', 4); // '你好世界'
 * truncate('你好世界', 4, '...', true); // '你好...'
 * ```
 */
export declare function truncate(str: string, length: number, omission?: string, countingChineseCharsAsTwo?: boolean): string;
/**
 * 左侧填充
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param padStr - 填充字符，默认为空格
 * @returns 填充后的字符串
 * @example
 * ```ts
 * padStart('123', 5); // '  123'
 * padStart('123', 5, '0'); // '00123'
 * ```
 */
export declare function padStart(str: string, length: number, padStr?: string): string;
/**
 * 右侧填充
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param padStr - 填充字符，默认为空格
 * @returns 填充后的字符串
 * @example
 * ```ts
 * padEnd('123', 5); // '123  '
 * padEnd('123', 5, '0'); // '12300'
 * ```
 */
export declare function padEnd(str: string, length: number, padStr?: string): string;
/**
 * 从左侧截取
 * @param str - 要截取的字符串
 * @param length - 截取长度
 * @returns 截取后的字符串
 * @example
 * ```ts
 * left('Hello World', 5); // 'Hello'
 * left('你好世界', 2); // '你好'
 * ```
 */
export declare function left(str: string, length: number): string;
/**
 * 从右侧截取
 * @param str - 要截取的字符串
 * @param length - 截取长度
 * @returns 截取后的字符串
 * @example
 * ```ts
 * right('Hello World', 5); // 'World'
 * right('你好世界', 2); // '世界'
 * ```
 */
export declare function right(str: string, length: number): string;
//# sourceMappingURL=substring.d.ts.map