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
export function compare(str1: string | null | undefined, str2: string | null | undefined): number {
  if (!str1 || typeof str1 !== 'string') return -1;
  if (!str2 || typeof str2 !== 'string') return 1;
  return str1.localeCompare(str2);
}

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
export function compareIgnoreCase(str1: string | null | undefined, str2: string | null | undefined): number {
  if (!str1 || typeof str1 !== 'string') return -1;
  if (!str2 || typeof str2 !== 'string') return 1;
  return str1.toLowerCase().localeCompare(str2.toLowerCase());
}

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
export function equals(str1: string | null | undefined, str2: string | null | undefined): boolean {
  if (!str1 || typeof str1 !== 'string') return false;
  if (!str2 || typeof str2 !== 'string') return false;
  return str1 === str2;
}

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
export function equalsIgnoreCase(str1: string | null | undefined, str2: string | null | undefined): boolean {
  if (!str1 || typeof str1 !== 'string') return false;
  if (!str2 || typeof str2 !== 'string') return false;
  return str1.toLowerCase() === str2.toLowerCase();
}

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
export function similarity(str1: string | null | undefined, str2: string | null | undefined): number {
  if (!str1 || typeof str1 !== 'string') return 0;
  if (!str2 || typeof str2 !== 'string') return 0;
  
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const costs = new Array();
  for (let i = 0; i <= longer.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= shorter.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[shorter.length] = lastValue;
  }
  
  return (longer.length - costs[shorter.length]) / longer.length;
} 