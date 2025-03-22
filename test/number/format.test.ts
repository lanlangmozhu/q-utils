import {
  toCurrency,
  formatNumber,
  toFixed,
  precision,
  parse,
  percentage,
  toScientific,
  toChineseNumber
} from '../../src/number/format';

describe('数字格式化函数', () => {
  describe('toCurrency', () => {
    it('应该将数字转换为默认货币格式', () => {
      expect(toCurrency(1234.56)).toBe('¥1,234.56');
    });

    it('应该支持自定义地区和货币', () => {
      expect(toCurrency(1234.56, 'en-US', { currency: 'USD' })).toBe('$1,234.56');
      expect(toCurrency(1234.56, 'ja-JP', { currency: 'JPY' })).toBe('¥1,235');
    });

    it('应该处理零和负数', () => {
      expect(toCurrency(0)).toBe('¥0.00');
      expect(toCurrency(-1234.56)).toBe('-¥1,234.56');
    });
  });

  describe('formatNumber', () => {
    it('应该格式化数字', () => {
      expect(formatNumber(1234.56)).toBe('1,234.56');
    });

    it('应该支持自定义格式化选项', () => {
      expect(formatNumber(1234.56, 'zh-CN', { minimumFractionDigits: 2 })).toBe('1,234.56');
      expect(formatNumber(1234.56, 'zh-CN', { maximumFractionDigits: 0 })).toBe('1,235');
    });

    it('应该处理零和负数', () => {
      expect(formatNumber(0)).toBe('0');
      expect(formatNumber(-1234.56)).toBe('-1,234.56');
    });
  });

  describe('toFixed', () => {
    it('应该将数字转换为指定小数位数', () => {
      expect(toFixed(1234.5678, 2)).toBe('1234.57');
      expect(toFixed(1234.5678, 1)).toBe('1234.6');
      expect(toFixed(1234.5678, 0)).toBe('1235');
    });

    it('应该处理零和负数', () => {
      expect(toFixed(0, 2)).toBe('0.00');
      expect(toFixed(-1234.5678, 2)).toBe('-1234.57');
    });
  });

  describe('precision', () => {
    it('应该计算数字的精度', () => {
      expect(precision(1234.5678)).toBe(4);
      expect(precision(1234.5)).toBe(1);
      expect(precision(1234)).toBe(0);
    });

    it('应该处理零和整数', () => {
      expect(precision(0)).toBe(0);
      expect(precision(1234)).toBe(0);
    });
  });

  describe('parse', () => {
    it('应该解析数字字符串', () => {
      expect(parse('123.45')).toBe(123.45);
      expect(parse('1,234.56')).toBe(1234.56);
    });

    it('应该支持自定义选项', () => {
      expect(parse('abc', { allowNaN: true })).toBe(NaN);
      expect(parse('Infinity', { allowInfinity: true })).toBe(Infinity);
      expect(parse('FF', { radix: 16 })).toBe(255);
    });

    it('应该处理无效输入', () => {
      expect(parse('abc')).toBe(0);
      expect(parse('')).toBe(0);
      expect(parse('Infinity')).toBe(0);
    });
  });

  describe('percentage', () => {
    it('应该将数字转换为百分比', () => {
      expect(percentage(0.1234)).toBe('12%');
      expect(percentage(0.1234, { precision: 2 })).toBe('12.34%');
    });

    it('应该支持自定义选项', () => {
      expect(percentage(0.1234, { withSymbol: false })).toBe('12');
      expect(percentage(0.1234, { precision: 2, withSymbol: false })).toBe('12.34');
    });

    it('应该处理无效输入', () => {
      expect(percentage(NaN)).toBe('NaN%');
      expect(percentage(Infinity)).toBe('Infinity%');
    });
  });

  describe('toScientific', () => {
    it('应该将数字转换为科学计数法', () => {
      expect(toScientific(1234567)).toBe('1.2345670000e+6');
      expect(toScientific(1234567, { precision: 2 })).toBe('1.23e+6');
    });

    it('应该支持不同的表示法', () => {
      expect(toScientific(1234567, { notation: 'engineering' })).toBe('1.2345670000e+6');
      expect(toScientific(1234567, { notation: 'compact' })).toBe('1.23M');
    });

    it('应该处理无效输入', () => {
      expect(toScientific(NaN)).toBe('NaN');
      expect(toScientific(Infinity)).toBe('Infinity');
    });
  });

  describe('toChineseNumber', () => {
    it('应该将数字转换为中文数字', () => {
      expect(toChineseNumber(1234)).toBe('一千二百三十四');
      expect(toChineseNumber(10001)).toBe('一万零一');
    });

    it('应该支持繁体字和大写', () => {
      expect(toChineseNumber(1234, { useTraditional: true })).toBe('一千二百三十四');
      expect(toChineseNumber(1234, { useCapital: true })).toBe('壹仟贰佰叁拾肆');
      expect(toChineseNumber(1234, { useTraditional: true, useCapital: true })).toBe('壹仟贰佰叁拾肆');
    });

    it('应该处理零和特殊数字', () => {
      expect(toChineseNumber(0)).toBe('零');
      expect(toChineseNumber(1000)).toBe('一千');
      expect(toChineseNumber(10000)).toBe('一万');
    });
  });
}); 