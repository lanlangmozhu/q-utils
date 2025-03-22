import { set } from '../../src/object/setValueByPath';

describe('set', () => {
  test('应正确设置对象的顶层属性', () => {
    const obj = { a: 1 };
    
    set(obj, 'b', 2);
    expect(obj).toEqual({ a: 1, b: 2 });
    
    set(obj, 'a', 10);
    expect(obj).toEqual({ a: 10, b: 2 });
  });

  test('应正确设置嵌套对象的属性', () => {
    const obj = { a: { b: { c: 42 } } };
    
    set(obj, 'a.b.c', 100);
    expect(obj).toEqual({ a: { b: { c: 100 } } });
  });

  test('应自动创建不存在的路径', () => {
    const obj = { a: 1 };
    
    set(obj, 'b.c.d', 2);
    expect(obj).toEqual({ a: 1, b: { c: { d: 2 } } });
  });

  test('应支持数组路径', () => {
    const obj = { a: { b: { c: 42 } } };
    
    set(obj, ['a', 'b', 'c'], 100);
    expect(obj).toEqual({ a: { b: { c: 100 } } });
    
    set(obj, ['a', 'b', 'd'], 200);
    expect(obj).toEqual({ a: { b: { c: 100, d: 200 } } });
  });

  test('应支持使用数组索引', () => {
    const obj = { users: [{ name: '张三' }, { name: '李四' }] };
    
    set(obj, 'users[0].name', '王五');
    expect(obj).toEqual({ users: [{ name: '王五' }, { name: '李四' }] });
    
    set(obj, 'users[1].age', 25);
    expect(obj).toEqual({ users: [{ name: '王五' }, { name: '李四', age: 25 }] });
    
    // 使用数组路径
    set(obj, ['users', 0, 'age'], 30);
    expect(obj).toEqual({ users: [{ name: '王五', age: 30 }, { name: '李四', age: 25 }] });
  });

  test('应自动创建数组', () => {
    const obj = {};
    
    set(obj, 'items[0]', 'first');
    expect(obj).toEqual({ items: ['first'] });
    
    set(obj, 'items[2]', 'third');
    expect(obj).toEqual({ items: ['first', undefined, 'third'] });
  });

  test('应正确处理空路径', () => {
    const obj = { a: 1 };
    
    set(obj, '', { b: 2 });
    expect(obj).toEqual({ a: 1 });
    
    set(obj, [], { b: 2 });
    expect(obj).toEqual({ a: 1 });
  });

  test('应返回修改后的原始对象', () => {
    const obj = { a: 1 };
    const result = set(obj, 'b', 2);
    
    expect(result).toBe(obj);
  });

  test('应正确处理复杂嵌套路径', () => {
    const obj = {};
    
    set(obj, 'users[0].addresses[0].city', '北京');
    expect(obj).toEqual({
      users: [{
        addresses: [{
          city: '北京'
        }]
      }]
    });
    
    set(obj, 'users[0].addresses[1].city', '上海');
    expect(obj).toEqual({
      users: [{
        addresses: [{
          city: '北京'
        }, {
          city: '上海'
        }]
      }]
    });
  });

  test('应处理非对象的target参数', () => {
    // @ts-ignore - 故意传入非对象
    expect(set(null, 'a.b', 1)).toBeNull();
    // @ts-ignore - 故意传入非对象
    expect(set(undefined, 'a.b', 1)).toBeUndefined();
    // @ts-ignore - 故意传入非对象
    expect(set(42, 'a.b', 1)).toBe(42);
    // @ts-ignore - 故意传入非对象
    expect(set('test', 'a.b', 1)).toBe('test');
  });
}); 