/**
 * 基础类型检测工具函数
 * @packageDocumentation
 */

/**
 * 获取值的类型
 * 
 * @param value - 要检查的值
 * @returns 类型字符串
 * @example
 * ```ts
 * getType(123); // 返回: 'number'
 * getType('abc'); // 返回: 'string'
 * getType(true); // 返回: 'boolean'
 * getType(null); // 返回: 'null'
 * getType(undefined); // 返回: 'undefined'
 * getType([]); // 返回: 'array'
 * getType({}); // 返回: 'object'
 * getType(new Date()); // 返回: 'date'
 * getType(/\d+/); // 返回: 'regexp'
 * getType(new Map()); // 返回: 'map'
 * getType(new Set()); // 返回: 'set'
 * getType(() => {}); // 返回: 'function'
 * ```
 */
export const getType = (value: unknown): string => {

  if (value === null) {
    return 'null';
  }
  
  if (value === undefined) {
    return 'undefined';
  }
  
  if (Array.isArray(value)) {
    return 'array';
  }
  
  const type = typeof value;
  
  if (type === 'object') {
    // 检查内置对象类型
    const objectType = Object.prototype.toString.call(value);
    const match = objectType.match(/\[object (\w+)\]/);
    
    if (match && match[1]) {
      const detailedType = match[1].toLowerCase();
      
      // 对象、日期、正则表达式等
      if (['date', 'regexp', 'map', 'set', 'weakmap', 'weakset'].includes(detailedType)) {
        return detailedType;
      }
    }
  }
  
  return type;
};

/**
 * 检查值是否为指定类型
 * 
 * @param value - 要检查的值
 * @param type - 类型字符串或类型字符串数组
 * @returns 如果值是指定类型则返回true，否则返回false
 * @example
 * ```ts
 * isType(123, 'number'); // 返回: true
 * isType('abc', 'string'); // 返回: true
 * isType([], 'array'); // 返回: true
 * isType(null, 'null'); // 返回: true
 * isType(123, ['string', 'number']); // 返回: true
 * isType(undefined, ['null', 'undefined']); // 返回: true
 * ```
 */
export const isType = (value: unknown, type: string | string[]): boolean => {
  const valueType = getType(value);
  
  if (Array.isArray(type)) {
    return type.includes(valueType);
  }
  
  return valueType === type;
};

/**
 * 检查值是否为 undefined
 * @param value - 要检查的值
 * @returns 是否为 undefined
 * @example
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * isUndefined('') // false
 */
export const isUndefined = (value: unknown): value is undefined => value === undefined;

/**
 * 检查值是否为 null
 * @param value - 要检查的值
 * @returns 是否为 null
 * @example
 * isNull(null) // true
 * isNull(undefined) // false
 * isNull('') // false
 */
export const isNull = (value: unknown): value is null => value === null;

/**
 * 检查值是否为布尔值
 * @param value - 要检查的值
 * @returns 是否为布尔值
 * @example
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean(1) // false
 * isBoolean('true') // false
 */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

/**
 * 检查值是否为数字
 * @param value - 要检查的值
 * @returns 是否为数字
 * @example
 * isNumber(1) // true
 * isNumber(1.5) // true
 * isNumber(NaN) // true
 * isNumber('1') // false
 */
export const isNumber = (value: unknown): value is number => 
  typeof value === 'number' && !isNaN(value);

/**
 * 检查值是否为整数
 * @param value - 要检查的值
 * @returns 是否为整数
 * @example
 * isInteger(1) // true
 * isInteger(1.0) // true
 * isInteger(1.5) // false
 * isInteger('1') // false
 */
export const isInteger = (value: unknown): value is number => 
  Number.isInteger(value as number);

/**
 * 检查值是否为有限数字
 * @param value - 要检查的值
 * @returns 是否为有限数字
 * @example
 * isFiniteNumber(1) // true
 * isFiniteNumber(1.5) // true
 * isFiniteNumber(Infinity) // false
 * isFiniteNumber(NaN) // false
 */
export const isFiniteNumber = (value: unknown): value is number => 
  Number.isFinite(value as number);

/**
 * 检查值是否为 NaN
 * @param value - 要检查的值
 * @returns 是否为 NaN
 * @example
 * isNaN(NaN) // true
 * isNaN(1) // false
 * isNaN('test') // false
 */
export const isNaN = (value: unknown): value is number => 
  Number.isNaN(value as number);

/**
 * 检查值是否为字符串
 * @param value - 要检查的值
 * @returns 是否为字符串
 * @example
 * isString('test') // true
 * isString('') // true
 * isString(1) // false
 */
export const isString = (value: unknown): value is string => typeof value === 'string';

