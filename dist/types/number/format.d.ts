/**
 * 数字格式化工具函数
 * @packageDocumentation
 */
/**
 * 将数字转换为货币格式
 * @param value - 要格式化的数字
 * @param locale - 地区设置
 * @param options - 格式化选项
 * @returns 格式化后的货币字符串
 * @example
 * toCurrency(1234.56) // '¥1,234.56'
 */
export declare const toCurrency: (value: number, locale?: string, options?: Intl.NumberFormatOptions) => string;
/**
 * 格式化数字
 * @param value - 要格式化的数字
 * @param locale - 地区设置
 * @param options - 格式化选项
 * @returns 格式化后的数字字符串
 * @example
 * formatNumber(1234.56) // '1,234.56'
 */
export declare const formatNumber: (value: number, locale?: string, options?: Intl.NumberFormatOptions) => string;
/**
 * 将数字转换为固定小数位数
 * @param value - 要格式化的数字
 * @param digits - 小数位数
 * @returns 格式化后的数字字符串
 * @example
 * toFixed(1234.5678, 2) // '1234.57'
 */
export declare const toFixed: (value: number, digits: number) => string;
/**
 * 计算数字的精度
 * @param value - 要计算的数字
 * @returns 精度值
 * @example
 * precision(1234.5678) // 4
 */
export declare const precision: (value: number) => number;
/**
 * 解析数字字符串为数字
 * @param value - 要解析的字符串
 * @param options - 解析选项
 * @param options.radix - 进制，默认为10
 * @param options.allowNaN - 是否允许NaN，默认为false
 * @param options.allowInfinity - 是否允许无穷大，默认为false
 * @returns 解析后的数字
 * @example
 * parse('123.45') // 123.45
 * parse('1,234.56') // 1234.56
 * parse('abc') // 0
 * parse('abc', { allowNaN: true }) // NaN
 */
export declare function parse(value: string, options?: {
    radix?: number;
    allowNaN?: boolean;
    allowInfinity?: boolean;
}): number;
/**
 * 将数字转换为百分比
 * @param value - 要转换的数字
 * @param options - 转换选项
 * @param options.precision - 保留的小数位数，默认为0
 * @param options.withSymbol - 是否包含百分号，默认为true
 * @returns 百分比字符串
 * @example
 * percentage(0.1234) // '12%'
 * percentage(0.1234, { precision: 2 }) // '12.34%'
 * percentage(0.1234, { withSymbol: false }) // '12'
 */
export declare function percentage(value: number, options?: {
    precision?: number;
    withSymbol?: boolean;
}): string;
/**
 * 将数字转换为科学计数法
 * @param value - 要转换的数字
 * @param options - 转换选项
 * @param options.precision - 保留的小数位数，默认为10
 * @param options.notation - 表示法类型，默认为'standard'
 * @returns 科学计数法字符串
 * @example
 * toScientific(1234567) // '1.234567e+6'
 * toScientific(1234567, { precision: 2 }) // '1.23e+6'
 */
export declare function toScientific(value: number, options?: {
    precision?: number;
    notation?: 'standard' | 'engineering' | 'compact';
}): string;
/**
 * 将数字转换为中文数字
 * @param value - 要转换的数字
 * @param options - 转换选项
 * @param options.useTraditional - 是否使用繁体字，默认为false
 * @param options.useCapital - 是否使用大写，默认为false
 * @returns 中文数字字符串
 * @example
 * toChineseNumber(1234) // '一千二百三十四'
 * toChineseNumber(1234, { useTraditional: true }) // '一千二百三十四'
 * toChineseNumber(1234, { useCapital: true }) // '壹仟贰佰叁拾肆'
 */
export declare function toChineseNumber(value: number, options?: {
    useTraditional?: boolean;
    useCapital?: boolean;
}): string;
//# sourceMappingURL=format.d.ts.map