import { hexToRgb, rgbToHex, adjustColor } from '@/color';

describe('Color Utils', () => {
  describe('hexToRgb', () => {
    it('should convert 6-digit hex to RGB object', () => {
      const result = hexToRgb('#ff0000');
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should convert 3-digit hex to RGB object', () => {
      const result = hexToRgb('#f00');
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should convert hex without # prefix', () => {
      const result = hexToRgb('ff0000');
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should return array format', () => {
      const result = hexToRgb('#ff0000', { format: 'array' });
      expect(result).toEqual([255, 0, 0]);
    });

    it('should return string format', () => {
      const result = hexToRgb('#ff0000', { format: 'string' });
      expect(result).toBe('rgb(255, 0, 0)');
    });

    it('should include alpha in object format', () => {
      const result = hexToRgb('#ff0000', { alpha: 0.5, format: 'object' });
      expect(result).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
    });

    it('should include alpha in array format', () => {
      const result = hexToRgb('#ff0000', { alpha: 0.5, format: 'array' });
      expect(result).toEqual([255, 0, 0, 0.5]);
    });

    it('should include alpha in string format', () => {
      const result = hexToRgb('#ff0000', { alpha: 0.5, format: 'string' });
      expect(result).toBe('rgba(255, 0, 0, 0.5)');
    });

    it('should return null for invalid hex', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      const result = hexToRgb('invalid');
      expect(result).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('rgbToHex', () => {
    it('should convert RGB values to hex', () => {
      const result = rgbToHex(255, 0, 0);
      expect(result).toBe('#ff0000');
    });

    it('should convert RGB object to hex', () => {
      const result = rgbToHex({ r: 255, g: 0, b: 0 });
      expect(result).toBe('#ff0000');
    });

    it('should convert RGB array to hex', () => {
      const result = rgbToHex([255, 0, 0]);
      expect(result).toBe('#ff0000');
    });

    it('should return hex without prefix', () => {
      const result = rgbToHex(255, 0, 0, { prefix: false });
      expect(result).toBe('ff0000');
    });

    it('should clamp values to 0-255', () => {
      expect(rgbToHex(300, -10, 0)).toBe('#ff0000');
      expect(rgbToHex(0, 0, 300)).toBe('#0000ff');
    });
  });

  describe('adjustColor', () => {
    it('should adjust lightness', () => {
      const result = adjustColor('#ff0000', { lightness: 0.2 });
      expect(typeof result).toBe('string');
      // adjustColor may return hex or other color formats
      expect(result).toBeTruthy();
    });

    it('should adjust saturation', () => {
      const result = adjustColor('#ff0000', { saturation: -0.5 });
      expect(typeof result).toBe('string');
      expect(result).toBeTruthy();
    });

    it('should adjust hue', () => {
      const result = adjustColor('#ff0000', { hue: 60 });
      expect(typeof result).toBe('string');
      expect(result).toBeTruthy();
    });

    it('should work with RGB object', () => {
      const result = adjustColor({ r: 255, g: 0, b: 0 }, { lightness: 0.2 });
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('r');
      expect(result).toHaveProperty('g');
      expect(result).toHaveProperty('b');
      expect((result as { r: number }).r).toBeGreaterThanOrEqual(0);
      expect((result as { r: number }).r).toBeLessThanOrEqual(255);
    });

    it('should combine multiple adjustments', () => {
      const result = adjustColor('#ff0000', { 
        lightness: 0.1, 
        saturation: -0.2, 
        hue: 30 
      });
      expect(typeof result).toBe('string');
      expect(result).toBeTruthy();
    });
  });
});

