/**
 * 字符串验证工具函数
 * @packageDocumentation
 */
/**
 * 是否为数字字符串
 * @param str - 要验证的字符串
 * @returns 是否为数字字符串
 * @example
 * ```ts
 * isNumeric('123'); // true
 * isNumeric('12.34'); // true
 * isNumeric('abc'); // false
 * ```
 */
export declare function isNumeric(str: string | null | undefined): boolean;
/**
 * 是否为字母字符串
 * @param str - 要验证的字符串
 * @returns 是否为字母字符串
 * @example
 * ```ts
 * isAlpha('abc'); // true
 * isAlpha('123'); // false
 * isAlpha('abc123'); // false
 * ```
 */
export declare function isAlpha(str: string | null | undefined): boolean;
/**
 * 是否为字母数字字符串
 * @param str - 要验证的字符串
 * @returns 是否为字母数字字符串
 * @example
 * ```ts
 * isAlphanumeric('abc123'); // true
 * isAlphanumeric('abc'); // true
 * isAlphanumeric('123'); // true
 * isAlphanumeric('abc-123'); // false
 * ```
 */
export declare function isAlphanumeric(str: string | null | undefined): boolean;
/**
 * 是否为邮箱
 * @param str - 要验证的字符串
 * @returns 是否为邮箱
 * @example
 * ```ts
 * isEmail('test@example.com'); // true
 * isEmail('invalid-email'); // false
 * ```
 */
export declare function isEmail(str: string | null | undefined): boolean;
/**
 * 是否为URL
 * @param str - 要验证的字符串
 * @returns 是否为URL
 * @example
 * ```ts
 * isUrl('https://example.com'); // true
 * isUrl('http://example.com'); // true
 * isUrl('ftp://example.com'); // true
 * isUrl('invalid-url'); // false
 * ```
 */
export declare function isUrl(str: string | null | undefined): boolean;
/**
 * 是否为手机号
 * @param str - 要验证的字符串
 * @returns 是否为手机号
 * @example
 * ```ts
 * isPhone('13812345678'); // true
 * isPhone('138-1234-5678'); // true
 * isPhone('invalid-phone'); // false
 * ```
 */
export declare function isPhone(str: string | null | undefined): boolean;
//# sourceMappingURL=validate.d.ts.map