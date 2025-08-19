import { deepClone, deepMerge, pick, omit, getValueByPath } from '@/object';

describe('Object Utils', () => {
  describe('deepClone', () => {
    it('should create a deep copy of object', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });
  });

  describe('deepMerge', () => {
    it('should merge objects deeply', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      expect(deepMerge(obj1, obj2)).toEqual({
        a: 1,
        b: { c: 2, d: 3 },
        e: 4
      });
    });
  });

  describe('pick', () => {
    it('should pick specified properties from object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });
  });

  describe('omit', () => {
    it('should omit specified properties from object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
    });
  });

  describe('getValueByPath', () => {
    it('should get value by path', () => {
      const obj = { a: { b: { c: 1 } } };
      expect(getValueByPath(obj, 'a.b.c')).toBe(1);
    });
  });
}); 