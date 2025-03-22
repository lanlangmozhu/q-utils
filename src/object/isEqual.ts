/**
 * 深度比较两个值是否相等
 * 
 * @param value - 第一个要比较的值
 * @param other - 第二个要比较的值
 * @returns 如果两个值深度相等则返回true，否则返回false
 * @example
 * ```ts
 * // 基本类型比较
 * isEqual(1, 1);                      // 返回: true
 * isEqual('a', 'a');                  // 返回: true
 * isEqual(null, null);                // 返回: true
 * isEqual(undefined, undefined);      // 返回: true
 * isEqual(NaN, NaN);                  // 返回: true
 * 
 * // 对象比较
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); // 返回: true
 * isEqual({a: 1, b: 2}, {b: 2, a: 1}); // 返回: true (属性顺序不影响结果)
 * isEqual({a: 1}, {a: '1'});           // 返回: false
 * 
 * // 数组比较
 * isEqual([1, 2, 3], [1, 2, 3]);      // 返回: true
 * isEqual([1, 2, 3], [3, 2, 1]);      // 返回: false
 * 
 * // 嵌套对象比较
 * isEqual(
 *   {a: 1, b: {c: 3}}, 
 *   {a: 1, b: {c: 3}}
 * );  // 返回: true
 * 
 * // Set比较
 * isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])); // 返回: true
 * isEqual(new Set([1, 2, 3]), new Set([3, 2, 1])); // 返回: true (Set元素顺序不影响结果)
 * 
 * // Map比较
 * isEqual(
 *   new Map([['a', 1], ['b', 2]]), 
 *   new Map([['a', 1], ['b', 2]])
 * ); // 返回: true
 * 
 * // 混合类型比较
 * isEqual(
 *   { a: 1, b: [1, 2, { c: new Set([1, 2]) }] },
 *   { a: 1, b: [1, 2, { c: new Set([1, 2]) }] }
 * ); // 返回: true
 * ```
 */
export function isEqual(value: any, other: any): boolean {
  // 如果引用相同，直接返回true
  if (value === other) {
    return true;
  }
  
  // 处理null或undefined的情况
  if (value == null || other == null) {
    return value === other;
  }
  
  // 处理NaN的情况
  if (Number.isNaN(value) && Number.isNaN(other)) {
    return true;
  }
  
  // 如果类型不同，直接返回false
  if (typeof value !== typeof other) {
    return false;
  }
  
  // 处理日期对象
  if (value instanceof Date && other instanceof Date) {
    return value.getTime() === other.getTime();
  }
  
  // 处理正则表达式
  if (value instanceof RegExp && other instanceof RegExp) {
    return value.toString() === other.toString();
  }
  
  // 处理函数
  if (typeof value === 'function' && typeof other === 'function') {
    return value.toString() === other.toString();
  }
  
  // 处理Set
  if (value instanceof Set && other instanceof Set) {
    if (value.size !== other.size) {
      return false;
    }
    
    // 将Set转为数组以便比较
    const valueArray = Array.from(value);
    const otherArray = Array.from(other);
    
    // 检查每个元素是否在另一个Set中存在且相等
    return valueArray.every(item => 
      otherArray.some(otherItem => isEqual(item, otherItem))
    );
  }
  
  // 处理Map
  if (value instanceof Map && other instanceof Map) {
    if (value.size !== other.size) {
      return false;
    }
    
    // 检查所有键值对
    for (const [key, val] of value.entries()) {
      // 检查键是否存在
      if (!other.has(key)) {
        return false;
      }
      
      // 递归比较值
      if (!isEqual(val, other.get(key))) {
        return false;
      }
    }
    
    return true;
  }
  
  // 处理数组
  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }
    
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    
    return true;
  }
  
  // 处理普通对象
  if (typeof value === 'object' && typeof other === 'object') {
    const valueKeys = Object.keys(value);
    const otherKeys = Object.keys(other);
    
    if (valueKeys.length !== otherKeys.length) {
      return false;
    }
    
    // 检查所有属性名是否存在
    for (const key of valueKeys) {
      if (!Object.prototype.hasOwnProperty.call(other, key)) {
        return false;
      }
    }
    
    // 递归比较所有属性值
    for (const key of valueKeys) {
      if (!isEqual(value[key], other[key])) {
        return false;
      }
    }
    
    return true;
  }
  
  // 其他情况
  return value === other;
} 