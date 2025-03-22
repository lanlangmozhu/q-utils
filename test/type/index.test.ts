import {
  getType,
  isType,
  isUndefined,
  isNull,
  isBoolean,
  isNumber,
  isInteger,
  isFiniteNumber,
  isNaN,
  isString,
  isObject,
  isPlainObject,
  isArray,
  isFunction,
  isDate,
  isMap,
  isSet,
  isWeakMap,
  isWeakSet,
  isIterable,
  isAsyncIterable
} from '../../src/type';

describe('类型检测工具函数', () => {
  describe('getType', () => {
    it('应该正确获取值的类型', () => {
      expect(getType(123)).toBe('number');
      expect(getType('abc')).toBe('string');
      expect(getType(true)).toBe('boolean');
      expect(getType(null)).toBe('null');
      expect(getType(undefined)).toBe('undefined');
      expect(getType([])).toBe('array');
      expect(getType({})).toBe('object');
      expect(getType(new Date())).toBe('date');
      expect(getType(/\d+/)).toBe('regexp');
      expect(getType(new Map())).toBe('map');
      expect(getType(new Set())).toBe('set');
      expect(getType(new WeakMap())).toBe('weakmap');
      expect(getType(new WeakSet())).toBe('weakset');
      expect(getType(() => {})).toBe('function');
    });
  });

  describe('isType', () => {
    it('应该正确判断值是否为指定类型', () => {
      expect(isType(123, 'number')).toBe(true);
      expect(isType('abc', 'string')).toBe(true);
      expect(isType(true, 'boolean')).toBe(true);
      expect(isType(null, 'null')).toBe(true);
      expect(isType(undefined, 'undefined')).toBe(true);
      expect(isType([], 'array')).toBe(true);
      expect(isType({}, 'object')).toBe(true);
      expect(isType(new Date(), 'date')).toBe(true);
      expect(isType(/\d+/, 'regexp')).toBe(true);
      expect(isType(new Map(), 'map')).toBe(true);
      expect(isType(new Set(), 'set')).toBe(true);
      expect(isType(new WeakMap(), 'weakmap')).toBe(true);
      expect(isType(new WeakSet(), 'weakset')).toBe(true);
      expect(isType(() => {}, 'function')).toBe(true);
    });

    it('应该支持多个类型的判断', () => {
      expect(isType(123, ['string', 'number'])).toBe(true);
      expect(isType(undefined, ['null', 'undefined'])).toBe(true);
    });
  });

  describe('isUndefined', () => {
    it('应该正确判断值是否为 undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined('')).toBe(false);
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined(false)).toBe(false);
    });
  });

  describe('isNull', () => {
    it('应该正确判断值是否为 null', () => {
      expect(isNull(null)).toBe(true);
      expect(isNull(undefined)).toBe(false);
      expect(isNull('')).toBe(false);
      expect(isNull(0)).toBe(false);
      expect(isNull(false)).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('应该正确判断值是否为布尔值', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('应该正确判断值是否为数字', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber(123.45)).toBe(true);
      expect(isNumber('123')).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
    });
  });

  describe('isInteger', () => {
    it('应该正确判断值是否为整数', () => {
      expect(isInteger(123)).toBe(true);
      expect(isInteger(123.45)).toBe(false);
      expect(isInteger('123')).toBe(false);
      expect(isInteger(null)).toBe(false);
      expect(isInteger(undefined)).toBe(false);
    });
  });

  describe('isFiniteNumber', () => {
    it('应该正确判断值是否为有限数', () => {
      expect(isFiniteNumber(123)).toBe(true);
      expect(isFiniteNumber(Infinity)).toBe(false);
      expect(isFiniteNumber(-Infinity)).toBe(false);
      expect(isFiniteNumber('123')).toBe(false);
      expect(isFiniteNumber(null)).toBe(false);
      expect(isFiniteNumber(undefined)).toBe(false);
    });
  });

  describe('isNaN', () => {
    it('应该正确判断值是否为 NaN', () => {
      expect(isNaN(NaN)).toBe(true);
      expect(isNaN(123)).toBe(false);
      expect(isNaN('123')).toBe(false);
      expect(isNaN(null)).toBe(false);
      expect(isNaN(undefined)).toBe(false);
    });
  });

  describe('isString', () => {
    it('应该正确判断值是否为字符串', () => {
      expect(isString('abc')).toBe(true);
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
    });
  });

  describe('isObject', () => {
    it('应该正确判断值是否为对象', () => {
      expect(isObject({})).toBe(true);
      expect(isObject([])).toBe(true);
      expect(isObject(new Date())).toBe(true);
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
    });
  });

  describe('isPlainObject', () => {
    it('应该正确判断值是否为普通对象', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject(Object.create(null))).toBe(true);
      expect(isPlainObject(new Object())).toBe(true);
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
      expect(isPlainObject(null)).toBe(false);
    });
  });

  describe('isArray', () => {
    it('应该正确判断值是否为数组', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray({})).toBe(false);
      expect(isArray(null)).toBe(false);
      expect(isArray(undefined)).toBe(false);
    });
  });

  describe('isFunction', () => {
    it('应该正确判断值是否为函数', () => {
      expect(isFunction(() => {})).toBe(true);
      expect(isFunction(function() {})).toBe(true);
      expect(isFunction({})).toBe(false);
      expect(isFunction(null)).toBe(false);
      expect(isFunction(undefined)).toBe(false);
    });
  });

  describe('isDate', () => {
    it('应该正确判断值是否为日期对象', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate('2023-01-01')).toBe(false);
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
    });
  });

  describe('isMap', () => {
    it('应该正确判断值是否为 Map', () => {
      expect(isMap(new Map())).toBe(true);
      expect(isMap({})).toBe(false);
      expect(isMap(null)).toBe(false);
      expect(isMap(undefined)).toBe(false);
    });
  });

  describe('isSet', () => {
    it('应该正确判断值是否为 Set', () => {
      expect(isSet(new Set())).toBe(true);
      expect(isSet([])).toBe(false);
      expect(isSet(null)).toBe(false);
      expect(isSet(undefined)).toBe(false);
    });
  });

  describe('isWeakMap', () => {
    it('应该正确判断值是否为 WeakMap', () => {
      expect(isWeakMap(new WeakMap())).toBe(true);
      expect(isWeakMap(new Map())).toBe(false);
      expect(isWeakMap(null)).toBe(false);
      expect(isWeakMap(undefined)).toBe(false);
    });
  });

  describe('isWeakSet', () => {
    it('应该正确判断值是否为 WeakSet', () => {
      expect(isWeakSet(new WeakSet())).toBe(true);
      expect(isWeakSet(new Set())).toBe(false);
      expect(isWeakSet(null)).toBe(false);
      expect(isWeakSet(undefined)).toBe(false);
    });
  });

  describe('isIterable', () => {
    it('应该正确判断值是否为可迭代对象', () => {
      expect(isIterable([])).toBe(true);
      expect(isIterable(new Set())).toBe(true);
      expect(isIterable(new Map())).toBe(true);
      expect(isIterable({})).toBe(false);
      expect(isIterable(null)).toBe(false);
      expect(isIterable(undefined)).toBe(false);
    });
  });

  describe('isAsyncIterable', () => {
    it('应该正确判断值是否为异步可迭代对象', () => {
      const asyncIterable = {
        async *[Symbol.asyncIterator]() {
          yield 1;
        }
      };
      expect(isAsyncIterable(asyncIterable)).toBe(true);
      expect(isAsyncIterable([])).toBe(false);
      expect(isAsyncIterable(null)).toBe(false);
      expect(isAsyncIterable(undefined)).toBe(false);
    });
  });
}); 