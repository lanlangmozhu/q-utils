/**
 * 特殊数字相关函数
 * @packageDocumentation
 */

import { isPrime  } from './basic';


/**
 * 生成斐波那契数列
 * @param n - 数列长度
 * @returns 斐波那契数列
 * @example
 * ```typescript
 * fibonacci(5) // [0, 1, 1, 2, 3]
 * ```
 */
export function fibonacci(n: number | null | undefined): number[] {
  if (!n || n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

/**
 * 计算阶乘（使用 math.ts 中的实现）
 * @param n - 要计算阶乘的数
 * @returns 阶乘结果
 * @example
 * ```typescript
 * factorial(5) // 120
 * ```
 */

/**
 * 判断是否为质数（使用 basic.ts 中的实现）
 * @param num - 要判断的数字
 * @returns 是否为质数
 * @example
 * ```typescript
 * isPrime(17) // true
 * isPrime(4) // false
 * ```
 */

/**
 * 生成质数序列
 * @param start - 起始值
 * @param end - 结束值
 * @returns 质数序列
 * @example
 * ```typescript
 * primes(1, 10) // [2, 3, 5, 7]
 * ```
 */
export function primes(start: number | null | undefined, end: number | null | undefined): number[] {
  if (start === null || start === undefined || end === null || end === undefined) return [];
  if (start > end) return [];
  
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

/**
 * 数学常数
 */
export const constants = {
  /**
   * 圆周率
   */
  PI: Math.PI,
  /**
   * 自然对数的底数
   */
  E: Math.E,
  /**
   * 黄金比例
   */
  PHI: (1 + Math.sqrt(5)) / 2,
  /**
   * 欧拉-马歇罗尼常数
   */
  GAMMA: 0.57721566490153286060651209008240243104215933593992,
  /**
   * 卡塔兰常数
   */
  CATALAN: 0.91596559417721901505460351493238411077414937428167,
  /**
   * 阿佩里常数
   */
  APERY: 1.20205690315959428539973816151144999076498629234049,
  /**
   * 孪生素数常数
   */
  TWIN_PRIME: 0.6601618158468695739278121100145557784326233602847334133194484233354056423,
  /**
   * 拉马努金-索尔德纳常数
   */
  RAMANUJAN_SOLDNER: 1.451369234883381050283968485892027449493032283648015322693192337,
  /**
   * 格罗斯曼常数
   */
  GROSCHMANN: 0.280169499023869133036436491230798000607242203228322835059757351,
  /**
   * 波特常数
   */
  PORTER: 1.46707807943397547289779848470722995344990327547776,
  /**
   * 自然对数的底数
   */
  LN2: Math.LN2,
  /**
   * 自然对数的底数
   */
  LN10: Math.LN10,
  /**
   * 以e为底的2的对数
   */
  LOG2E: Math.LOG2E,
  /**
   * 以e为底的10的对数
   */
  LOG10E: Math.LOG10E,
  /**
   * 1/2的平方根
   */
  SQRT1_2: Math.SQRT1_2,
  /**
   * 2的平方根
   */
  SQRT2: Math.SQRT2
}; 