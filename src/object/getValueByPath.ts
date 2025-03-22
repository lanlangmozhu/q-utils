/**
 * 根据路径获取对象中的值，支持点表示法和数组路径
 * 
 * @param obj - 要获取值的对象
 * @param path - 路径字符串或路径数组
 * @param defaultValue - 当路径不存在时返回的默认值
 * @returns 路径对应的值或默认值
 * @example
 * ```ts
 * // 基本用法 - 点表示法
 * const obj = { a: { b: { c: 42 } } };
 * get(obj, 'a.b.c');          // 返回: 42
 * get(obj, 'a.b');            // 返回: { c: 42 }
 * get(obj, 'a.x.y', 'none');  // 返回: 'none'
 * 
 * // 使用数组路径
 * get(obj, ['a', 'b', 'c']);  // 返回: 42
 * 
 * // 数组索引
 * const arr = { users: [{ name: '张三' }, { name: '李四' }] };
 * get(arr, 'users[1].name');  // 返回: '李四'
 * get(arr, ['users', 1, 'name']); // 返回: '李四'
 * ```
 */
export function get<T = any>(
  obj: any,
  path: string | (string | number)[],
  defaultValue?: T
): T {
  // 如果对象为null或undefined，直接返回默认值
  if (obj == null) {
    return defaultValue as T;
  }
  
  let result = obj;
  const keys = Array.isArray(path) ? path : parsePath(path);
  
  for (let i = 0; i < keys.length; i++) {
    if (result == null) {
      return defaultValue as T;
    }
    
    result = result[keys[i]];
  }
  
  return result === undefined ? defaultValue as T : result;
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

/**
 * 根据路径获取对象中的值
 * @param obj - 源对象
 * @param path - 路径，可以是字符串（用点号分隔）或字符串数组
 * @returns 路径对应的值，如果路径不存在则返回 undefined
 * @example
 * ```ts
 * const obj = { a: { b: { c: 1 } } };
 * getValueByPath(obj, 'a.b.c'); // 1
 * getValueByPath(obj, ['a', 'b', 'c']); // 1
 * getValueByPath(obj, 'a.d.e'); // undefined
 * ```
 */
export const getValueByPath = <T = any>(
  obj: Record<string, any>,
  path: string | string[]
): T | undefined => {
  if (!obj || !path) {
    return undefined;
  }

  const segments = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (const segment of segments) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    current = current[segment];
  }

  return current as T;
}; 