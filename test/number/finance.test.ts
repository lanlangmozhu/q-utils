import {
  compound,
  compoundInterest,
  presentValue,
  futureValue,
  annualReturnRate,
  discount,
  discountRate,
  tax,
  afterTax,
  loan,
  loanInterest,
  depreciation,
  roi,
  irr
} from '../../src/number/finance';

describe('金融计算工具函数', () => {
  describe('compound', () => {
    it('应该正确计算复利', () => {
      expect(compound(1000, 0.05, 1)).toBeCloseTo(1050, 2);
      expect(compound(1000, 0.05, 1, 12)).toBeCloseTo(1051.16, 2);
      expect(compound(1000, 0.1, 2)).toBeCloseTo(1210, 2);
    });

    it('应该处理边界情况', () => {
      expect(compound(0, 0.05, 1)).toBe(0);
      expect(compound(1000, 0, 1)).toBe(1000);
      expect(compound(1000, 0.05, 0)).toBe(1000);
    });
  });

  describe('compoundInterest', () => {
    it('应该正确计算复利利息', () => {
      expect(compoundInterest(1000, 0.05, 1)).toBeCloseTo(50, 2);
      expect(compoundInterest(1000, 0.05, 1, 12)).toBeCloseTo(51.16, 2);
      expect(compoundInterest(1000, 0.1, 2)).toBeCloseTo(210, 2);
    });

    it('应该处理边界情况', () => {
      expect(compoundInterest(0, 0.05, 1)).toBe(0);
      expect(compoundInterest(1000, 0, 1)).toBe(0);
      expect(compoundInterest(1000, 0.05, 0)).toBe(0);
    });
  });

  describe('presentValue', () => {
    it('应该正确计算现值', () => {
      expect(presentValue(1050, 0.05, 1)).toBeCloseTo(1000, 2);
      expect(presentValue(1102.5, 0.05, 2)).toBeCloseTo(1000, 2);
    });

    it('应该处理边界情况', () => {
      expect(presentValue(0, 0.05, 1)).toBe(0);
      expect(presentValue(1000, 0, 1)).toBe(1000);
      expect(presentValue(1000, 0.05, 0)).toBe(1000);
    });
  });

  describe('futureValue', () => {
    it('应该正确计算未来值', () => {
      expect(futureValue(1000, 0.05, 1)).toBeCloseTo(1050, 2);
      expect(futureValue(1000, 0.05, 2)).toBeCloseTo(1102.5, 2);
    });

    it('应该处理边界情况', () => {
      expect(futureValue(0, 0.05, 1)).toBe(0);
      expect(futureValue(1000, 0, 1)).toBe(1000);
      expect(futureValue(1000, 0.05, 0)).toBe(1000);
    });
  });

  describe('annualReturnRate', () => {
    it('应该正确计算年化收益率', () => {
      expect(annualReturnRate(1000, 1050, 1)).toBeCloseTo(0.05, 4);
      expect(annualReturnRate(1000, 1102.5, 2)).toBeCloseTo(0.05, 4);
    });

    it('应该处理边界情况', () => {
      expect(annualReturnRate(1000, 1000, 1)).toBe(0);
      expect(() => annualReturnRate(0, 1000, 1)).toThrow();
      expect(() => annualReturnRate(1000, 1050, 0)).toThrow();
    });
  });

  describe('discount', () => {
    it('应该正确计算折扣价格', () => {
      expect(discount(100, 0.2)).toBe(80);
      expect(discount(100, 0.5)).toBe(50);
      expect(discount(100, 0)).toBe(100);
    });

    it('应该处理边界情况', () => {
      expect(discount(0, 0.2)).toBe(0);
      expect(discount(100, 1)).toBe(0);
    });
  });

  describe('discountRate', () => {
    it('应该正确计算折扣率', () => {
      expect(discountRate(100, 80)).toBe(0.2);
      expect(discountRate(100, 50)).toBe(0.5);
      expect(discountRate(100, 100)).toBe(0);
    });

    it('应该处理边界情况', () => {
      expect(() => discountRate(0, 0)).toThrow();
      expect(discountRate(100, 0)).toBe(1);
    });
  });

  describe('tax', () => {
    it('应该正确计算税额', () => {
      expect(tax(1000, 0.1)).toBe(100);
      expect(tax(1000, 0.2)).toBe(200);
      expect(tax(1000, 0)).toBe(0);
    });

    it('应该处理边界情况', () => {
      expect(tax(0, 0.1)).toBe(0);
      expect(tax(1000, 1)).toBe(1000);
    });
  });

  describe('afterTax', () => {
    it('应该正确计算税后收入', () => {
      expect(afterTax(10000, 0.1)).toBe(9000);
      expect(afterTax(10000, 0.2)).toBe(8000);
      expect(afterTax(10000, 0)).toBe(10000);
    });

    it('应该处理边界情况', () => {
      expect(afterTax(0, 0.1)).toBe(0);
      expect(afterTax(10000, 1)).toBe(0);
    });
  });

  describe('loan', () => {
    it('应该正确计算贷款月供', () => {
      expect(loan(100000, 0.05, 12)).toBeCloseTo(8560.75, 2);
      expect(loan(100000, 0.1, 24)).toBeCloseTo(4614.49, 2);
    });

    it('应该处理边界情况', () => {
      expect(loan(0, 0.05, 12)).toBe(0);
      expect(() => loan(100000, 0, 12)).toThrow();
      expect(() => loan(100000, 0.05, 0)).toThrow();
    });
  });

  describe('loanInterest', () => {
    it('应该正确计算贷款总利息', () => {
      expect(loanInterest(100000, 0.05, 12)).toBeCloseTo(2729, 0);
      expect(loanInterest(100000, 0.1, 24)).toBeCloseTo(10747.76, 2);
    });

    it('应该处理边界情况', () => {
      expect(loanInterest(0, 0.05, 12)).toBe(0);
      expect(() => loanInterest(100000, 0, 12)).toThrow();
      expect(() => loanInterest(100000, 0.05, 0)).toThrow();
    });
  });

  describe('depreciation', () => {
    it('应该正确计算直线折旧', () => {
      expect(depreciation(10000, 1000, 5, 1)).toBe(1800);
      expect(depreciation(10000, 1000, 5, 2)).toBe(1800);
      expect(depreciation(10000, 1000, 5, 5)).toBe(1800);
    });

    it('应该正确计算双倍余额递减折旧', () => {
      expect(depreciation(10000, 1000, 5, 1, 'declining')).toBeCloseTo(4000, 2);
      expect(depreciation(10000, 1000, 5, 2, 'declining')).toBeCloseTo(2400, 2);
    });

    it('应该处理边界情况', () => {
      expect(depreciation(10000, 1000, 5, 0)).toBe(0);
      expect(depreciation(10000, 1000, 5, 6)).toBe(0);
      expect(() => depreciation(10000, 1000, 5, 1, 'invalid' as any)).toThrow();
    });
  });

  describe('roi', () => {
    it('应该正确计算投资回报率', () => {
      expect(roi(1000, 1500)).toBe(0.5);
      expect(roi(1000, 800)).toBe(-0.2);
      expect(roi(1000, 1000)).toBe(0);
    });

    it('应该处理边界情况', () => {
      expect(() => roi(0, 1500)).toThrow();
      expect(roi(1000, 0)).toBe(-1);
    });
  });

  describe('irr', () => {
    it('应该正确计算内部收益率', () => {
      expect(irr([-1000, 100, 200, 300, 400, 500])).toBeCloseTo(0.1, 2);
      expect(irr([-1000, 1100])).toBeCloseTo(0.1, 2);
    });

    it('应该处理边界情况', () => {
      expect(() => irr([])).toThrow();
      expect(() => irr([-1000])).toThrow();
      expect(() => irr([1000])).toThrow();
    });
  });
}); 