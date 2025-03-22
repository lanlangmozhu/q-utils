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
export const toCurrency = (
  value: number,
  locale: string = 'zh-CN',
  options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'CNY'
  }
): string => {
  return new Intl.NumberFormat(locale, options).format(value);
};

/**
 * 格式化数字
 * @param value - 要格式化的数字
 * @param locale - 地区设置
 * @param options - 格式化选项
 * @returns 格式化后的数字字符串
 * @example
 * formatNumber(1234.56) // '1,234.56'
 */
export const formatNumber = (
  value: number,
  locale: string = 'zh-CN',
  options: Intl.NumberFormatOptions = {}
): string => {
  return new Intl.NumberFormat(locale, options).format(value);
};

/**
 * 将数字转换为固定小数位数
 * @param value - 要格式化的数字
 * @param digits - 小数位数
 * @returns 格式化后的数字字符串
 * @example
 * toFixed(1234.5678, 2) // '1234.57'
 */
export const toFixed = (value: number, digits: number): string => {
  return value.toFixed(digits);
};

/**
 * 计算数字的精度
 * @param value - 要计算的数字
 * @returns 精度值
 * @example
 * precision(1234.5678) // 4
 */
export const precision = (value: number): number => {
  return value.toString().split('.')[1]?.length || 0;
};

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
export function parse(value: string, options: {
  radix?: number;
  allowNaN?: boolean;
  allowInfinity?: boolean;
} = {}): number {
  const {
    radix = 10,
    allowNaN = false,
    allowInfinity = false
  } = options;

  if (typeof value !== 'string') {
    return allowNaN ? NaN : 0;
  }

  value = value.trim();
  if (!value) {
    return allowNaN ? NaN : 0;
  }

  // 移除千分位分隔符
  value = value.replace(/,/g, '');

  // 尝试解析数字
  let result = Number(value);
  if (isNaN(result)) {
    result = parseInt(value, radix);
  }

  if (isNaN(result)) {
    return allowNaN ? NaN : 0;
  }

  if (!isFinite(result) && !allowInfinity) {
    return allowNaN ? NaN : 0;
  }

  return result;
}

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
export function percentage(value: number, options: {
  precision?: number;
  withSymbol?: boolean;
} = {}): string {
  const {
    precision = 0,
    withSymbol = true
  } = options;

  if (isNaN(value) || !isFinite(value)) {
    return withSymbol ? 'NaN%' : 'NaN';
  }

  const result = (value * 100).toFixed(precision);
  return withSymbol ? `${result}%` : result;
}

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
export function toScientific(value: number, options: {
  precision?: number;
  notation?: 'standard' | 'engineering' | 'compact';
} = {}): string {
  const {
    precision = 10,
    notation = 'standard'
  } = options;

  if (isNaN(value) || !isFinite(value)) {
    return value.toString();
  }

  const exp = Math.floor(Math.log10(Math.abs(value)));
  const coefficient = value / Math.pow(10, exp);

  if (notation === 'engineering') {
    const engineeringExp = Math.floor(exp / 3) * 3;
    const engineeringCoeff = value / Math.pow(10, engineeringExp);
    return `${engineeringCoeff.toFixed(precision)}e${engineeringExp}`;
  }

  if (notation === 'compact') {
    const compactExp = Math.floor(exp / 3) * 3;
    const compactCoeff = value / Math.pow(10, compactExp);
    const suffix = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc'][Math.floor(compactExp / 3)] || `e${compactExp}`;
    return `${compactCoeff.toFixed(precision)}${suffix}`;
  }

  return `${coefficient.toFixed(precision)}e${exp}`;
}

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
export function toChineseNumber(value: number, options: {
  useTraditional?: boolean;
  useCapital?: boolean;
} = {}): string {
  const {
    useTraditional = false,
    useCapital = false
  } = options;

  const digits = useTraditional
    ? ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    : ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

  const units = useTraditional
    ? ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿']
    : ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿'];

  if (useCapital) {
    for (let i = 0; i < digits.length; i++) {
      digits[i] = digits[i].replace(/[零一二三四五六七八九]/g, (match) => {
        const map: Record<string, string> = {
          '零': '零',
          '一': '壹',
          '二': '贰',
          '三': '叁',
          '四': '肆',
          '五': '伍',
          '六': '陆',
          '七': '柒',
          '八': '捌',
          '九': '玖'
        };
        return map[match];
      });
    }
    for (let i = 0; i < units.length; i++) {
      units[i] = units[i].replace(/[十百千万亿]/g, (match) => {
        const map: Record<string, string> = {
          '十': '拾',
          '百': '佰',
          '千': '仟',
          '万': '万',
          '亿': '亿'
        };
        return map[match];
      });
    }
  }

  if (value === 0) return digits[0];

  const parts: string[] = [];
  let num = Math.abs(value);
  let unitIndex = 0;

  while (num > 0) {
    const digit = num % 10;
    const unit = units[unitIndex];
    let part = '';

    if (digit !== 0) {
      part = digits[digit] + unit;
    } else if (unitIndex > 0 && parts[0] && parts[0][0] !== digits[0]) {
      part = digits[0];
    }

    parts.unshift(part);
    num = Math.floor(num / 10);
    unitIndex++;
  }

  return parts.join('').replace(/(零+)/g, '零').replace(/零$/, '');
} 