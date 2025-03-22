/**
 * 深拷贝对象或数组，创建一个完全独立的副本
 * 
 * @param obj - 要深拷贝的对象或数组
 * @returns 深拷贝后的对象或数组
 * @example
 * ```ts
 * // 基本用法
 * const original = { 
 *   name: '张三', 
 *   age: 30,
 *   address: { city: '北京', district: '海淀' },
 *   hobbies: ['阅读', '旅行'] 
 * };
 * 
 * const copy = deepClone(original);
 * copy.address.city = '上海';
 * copy.hobbies.push('游泳');
 * 
 * console.log(original.address.city); // 输出: '北京'
 * console.log(original.hobbies); // 输出: ['阅读', '旅行']
 * 
 * // 处理循环引用
 * const obj: any = { name: '张三' };
 * obj.self = obj;
 * const cloned = deepClone(obj);
 * console.log(cloned.self === cloned); // 输出: true
 * ```
 */
export function deepClone<T>(obj: T): T {
  // 处理基本类型或null、undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // 处理日期对象
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }
  
  // 处理正则表达式
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as unknown as T;
  }
  
  // 处理Map
  if (obj instanceof Map) {
    const copy = new Map();
    const weakMap = new WeakMap(); // 用于处理循环引用
    weakMap.set(obj as object, copy as object);
    
    obj.forEach((value, key) => {
      // 如果值是对象，需要递归深拷贝
      if (typeof value === 'object' && value !== null) {
        if (weakMap.has(value as object)) {
          copy.set(key, weakMap.get(value as object));
        } else {
          const valueCopy = deepClone(value);
          weakMap.set(value as object, valueCopy as object);
          copy.set(key, valueCopy);
        }
      } else {
        copy.set(key, value);
      }
    });
    
    return copy as unknown as T;
  }
  
  // 处理Set
  if (obj instanceof Set) {
    const copy = new Set();
    const weakMap = new WeakMap(); // 用于处理循环引用
    weakMap.set(obj as object, copy as object);
    
    obj.forEach(value => {
      // 如果值是对象，需要递归深拷贝
      if (typeof value === 'object' && value !== null) {
        if (weakMap.has(value as object)) {
          copy.add(weakMap.get(value as object));
        } else {
          const valueCopy = deepClone(value);
          weakMap.set(value as object, valueCopy as object);
          copy.add(valueCopy);
        }
      } else {
        copy.add(value);
      }
    });
    
    return copy as unknown as T;
  }
  
  // 创建一个新的对象或数组
  const result: any = Array.isArray(obj) ? [] : {};
  
  // 使用WeakMap来处理循环引用
  const weakMap = new WeakMap();
  weakMap.set(obj as object, result);
  
  // 递归拷贝所有属性
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      
      // 如果是对象且不为null，则递归深拷贝
      if (typeof value === 'object' && value !== null) {
        // 检查是否已经拷贝过该对象（处理循环引用）
        if (weakMap.has(value)) {
          result[key] = weakMap.get(value);
        } else {
          result[key] = deepClone(value);
          weakMap.set(value, result[key]);
        }
      } else {
        // 基本类型直接赋值
        result[key] = value;
      }
    }
  }
  
  return result as T;
} 