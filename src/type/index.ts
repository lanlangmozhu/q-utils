/**
 * 类型检测工具函数
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
 * 检查值是否为 Promise
 * @param value - 要检查的值
 * @returns 是否为 Promise
 * @example
 * isPromise(Promise.resolve()) // true
 * isPromise(new Promise(() => {})) // true
 * isPromise({}) // false
 */
export const isPromise = (value: unknown): value is Promise<unknown> => {
  return value instanceof Promise || 
    (typeof value === 'object' && value !== null && 
     typeof (value as any).then === 'function');
};

/**
 * 检查值是否为正则表达式
 * @param value - 要检查的值
 * @returns 是否为正则表达式
 * @example
 * isRegExp(/test/) // true
 * isRegExp(new RegExp('test')) // true
 * isRegExp('test') // false
 */
export const isRegExp = (value: unknown): value is RegExp => value instanceof RegExp;

/**
 * 检查值是否为 Error 对象
 * @param value - 要检查的值
 * @returns 是否为 Error 对象
 * @example
 * isError(new Error()) // true
 * isError(new TypeError()) // true
 * isError({}) // false
 */
export const isError = (value: unknown): value is Error => value instanceof Error;

/**
 * 检查值是否为 Symbol
 * @param value - 要检查的值
 * @returns 是否为 Symbol
 * @example
 * isSymbol(Symbol()) // true
 * isSymbol(Symbol('test')) // true
 * isSymbol('test') // false
 */
export const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol';

/**
 * 检查值是否为 BigInt
 * @param value - 要检查的值
 * @returns 是否为 BigInt
 * @example
 * isBigInt(BigInt(1)) // true
 * isBigInt(1n) // true
 * isBigInt(1) // false
 */
export const isBigInt = (value: unknown): value is bigint => typeof value === 'bigint';

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
 * isFinite(1) // true
 * isFinite(1.5) // true
 * isFinite(Infinity) // false
 * isFinite(NaN) // false
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

/**
 * 检查值是否为对象
 * @param value - 要检查的值
 * @returns 是否为对象
 * @example
 * isObject({}) // true
 * isObject([]) // true
 * isObject(null) // false
 * isObject(undefined) // false
 */
export const isObject = (value: unknown): value is object => 
  typeof value === 'object' && value !== null;

/**
 * 检查值是否为普通对象（由 Object 构造函数创建或原型链上没有其他对象）
 * @param value - 要检查的值
 * @returns 是否为普通对象
 * @example
 * isPlainObject({}) // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject(new Date()) // false
 * isPlainObject([]) // false
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== 'object' || value === null) return false;
  
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

/**
 * 检查值是否为数组
 * @param value - 要检查的值
 * @returns 是否为数组
 * @example
 * isArray([]) // true
 * isArray([1, 2, 3]) // true
 * isArray({}) // false
 */
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

/**
 * 检查值是否为函数
 * @param value - 要检查的值
 * @returns 是否为函数
 * @example
 * isFunction(() => {}) // true
 * isFunction(function() {}) // true
 * isFunction({}) // false
 */
export const isFunction = (value: unknown): value is Function => typeof value === 'function';

/**
 * 检查值是否为日期对象
 * @param value - 要检查的值
 * @returns 是否为日期对象
 * @example
 * isDate(new Date()) // true
 * isDate('2024-03-18') // false
 */
export const isDate = (value: unknown): value is Date => value instanceof Date;

/**
 * 检查值是否为 Map 对象
 * @param value - 要检查的值
 * @returns 是否为 Map 对象
 * @example
 * isMap(new Map()) // true
 * isMap({}) // false
 */
export const isMap = (value: unknown): value is Map<unknown, unknown> => value instanceof Map;

/**
 * 检查值是否为 Set 对象
 * @param value - 要检查的值
 * @returns 是否为 Set 对象
 * @example
 * isSet(new Set()) // true
 * isSet([]) // false
 */
export const isSet = (value: unknown): value is Set<unknown> => value instanceof Set;

/**
 * 检查值是否为 WeakMap 对象
 * @param value - 要检查的值
 * @returns 是否为 WeakMap 对象
 * @example
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
export const isWeakMap = (value: unknown): value is WeakMap<object, unknown> => 
  value instanceof WeakMap;

/**
 * 检查值是否为 WeakSet 对象
 * @param value - 要检查的值
 * @returns 是否为 WeakSet 对象
 * @example
 * isWeakSet(new WeakSet()) // true
 * isWeakSet(new Set()) // false
 */
export const isWeakSet = (value: unknown): value is WeakSet<object> => 
  value instanceof WeakSet;

/**
 * 检查值是否为可迭代对象
 * @param value - 要检查的值
 * @returns 是否为可迭代对象
 * @example
 * isIterable([]) // true
 * isIterable('') // true
 * isIterable(new Set()) // true
 * isIterable({}) // false
 */
export const isIterable = (value: unknown): value is Iterable<unknown> => {
  return value !== null && 
    typeof (value as any)[Symbol.iterator] === 'function';
};

/**
 * 检查值是否为异步可迭代对象
 * @param value - 要检查的值
 * @returns 是否为异步可迭代对象
 * @example
 * isAsyncIterable({
 *   async *[Symbol.asyncIterator]() {
 *     yield 1;
 *   }
 * }) // true
 * isAsyncIterable([]) // false
 */
export const isAsyncIterable = (value: unknown): value is AsyncIterable<unknown> => {
  return value !== null && 
    typeof (value as any)[Symbol.asyncIterator] === 'function';
}; 