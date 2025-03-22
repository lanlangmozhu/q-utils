import { omit } from '../../src/object';

describe('omit', () => {
  it('should omit specified properties from object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('should handle nested properties', () => {
    const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
    expect(omit(obj, ['a', 'b.c'])).toEqual({ b: { d: 3 }, e: 4 });
  });

  it('should handle missing properties', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c'])).toEqual(obj);
  });

  it('should handle invalid inputs', () => {
    expect(omit({} as any, ['a'])).toEqual({});
    expect(omit({} as any, [])).toEqual({});
  });

  it('should handle array properties', () => {
    const obj = { a: [1, 2], b: 3 };
    expect(omit(obj, ['a'])).toEqual({ b: 3 });
  });

  it('should handle deep nested properties', () => {
    const obj = { a: { b: { c: 1 } }, d: 2 };
    expect(omit(obj, ['a.b'])).toEqual({ a: {}, d: 2 });
  });

  it('should handle multiple nested properties', () => {
    const obj = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 } };
    expect(omit(obj, ['a.b', 'd.e'])).toEqual({ a: { c: 2 }, d: { f: 4 } });
  });
}); 