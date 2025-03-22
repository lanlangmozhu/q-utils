import { pick } from '../../src/object/pick';

describe('pick', () => {
  test('应从对象中选择指定的属性', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('应忽略不存在的属性', () => {
    const obj = { a: 1, b: 2 };
    
    // @ts-ignore - 故意传入不存在的属性
    expect(pick(obj, ['a', 'z'])).toEqual({ a: 1 });
  });

  test('当源对象为null或undefined时应返回空对象', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('当属性列表为空时应返回空对象', () => {
    const obj = { a: 1, b: 2 };
    
    expect(pick(obj, [])).toEqual({});
  });

  test('应正确处理嵌套对象', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: 3
      },
      e: 4
    };
    
    expect(pick(obj, ['a', 'b'])).toEqual({
      a: 1,
      b: {
        c: 2,
        d: 3
      }
    });
  });

  test('应正确处理数组', () => {
    const obj = {
      a: [1, 2, 3],
      b: 'test',
      c: true
    };
    
    expect(pick(obj, ['a', 'c'])).toEqual({
      a: [1, 2, 3],
      c: true
    });
  });

  test('应返回新对象而非修改原对象', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, ['a', 'b']);
    
    expect(result).not.toBe(obj);
    
    // 修改结果不应影响原对象
    result.a = 10;
    expect(obj.a).toBe(1);
  });
}); 