import { get } from '@/object/getValueByPath';

describe('get', () => {
  test('应正确获取对象的顶层属性', () => {
    const obj = { a: 1, b: 'test', c: true };
    
    expect(get(obj, 'a')).toBe(1);
    expect(get(obj, 'b')).toBe('test');
    expect(get(obj, 'c')).toBe(true);
  });

  test('应正确获取嵌套对象的属性', () => {
    const obj = { a: { b: { c: 42 } } };
    
    expect(get(obj, 'a.b.c')).toBe(42);
    expect(get(obj, 'a.b')).toEqual({ c: 42 });
  });

  test('当路径不存在时应返回undefined', () => {
    const obj = { a: { b: { c: 42 } } };
    
    expect(get(obj, 'a.x.y')).toBeUndefined();
    expect(get(obj, 'x')).toBeUndefined();
  });

  test('当路径不存在时应返回指定的默认值', () => {
    const obj = { a: { b: { c: 42 } } };
    
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
    expect(get(obj, 'x', 100)).toBe(100);
  });

  test('应支持数组路径', () => {
    const obj = { a: { b: { c: 42 } } };
    
    expect(get(obj, ['a', 'b', 'c'])).toBe(42);
    expect(get(obj, ['a', 'b'])).toEqual({ c: 42 });
    expect(get(obj, ['a', 'x', 'y'], 'default')).toBe('default');
  });

  test('应支持数组索引', () => {
    const obj = { 
      users: [
        { name: '张三', age: 30 },
        { name: '李四', age: 25 }
      ]
    };
    
    expect(get(obj, 'users[0].name')).toBe('张三');
    expect(get(obj, 'users[1].age')).toBe(25);
    expect(get(obj, 'users[2].name', '未知')).toBe('未知');
    
    // 使用数组路径
    expect(get(obj, ['users', 0, 'name'])).toBe('张三');
    expect(get(obj, ['users', 1, 'age'])).toBe(25);
  });

  test('应正确处理空路径', () => {
    const obj = { a: 1 };
    
    expect(get(obj, '')).toBe(obj);
    expect(get(obj, [])).toBe(obj);
  });

  test('应正确处理null或undefined对象', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });

  test('应正确处理数组对象', () => {
    const arr = [1, 2, [3, 4, [5, 6]]];
    
    expect(get(arr, '0')).toBe(1);
    expect(get(arr, '2.0')).toBe(3);
    expect(get(arr, '2.2.1')).toBe(6);
    expect(get(arr, '2[2][0]')).toBe(5);
    
    // 使用数组路径
    expect(get(arr, [0])).toBe(1);
    expect(get(arr, [2, 0])).toBe(3);
    expect(get(arr, [2, 2, 1])).toBe(6);
  });
}); 