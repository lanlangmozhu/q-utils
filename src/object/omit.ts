/**
 * 从对象中排除指定的属性，返回新对象
 * @param obj 源对象
 * @param keys 要排除的属性名数组，支持点号路径
 * @returns 新对象
 * @example
 * ```ts
 * const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
 * omit(obj, ['a', 'b.c']); // { b: { d: 3 }, e: 4 }
 * ```
 */
export function omit<T extends Record<string, any>, K extends (keyof T | string)[]>(
  obj: T,
  keys: K
): Partial<T> {
  if (!obj || typeof obj !== 'object') {
    return {} as Partial<T>;
  }
  
  const result = { ...obj };
  
  for (const key of keys) {
    if (key in result) {
      delete result[key];
    }
  }
  
  return result as Partial<T>;
} 