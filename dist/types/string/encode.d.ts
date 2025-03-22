/**
 * 字符串编码和解码工具函数
 * @packageDocumentation
 */
/**
 * URL编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeUrl('Hello World'); // 'Hello%20World'
 * encodeUrl('你好世界'); // '%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'
 * ```
 */
export declare function encodeUrl(str: string | null | undefined): string;
/**
 * URL解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeUrl('Hello%20World'); // 'Hello World'
 * decodeUrl('%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'); // '你好世界'
 * ```
 */
export declare function decodeUrl(str: string | null | undefined): string;
/**
 * Base64编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeBase64('Hello World'); // 'SGVsbG8gV29ybGQ='
 * ```
 */
export declare function encodeBase64(str: string | null | undefined): string;
/**
 * Base64解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeBase64('SGVsbG8gV29ybGQ='); // 'Hello World'
 * ```
 */
export declare function decodeBase64(str: string | null | undefined): string;
/**
 * HTML编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeHtml('<div>Hello & World</div>'); // '&lt;div&gt;Hello &amp; World&lt;/div&gt;'
 * ```
 */
export declare function encodeHtml(str: string | null | undefined): string;
/**
 * HTML解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;'); // '<div>Hello & World</div>'
 * ```
 */
export declare function decodeHtml(str: string | null | undefined): string;
//# sourceMappingURL=encode.d.ts.map