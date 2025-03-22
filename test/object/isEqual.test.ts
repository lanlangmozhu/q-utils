import { isEqual } from '../../src/object/isEqual';

describe('isEqual', () => {
  test('应正确比较基本类型', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual('a', 'b')).toBe(false);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(true, false)).toBe(false);
  });

  test('应正确处理null和undefined', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(null, 0)).toBe(false);
    expect(isEqual(undefined, '')).toBe(false);
  });

  test('应正确处理NaN', () => {
    expect(isEqual(NaN, NaN)).toBe(true);
    expect(isEqual(NaN, 1)).toBe(false);
  });

  test('应正确比较简单对象', () => {
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(isEqual({ a: 1 }, { b: 1 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
  });

  test('应正确比较简单数组', () => {
    expect(isEqual([], [])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  test('属性顺序不应影响对象比较', () => {
    expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
  });

  test('应正确比较嵌套对象', () => {
    expect(isEqual(
      { a: 1, b: { c: 2 } },
      { a: 1, b: { c: 2 } }
    )).toBe(true);
    
    expect(isEqual(
      { a: 1, b: { c: 2 } },
      { a: 1, b: { c: 3 } }
    )).toBe(false);
  });

  test('应正确比较嵌套数组', () => {
    expect(isEqual(
      [1, [2, 3]],
      [1, [2, 3]]
    )).toBe(true);
    
    expect(isEqual(
      [1, [2, 3]],
      [1, [2, 4]]
    )).toBe(false);
  });

  test('应正确比较对象中的数组和数组中的对象', () => {
    expect(isEqual(
      { a: [1, 2, { b: 3 }] },
      { a: [1, 2, { b: 3 }] }
    )).toBe(true);
    
    expect(isEqual(
      [{ a: 1 }, { b: 2 }],
      [{ a: 1 }, { b: 2 }]
    )).toBe(true);
    
    expect(isEqual(
      { a: [1, 2, { b: 3 }] },
      { a: [1, 2, { b: 4 }] }
    )).toBe(false);
  });

  test('应正确比较日期对象', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    const date3 = new Date('2023-02-01');
    
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  test('应正确比较正则表达式', () => {
    expect(isEqual(/abc/, /abc/)).toBe(true);
    expect(isEqual(/abc/g, /abc/g)).toBe(true);
    expect(isEqual(/abc/, /def/)).toBe(false);
    expect(isEqual(/abc/g, /abc/i)).toBe(false);
  });

  test('应正确比较简单函数', () => {
    const func1 = function() { return 1; };
    const func2 = function() { return 1; };
    const func3 = function() { return 2; };
    
    expect(isEqual(func1, func1)).toBe(true);
    expect(isEqual(func1, func2)).toBe(true);
    expect(isEqual(func1, func3)).toBe(false);
  });

  test('应正确比较不同类型的值', () => {
    expect(isEqual(1, '1')).toBe(false);
    expect(isEqual(0, false)).toBe(false);
    expect(isEqual(1, true)).toBe(false);
    expect(isEqual(null, {})).toBe(false);
    expect(isEqual([], {})).toBe(false);
  });
}); 