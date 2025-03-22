import { deepMerge } from '../../src/object';

describe('deepMerge', () => {
  test('没有传入对象时应返回空对象', () => {
    expect(deepMerge()).toEqual({});
  });

  test('只有一个对象时应返回该对象的深拷贝', () => {
    const obj = { a: 1, b: { c: 2 } };
    const result = deepMerge(obj);
    
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
    expect(result.b).not.toBe(obj.b);
  });

  it('should merge objects with primitive values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3, c: 4 };
    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { a: 1, b: { c: 4, e: 5 }, f: 6 };
    expect(deepMerge(obj1, obj2)).toEqual({
      a: 1,
      b: { c: 4, d: 3, e: 5 },
      f: 6
    });
  });

  it('should merge arrays', () => {
    const obj1 = { a: [1, 2], b: 1 };
    const obj2 = { a: [3], c: 2 };
    expect(deepMerge(obj1, obj2)).toEqual({
      a: [3],
      b: 1,
      c: 2
    });
  });

  it('should handle multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const obj4 = { d: 4 };
    expect(deepMerge(obj1, obj2, obj3, obj4)).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4
    });
  });

  it('should handle null and undefined values', () => {
    const obj1 = { a: null, b: undefined, c: 1 };
    const obj2 = { a: 2, b: 3 };
    expect(deepMerge(obj1, obj2)).toEqual({
      a: 2,
      b: 3,
      c: 1
    });
  });

  it('should handle deeply nested objects', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, 2],
        d: {
          e: 3,
          f: 4
        }
      }
    };
    const obj2 = {
      b: {
        c: [3, 4],
        d: {
          f: 5,
          g: 6
        }
      },
      h: 7
    };
    expect(deepMerge(obj1, obj2)).toEqual({
      a: 1,
      b: {
        c: [3, 4],
        d: {
          e: 3,
          f: 5,
          g: 6
        }
      },
      h: 7
    });
  });

  test('应忽略非对象参数', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    
    // @ts-ignore
    expect(deepMerge(obj1, null, undefined, 42, 'string', obj2)).toEqual({
      a: 1,
      b: 2
    });
  });
}); 