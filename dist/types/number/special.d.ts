/**
 * 特殊数字相关函数
 * @packageDocumentation
 */
/**
 * 生成斐波那契数列
 * @param n - 数列长度
 * @returns 斐波那契数列
 * @example
 * ```typescript
 * fibonacci(5) // [0, 1, 1, 2, 3]
 * ```
 */
export declare function fibonacci(n: number | null | undefined): number[];
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
export declare function primes(start: number | null | undefined, end: number | null | undefined): number[];
/**
 * 数学常数
 */
export declare const constants: {
    /**
     * 圆周率
     */
    PI: number;
    /**
     * 自然对数的底数
     */
    E: number;
    /**
     * 黄金比例
     */
    PHI: number;
    /**
     * 欧拉-马歇罗尼常数
     */
    GAMMA: number;
    /**
     * 卡塔兰常数
     */
    CATALAN: number;
    /**
     * 阿佩里常数
     */
    APERY: number;
    /**
     * 孪生素数常数
     */
    TWIN_PRIME: number;
    /**
     * 拉马努金-索尔德纳常数
     */
    RAMANUJAN_SOLDNER: number;
    /**
     * 格罗斯曼常数
     */
    GROSCHMANN: number;
    /**
     * 波特常数
     */
    PORTER: number;
    /**
     * 自然对数的底数
     */
    LN2: number;
    /**
     * 自然对数的底数
     */
    LN10: number;
    /**
     * 以e为底的2的对数
     */
    LOG2E: number;
    /**
     * 以e为底的10的对数
     */
    LOG10E: number;
    /**
     * 1/2的平方根
     */
    SQRT1_2: number;
    /**
     * 2的平方根
     */
    SQRT2: number;
};
//# sourceMappingURL=special.d.ts.map