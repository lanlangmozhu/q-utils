import { deepClone } from '@/object/deepClone';

describe('deepClone', () => {
  test('应该克隆基本类型', () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('应该深拷贝简单对象', () => {
    const original = { a: 1, b: 'test', c: true };
    const copy = deepClone(original);
    
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  test('应该深拷贝嵌套对象', () => {
    const original = { 
      a: 1, 
      b: { 
        c: 'test', 
        d: { 
          e: true 
        } 
      } 
    };
    const copy = deepClone(original);
    
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.b).not.toBe(original.b);
    expect(copy.b.d).not.toBe(original.b.d);
  });

  test('应该深拷贝数组', () => {
    const original = [1, 2, [3, 4, [5, 6]]];
    const copy = deepClone(original);
    
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy[2]).not.toBe(original[2]);
    expect((copy[2] as number[])[2]).not.toBe((original[2] as number[])[2]);
  });

  test('应该深拷贝包含对象的数组', () => {
    const original = [{ a: 1 }, { b: 2 }];
    const copy = deepClone(original);
    
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy[0]).not.toBe(original[0]);
    expect(copy[1]).not.toBe(original[1]);
  });

  test('应该深拷贝日期对象', () => {
    const original = new Date();
    const copy = deepClone(original);
    
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  test('应该深拷贝正则表达式', () => {
    const original = /test/gi;
    const copy = deepClone(original);
    
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  test('应该处理循环引用', () => {
    const original: any = { a: 1 };
    original.self = original;
    
    const copy = deepClone(original);
    
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.self).toBe(copy);
  });

  test('应该深拷贝Map', () => {
    const original = new Map();
    original.set('key1', 'value1');
    original.set('key2', { nested: 'value' });
    
    const copy = deepClone(original);
    
    expect(copy).not.toBe(original);
    expect(copy.size).toBe(original.size);
    expect(copy.get('key1')).toBe('value1');
    expect(copy.get('key2')).toEqual({ nested: 'value' });
    expect(copy.get('key2')).not.toBe(original.get('key2'));
  });

  test('应该深拷贝Set', () => {
    const original = new Set();
    original.add('value1');
    original.add({ nested: 'value' });
    
    const copy = deepClone(original);
    
    expect(copy).not.toBe(original);
    expect(copy.size).toBe(original.size);
    expect(copy.has('value1')).toBe(true);
    
    // 找到嵌套对象并比较
    const originalObj = Array.from(original).find(item => typeof item === 'object');
    const copyObj = Array.from(copy).find(item => typeof item === 'object');
    
    expect(copyObj).toEqual(originalObj);
    expect(copyObj).not.toBe(originalObj);
  });
}); 