/**
 * 根据路径设置对象中的值，支持点表示法和数组路径
 * 
 * @param obj - 要设置值的对象
 * @param path - 路径字符串或路径数组
 * @param value - 要设置的值
 * @returns 修改后的原始对象
 * @example
 * ```ts
 * // 基本用法 - 点表示法
 * const obj = { a: { b: { c: 42 } } };
 * set(obj, 'a.b.c', 100);           // obj.a.b.c 变为 100
 * set(obj, 'a.x.y', 'hello');       // 创建不存在的路径，obj.a.x.y 变为 'hello'
 * 
 * // 使用数组路径
 * set(obj, ['a', 'b', 'd'], true);  // obj.a.b.d 变为 true
 * 
 * // 数组索引
 * const arr = { users: [{ name: '张三' }, { name: '李四' }] };
 * set(arr, 'users[1].name', '王五'); // arr.users[1].name 变为 '王五'
 * set(arr, ['users', 1, 'name'], '王五'); // 同上
 * 
 * // 创建数组
 * const data = {};
 * set(data, 'items[0]', 'first');    // data 变为 { items: ['first'] }
 * ```
 */
export function set<T extends object>(
  obj: T,
  path: string | (string | number)[],
  value: any
): T {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  
  const keys = Array.isArray(path) ? path : parsePath(path);
  
  if (keys.length === 0) {
    return obj;
  }
  
  let current: any = obj;
  const lastIndex = keys.length - 1;
  
  // 遍历路径，直到倒数第二个键
  for (let i = 0; i < lastIndex; i++) {
    const key = keys[i];
    
    // 如果当前节点不存在，根据下一个键的类型创建对象或数组
    if (current[key] == null) {
      // 如果下一个键是数字，创建数组，否则创建对象
      current[key] = typeof keys[i + 1] === 'number' ? [] : {};
    }
    
    current = current[key];
  }
  
  // 设置最后一个键的值
  current[keys[lastIndex]] = value;
  
  return obj;
}

/**
 * 解析路径字符串为路径数组
 * 
 * @param path - 路径字符串
 * @returns 路径数组
 */
function parsePath(path: string): (string | number)[] {
  // 处理空路径
  if (!path) {
    return [];
  }
  
  // 匹配点表示法和数组表示法 
  // 例如: "a.b[0].c" => ["a", "b", 0, "c"]
  const result: (string | number)[] = [];
  const segments = path.replace(/\[(\w+)\]/g, '.$1').split('.');
  
  for (const segment of segments) {
    if (segment) {
      // 如果是数字，转换为数字类型
      const parsed = parseInt(segment, 10);
      if (!isNaN(parsed) && parsed.toString() === segment) {
        result.push(parsed);
      } else {
        result.push(segment);
      }
    }
  }
  
  return result;
} 