import {
  toBinary,
  toOctal,
  toHex,
  fromBinary,
  fromOctal,
  fromHex
} from '../../src/number/radix';

describe('进制转换函数', () => {
  describe('toBinary', () => {
    it('应该将正数转换为二进制', () => {
      expect(toBinary(0)).toBe('0');
      expect(toBinary(1)).toBe('1');
      expect(toBinary(2)).toBe('10');
      expect(toBinary(123)).toBe('1111011');
    });

    it('应该将负数转换为二进制', () => {
      expect(toBinary(-1)).toBe('-1');
      expect(toBinary(-2)).toBe('-10');
      expect(toBinary(-123)).toBe('-1111011');
    });
  });

  describe('toOctal', () => {
    it('应该将正数转换为八进制', () => {
      expect(toOctal(0)).toBe('0');
      expect(toOctal(1)).toBe('1');
      expect(toOctal(8)).toBe('10');
      expect(toOctal(123)).toBe('173');
    });

    it('应该将负数转换为八进制', () => {
      expect(toOctal(-1)).toBe('-1');
      expect(toOctal(-8)).toBe('-10');
      expect(toOctal(-123)).toBe('-173');
    });
  });

  describe('toHex', () => {
    it('应该将正数转换为十六进制', () => {
      expect(toHex(0)).toBe('0');
      expect(toHex(1)).toBe('1');
      expect(toHex(16)).toBe('10');
      expect(toHex(123)).toBe('7b');
    });

    it('应该将负数转换为十六进制', () => {
      expect(toHex(-1)).toBe('-1');
      expect(toHex(-16)).toBe('-10');
      expect(toHex(-123)).toBe('-7b');
    });
  });

  describe('fromBinary', () => {
    it('应该将二进制字符串转换为数字', () => {
      expect(fromBinary('0')).toBe(0);
      expect(fromBinary('1')).toBe(1);
      expect(fromBinary('10')).toBe(2);
      expect(fromBinary('1111011')).toBe(123);
    });

    it('应该处理无效的二进制字符串', () => {
      expect(() => fromBinary('2')).toThrow();
      expect(() => fromBinary('abc')).toThrow();
    });
  });

  describe('fromOctal', () => {
    it('应该将八进制字符串转换为数字', () => {
      expect(fromOctal('0')).toBe(0);
      expect(fromOctal('1')).toBe(1);
      expect(fromOctal('10')).toBe(8);
      expect(fromOctal('173')).toBe(123);
    });

    it('应该处理无效的八进制字符串', () => {
      expect(() => fromOctal('8')).toThrow();
      expect(() => fromOctal('abc')).toThrow();
    });
  });

  describe('fromHex', () => {
    it('应该将十六进制字符串转换为数字', () => {
      expect(fromHex('0')).toBe(0);
      expect(fromHex('1')).toBe(1);
      expect(fromHex('10')).toBe(16);
      expect(fromHex('7b')).toBe(123);
    });

    it('应该处理大小写十六进制字符串', () => {
      expect(fromHex('7B')).toBe(123);
      expect(fromHex('7b')).toBe(123);
    });

    it('应该处理无效的十六进制字符串', () => {
      expect(() => fromHex('g')).toThrow();
      expect(() => fromHex('xyz')).toThrow();
    });
  });
}); 