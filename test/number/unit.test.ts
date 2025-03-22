import {
  px2rem,
  rem2px,
  px2vw,
  vw2px,
  px2em,
  em2px,
  degree2radian,
  radian2degree,
  byte2size,
  size2byte,
  celsius2fahrenheit,
  fahrenheit2celsius,
  kg2lb,
  lb2kg,
  km2mile,
  mile2km
} from '../../src/number/unit';

describe('单位转换函数', () => {
  describe('px2rem', () => {
    it('应该将像素转换为rem', () => {
      expect(px2rem(16)).toBe(1);
      expect(px2rem(16, 20)).toBe(0.8);
    });

    it('应该处理零和负数', () => {
      expect(px2rem(0)).toBe(0);
      expect(px2rem(-16)).toBe(-1);
    });
  });

  describe('rem2px', () => {
    it('应该将rem转换为像素', () => {
      expect(rem2px(1)).toBe(16);
      expect(rem2px(0.8, 20)).toBe(16);
    });

    it('应该处理零和负数', () => {
      expect(rem2px(0)).toBe(0);
      expect(rem2px(-1)).toBe(-16);
    });
  });

  describe('px2vw', () => {
    it('应该将像素转换为vw', () => {
      expect(px2vw(100)).toBe(10);
      expect(px2vw(100, 1000)).toBe(10);
    });

    it('应该处理零和负数', () => {
      expect(px2vw(0)).toBe(0);
      expect(px2vw(-100)).toBe(-10);
    });
  });

  describe('vw2px', () => {
    it('应该将vw转换为像素', () => {
      expect(vw2px(10)).toBe(100);
      expect(vw2px(10, 1000)).toBe(100);
    });

    it('应该处理零和负数', () => {
      expect(vw2px(0)).toBe(0);
      expect(vw2px(-10)).toBe(-100);
    });
  });

  describe('px2em', () => {
    it('应该将像素转换为em', () => {
      expect(px2em(16)).toBe(1);
      expect(px2em(16, 20)).toBe(0.8);
    });

    it('应该处理零和负数', () => {
      expect(px2em(0)).toBe(0);
      expect(px2em(-16)).toBe(-1);
    });
  });

  describe('em2px', () => {
    it('应该将em转换为像素', () => {
      expect(em2px(1)).toBe(16);
      expect(em2px(0.8, 20)).toBe(16);
    });

    it('应该处理零和负数', () => {
      expect(em2px(0)).toBe(0);
      expect(em2px(-1)).toBe(-16);
    });
  });

  describe('degree2radian', () => {
    it('应该将角度转换为弧度', () => {
      expect(degree2radian(180)).toBe(Math.PI);
      expect(degree2radian(90)).toBe(Math.PI / 2);
    });

    it('应该处理零和负数', () => {
      expect(degree2radian(0)).toBe(0);
      expect(degree2radian(-180)).toBe(-Math.PI);
    });
  });

  describe('radian2degree', () => {
    it('应该将弧度转换为角度', () => {
      expect(radian2degree(Math.PI)).toBe(180);
      expect(radian2degree(Math.PI / 2)).toBe(90);
    });

    it('应该处理零和负数', () => {
      expect(radian2degree(0)).toBe(0);
      expect(radian2degree(-Math.PI)).toBe(-180);
    });
  });

  describe('byte2size', () => {
    it('应该将字节转换为可读大小', () => {
      expect(byte2size(1024)).toBe('1.00 KB');
      expect(byte2size(1024 * 1024)).toBe('1.00 MB');
    });

    it('应该处理零和负数', () => {
      expect(byte2size(0)).toBe('0.00 B');
      expect(byte2size(-1024)).toBe('-1.00 KB');
    });

    it('应该支持自定义精度', () => {
      expect(byte2size(1024, 1)).toBe('1.0 KB');
      expect(byte2size(1024, 0)).toBe('1 KB');
    });
  });

  describe('size2byte', () => {
    it('应该将可读大小转换为字节', () => {
      expect(size2byte('1 KB')).toBe(1024);
      expect(size2byte('1 MB')).toBe(1024 * 1024);
    });

    it('应该处理无效格式', () => {
      expect(() => size2byte('invalid')).toThrow('Invalid size format');
      expect(() => size2byte('1 XX')).toThrow('Invalid unit');
    });

    it('应该处理大小写', () => {
      expect(size2byte('1 kb')).toBe(1024);
      expect(size2byte('1 Mb')).toBe(1024 * 1024);
    });
  });

  describe('celsius2fahrenheit', () => {
    it('应该将摄氏度转换为华氏度', () => {
      expect(celsius2fahrenheit(0)).toBe(32);
      expect(celsius2fahrenheit(100)).toBe(212);
    });

    it('应该处理零和负数', () => {
      expect(celsius2fahrenheit(-40)).toBe(-40);
    });
  });

  describe('fahrenheit2celsius', () => {
    it('应该将华氏度转换为摄氏度', () => {
      expect(fahrenheit2celsius(32)).toBe(0);
      expect(fahrenheit2celsius(212)).toBe(100);
    });

    it('应该处理零和负数', () => {
      expect(fahrenheit2celsius(-40)).toBe(-40);
    });
  });

  describe('kg2lb', () => {
    it('应该将千克转换为磅', () => {
      expect(kg2lb(1)).toBeCloseTo(2.20462, 5);
    });

    it('应该处理零和负数', () => {
      expect(kg2lb(0)).toBe(0);
      expect(kg2lb(-1)).toBeCloseTo(-2.20462, 5);
    });
  });

  describe('lb2kg', () => {
    it('应该将磅转换为千克', () => {
      expect(lb2kg(1)).toBeCloseTo(0.453592, 5);
    });

    it('应该处理零和负数', () => {
      expect(lb2kg(0)).toBe(0);
      expect(lb2kg(-1)).toBeCloseTo(-0.453592, 5);
    });
  });

  describe('km2mile', () => {
    it('应该将公里转换为英里', () => {
      expect(km2mile(1)).toBeCloseTo(0.621371, 5);
    });

    it('应该处理零和负数', () => {
      expect(km2mile(0)).toBe(0);
      expect(km2mile(-1)).toBeCloseTo(-0.621371, 5);
    });
  });

  describe('mile2km', () => {
    it('应该将英里转换为公里', () => {
      expect(mile2km(1)).toBeCloseTo(1.60934, 5);
    });

    it('应该处理零和负数', () => {
      expect(mile2km(0)).toBe(0);
      expect(mile2km(-1)).toBeCloseTo(-1.60934, 5);
    });
  });
}); 