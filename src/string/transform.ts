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
export function capitalize(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
export function capitalizeWords(str: string | null | undefined, delimiter: string = ' '): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .split(delimiter)
    .map(word => capitalize(word))
    .join(delimiter);
}

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
export function camelize(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

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
export function dasherize(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  str = str.charAt(0).toLowerCase() + str.slice(1);
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

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
export function toNumber(str: string | null | undefined): number {
  if (!str || typeof str !== 'string') return 0;
  return Number(str);
}

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
export function toBoolean(str: string | null | undefined): boolean {
  if (!str || typeof str !== 'string') return false;
  const normalized = str.toLowerCase().trim();
  return normalized === 'true' || normalized === '1' || normalized === 'yes';
} 