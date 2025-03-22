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
export function count(str: string, searchStr: string): number {
  if (!searchStr) return 0;
  return (str.match(new RegExp(searchStr, 'g')) || []).length;
}

/**
 * 统计字符出现频率
 * @param str - 要统计的字符串
 * @returns 字符出现频率对象
 * @example
 * ```ts
 * frequency('hello'); // { h: 1, e: 1, l: 2, o: 1 }
 * ```
 */
export function frequency(str: string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

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
export function getNumbers(str: string): number[] {
  return str.match(/-?\d*\.?\d+/g)?.map(Number) || [];
}

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
export function getLetters(str: string): string[] {
  return str.match(/[a-zA-Z]/g) || [];
} 