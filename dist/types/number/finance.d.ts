/**
 * 金融计算工具函数
 * @packageDocumentation
 */
/**
 * 计算复利
 * @param principal - 本金
 * @param rate - 年利率
 * @param time - 时间（年）
 * @param frequency - 复利频率（每年复利次数），默认为1
 * @returns 最终金额
 * @example
 * compound(1000, 0.05, 1) // 1050
 * compound(1000, 0.05, 1, 12) // 1051.16
 */
export declare function compound(principal: number, rate: number, time: number, frequency?: number): number;
/**
 * 计算复利利息
 * @param principal - 本金
 * @param rate - 年利率
 * @param time - 时间（年）
 * @param frequency - 复利频率（每年复利次数）
 * @returns 利息
 * @example
 * compoundInterest(1000, 0.05, 1) // 50
 * compoundInterest(1000, 0.05, 1, 12) // 51.16
 */
export declare const compoundInterest: (principal: number, rate: number, time: number, frequency?: number) => number;
/**
 * 计算现值
 * @param futureValue - 未来值
 * @param rate - 年利率
 * @param time - 时间（年）
 * @returns 现值
 * @example
 * presentValue(1050, 0.05, 1) // 1000
 */
export declare const presentValue: (futureValue: number, rate: number, time: number) => number;
/**
 * 计算未来值
 * @param presentValue - 现值
 * @param rate - 年利率
 * @param time - 时间（年）
 * @returns 未来值
 * @example
 * futureValue(1000, 0.05, 1) // 1050
 */
export declare const futureValue: (presentValue: number, rate: number, time: number) => number;
/**
 * 计算年化收益率
 * @param initialValue - 初始值
 * @param finalValue - 最终值
 * @param time - 时间（年）
 * @returns 年化收益率
 * @example
 * annualReturnRate(1000, 1050, 1) // 0.05
 */
export declare const annualReturnRate: (initialValue: number, finalValue: number, time: number) => number;
/**
 * 计算折扣
 * @param originalPrice - 原价
 * @param discountRate - 折扣率（0-1）
 * @returns 折扣后的价格
 * @example
 * discount(100, 0.2) // 80
 * discount(100, 0.5) // 50
 */
export declare function discount(originalPrice: number, discountRate: number): number;
/**
 * 计算折扣率
 * @param originalPrice - 原价
 * @param discountedPrice - 折扣后价格
 * @returns 折扣率
 * @example
 * discountRate(100, 80) // 0.2
 */
export declare const discountRate: (originalPrice: number, discountedPrice: number) => number;
/**
 * 计算税额
 * @param amount - 金额
 * @param taxRate - 税率（0-1）
 * @returns 税额
 * @example
 * tax(1000, 0.1) // 100
 * tax(1000, 0.2) // 200
 */
export declare function tax(amount: number, taxRate: number): number;
/**
 * 计算税后收入
 * @param income - 收入
 * @param taxRate - 税率
 * @returns 税后收入
 * @example
 * afterTax(10000, 0.1) // 9000
 */
export declare const afterTax: (income: number, taxRate: number) => number;
/**
 * 计算贷款月供
 * @param principal - 贷款金额
 * @param annualRate - 年利率
 * @param months - 贷款期限（月）
 * @returns 月供金额
 * @example
 * loan(100000, 0.05, 12) // 8560.75
 */
export declare function loan(principal: number, annualRate: number, months: number): number;
/**
 * 计算贷款总利息
 * @param principal - 贷款金额
 * @param rate - 年利率
 * @param months - 贷款期限（月）
 * @returns 总利息
 * @example
 * loanInterest(100000, 0.05, 12) // 2729
 */
export declare const loanInterest: (principal: number, rate: number, months: number) => number;
/**
 * 计算折旧
 * @param cost - 资产原值
 * @param salvage - 残值
 * @param life - 使用年限
 * @param period - 计算期数
 * @param method - 折旧方法，默认为'straight'
 * @returns 折旧金额
 * @example
 * depreciation(10000, 1000, 5, 1) // 1800
 * depreciation(10000, 1000, 5, 1, 'declining') // 2000
 */
export declare function depreciation(cost: number, salvage: number, life: number, period: number, method?: 'straight' | 'declining'): number;
/**
 * 计算投资回报率
 * @param initialInvestment - 初始投资
 * @param finalValue - 最终价值
 * @returns 投资回报率
 * @example
 * roi(1000, 1500) // 0.5
 */
export declare const roi: (initialInvestment: number, finalValue: number) => number;
/**
 * 计算内部收益率
 * @param cashFlows - 现金流数组
 * @returns 内部收益率
 * @example
 * irr([-1000, 100, 200, 300, 400]) // 0.1
 */
export declare const irr: (cashFlows: number[]) => number;
//# sourceMappingURL=finance.d.ts.map