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
export function encodeUrl(str: string | null | undefined): string {
  if (!str) return '';
  return encodeURIComponent(str);
}

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
export function decodeUrl(str: string | null | undefined): string {
  if (!str) return '';
  return decodeURIComponent(str);
}

/**
 * Base64编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeBase64('Hello World'); // 'SGVsbG8gV29ybGQ='
 * ```
 */
export function encodeBase64(str: string | null | undefined): string {
  if (!str) return '';
  return btoa(unescape(encodeURIComponent(str)));
}

/**
 * Base64解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeBase64('SGVsbG8gV29ybGQ='); // 'Hello World'
 * ```
 */
export function decodeBase64(str: string | null | undefined): string {
  if (!str) return '';
  return decodeURIComponent(escape(atob(str)));
}

/**
 * HTML编码
 * @param str - 要编码的字符串
 * @returns 编码后的字符串
 * @example
 * ```ts
 * encodeHtml('<div>Hello & World</div>'); // '&lt;div&gt;Hello &amp; World&lt;/div&gt;'
 * ```
 */
export function encodeHtml(str: string | null | undefined): string {
  if (!str) return '';
  const escapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
    '\\': '&#x5c;'
  };
  
  return str.replace(/[&<>"'`\\]/g, (match) => escapeMap[match]);
}

/**
 * HTML解码
 * @param str - 要解码的字符串
 * @returns 解码后的字符串
 * @example
 * ```ts
 * decodeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;'); // '<div>Hello & World</div>'
 * ```
 */
export function decodeHtml(str: string | null | undefined): string {
  if (!str) return '';
  const unescapeMap: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x60;': '`',
    '&#x5c;': '\\'
  };
  
  return str.replace(/&(?:amp|lt|gt|quot|#x27|#x60|#x5c);/g, (match) => unescapeMap[match]);
} 