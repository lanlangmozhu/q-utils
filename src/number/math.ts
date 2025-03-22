/**
 * 数学运算工具函数
 * @packageDocumentation
 */

/**
 * 获取数字的绝对值
 * @param value - 数字
 * @returns 绝对值
 * @example
 * abs(-123) // 123
 */
export const abs = (value: number | null | undefined): number => 
  Math.abs(value ?? 0);

/**
 * 获取数字的符号
 * @param value - 数字
 * @returns 符号（1、0 或 -1）
 * @example
 * sign(123) // 1
 * sign(0) // 0
 * sign(-123) // -1
 */
export const sign = (value: number | null | undefined): number => 
  Math.sign(value ?? 0);

/**
 * 获取数字的平方根
 * @param value - 数字
 * @returns 平方根
 * @example
 * sqrt(16) // 4
 * sqrt(17) // 4.123105625617661
 */
export const sqrt = (value: number | null | undefined): number => 
  Math.sqrt(value ?? 0);

/**
 * 获取数字的幂
 * @param base - 底数
 * @param exponent - 指数
 * @returns 幂
 * @example
 * pow(2, 3) // 8
 */
export const pow = (base: number | null | undefined, exponent: number | null | undefined): number => 
  Math.pow(base ?? 0, exponent ?? 0);

/**
 * 计算两个数的最大公约数
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 最大公约数
 * @example
 * gcd(12, 18) // 6
 */
export function gcd(a: number | null | undefined, b: number | null | undefined): number {
  a = a ?? 0;
  b = b ?? 0;
  
  if (a === 0 || b === 0) {
    return Math.max(Math.abs(a), Math.abs(b)) || 0;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp: number = b;
    b = a % b;
    a = temp;
  }

  return a || 0;
}

/**
 * 计算两个数的最小公倍数
 * @param a 第一个数
 * @param b 第二个数
 * @returns 最小公倍数
 */
export function lcm(a: number | null | undefined, b: number | null | undefined): number {
  if (a === 0 || b === 0) {
    return 0;
  }
  return Math.abs((a ?? 0) * (b ?? 0)) / gcd(a, b);
}

/**
 * 获取数字的位数
 * @param value - 数字
 * @returns 位数
 * @example
 * length(123) // 3
 */
export const length = (value: number | null | undefined): number => 
  Math.abs(value ?? 0).toString().length;

/**
 * 获取数字的阶乘
 * @param value - 数字
 * @returns 阶乘
 * @example
 * factorial(5) // 120
 */
export const factorial = (value: number | null | undefined): number => {
  if (value === null || value === undefined) return 1;
  if (value < 0) throw new Error('Factorial is not defined for negative numbers');
  if (!Number.isInteger(value)) throw new Error('Factorial is only defined for integers');
  if (value === 0 || value === 1) return 1;
  return value * factorial(value - 1);
}; 