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
  isPromise,
  isRegExp,
  isError,
  isSymbol,
  isBigInt,
  isMap,
  isSet,
  isWeakMap,
  isWeakSet,
  isIterable,
  isAsyncIterable
} from '@/type';

describe('Type Utils', () => {
  describe('getType', () => {
    it('should return correct type for primitives', () => {
      expect(getType(123)).toBe('number');
      expect(getType('abc')).toBe('string');
      expect(getType(true)).toBe('boolean');
      expect(getType(null)).toBe('null');
      expect(getType(undefined)).toBe('undefined');
    });

    it('should return correct type for objects', () => {
      expect(getType([])).toBe('array');
      expect(getType({})).toBe('object');
      expect(getType(new Date())).toBe('date');
      expect(getType(/\d+/)).toBe('regexp');
      expect(getType(new Map())).toBe('map');
      expect(getType(new Set())).toBe('set');
      expect(getType(() => {})).toBe('function');
    });
  });

  describe('isType', () => {
    it('should check single type', () => {
      expect(isType(123, 'number')).toBe(true);
      expect(isType('abc', 'string')).toBe(true);
      expect(isType(123, 'string')).toBe(false);
    });

    it('should check multiple types', () => {
      expect(isType(123, ['string', 'number'])).toBe(true);
      expect(isType('abc', ['string', 'number'])).toBe(true);
      expect(isType(true, ['string', 'number'])).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('should return true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined('')).toBe(false);
    });
  });

  describe('isNull', () => {
    it('should return true for null', () => {
      expect(isNull(null)).toBe(true);
      expect(isNull(undefined)).toBe(false);
      expect(isNull('')).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('should return true for boolean', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('true')).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true for number', () => {
      expect(isNumber(1)).toBe(true);
      expect(isNumber(1.5)).toBe(true);
      expect(isNumber(NaN)).toBe(false); // isNumber excludes NaN
      expect(isNumber('1')).toBe(false);
      expect(isNumber(Infinity)).toBe(true); // Infinity is a number
    });
  });

  describe('isInteger', () => {
    it('should return true for integer', () => {
      expect(isInteger(1)).toBe(true);
      expect(isInteger(1.0)).toBe(true);
      expect(isInteger(1.5)).toBe(false);
      expect(isInteger('1')).toBe(false);
    });
  });

  describe('isFiniteNumber', () => {
    it('should return true for finite number', () => {
      expect(isFiniteNumber(1)).toBe(true);
      expect(isFiniteNumber(1.5)).toBe(true);
      expect(isFiniteNumber(Infinity)).toBe(false);
      expect(isFiniteNumber(NaN)).toBe(false);
    });
  });

  describe('isNaN', () => {
    it('should return true for NaN', () => {
      expect(isNaN(NaN)).toBe(true);
      expect(isNaN(1)).toBe(false);
      expect(isNaN('test')).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true for string', () => {
      expect(isString('test')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString(1)).toBe(false);
    });
  });

  describe('isObject', () => {
    it('should return true for object', () => {
      expect(isObject({})).toBe(true);
      expect(isObject([])).toBe(true);
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
    });
  });

  describe('isPlainObject', () => {
    it('should return true for plain object', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject(Object.create(null))).toBe(true);
      expect(isPlainObject(new Date())).toBe(false);
      expect(isPlainObject([])).toBe(false);
    });
  });

  describe('isArray', () => {
    it('should return true for array', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray({})).toBe(false);
    });
  });

  describe('isFunction', () => {
    it('should return true for function', () => {
      expect(isFunction(() => {})).toBe(true);
      expect(isFunction(function() {})).toBe(true);
      expect(isFunction({})).toBe(false);
    });
  });

  describe('isDate', () => {
    it('should return true for date', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate('2024-03-18')).toBe(false);
    });
  });

  describe('isPromise', () => {
    it('should return true for promise', () => {
      expect(isPromise(Promise.resolve())).toBe(true);
      expect(isPromise(new Promise(() => {}))).toBe(true);
      expect(isPromise({})).toBe(false);
    });
  });

  describe('isRegExp', () => {
    it('should return true for regexp', () => {
      expect(isRegExp(/test/)).toBe(true);
      expect(isRegExp(new RegExp('test'))).toBe(true);
      expect(isRegExp('test')).toBe(false);
    });
  });

  describe('isError', () => {
    it('should return true for error', () => {
      expect(isError(new Error())).toBe(true);
      expect(isError(new TypeError())).toBe(true);
      expect(isError({})).toBe(false);
    });
  });

  describe('isSymbol', () => {
    it('should return true for symbol', () => {
      expect(isSymbol(Symbol())).toBe(true);
      expect(isSymbol(Symbol('test'))).toBe(true);
      expect(isSymbol('test')).toBe(false);
    });
  });

  describe('isBigInt', () => {
    it('should return true for bigint', () => {
      expect(isBigInt(BigInt(1))).toBe(true);
      expect(isBigInt(1n)).toBe(true);
      expect(isBigInt(1)).toBe(false);
    });
  });

  describe('isMap', () => {
    it('should return true for map', () => {
      expect(isMap(new Map())).toBe(true);
      expect(isMap({})).toBe(false);
    });
  });

  describe('isSet', () => {
    it('should return true for set', () => {
      expect(isSet(new Set())).toBe(true);
      expect(isSet([])).toBe(false);
    });
  });

  describe('isWeakMap', () => {
    it('should return true for weakmap', () => {
      expect(isWeakMap(new WeakMap())).toBe(true);
      expect(isWeakMap(new Map())).toBe(false);
    });
  });

  describe('isWeakSet', () => {
    it('should return true for weakset', () => {
      expect(isWeakSet(new WeakSet())).toBe(true);
      expect(isWeakSet(new Set())).toBe(false);
    });
  });

  describe('isIterable', () => {
    it('should return true for iterable', () => {
      expect(isIterable([])).toBe(true);
      expect(isIterable('')).toBe(true);
      expect(isIterable(new Set())).toBe(true);
      expect(isIterable({})).toBe(false);
    });
  });

  describe('isAsyncIterable', () => {
    it('should return true for async iterable', () => {
      const asyncIterable = {
        async *[Symbol.asyncIterator]() {
          yield 1;
        }
      };
      expect(isAsyncIterable(asyncIterable)).toBe(true);
      expect(isAsyncIterable([])).toBe(false);
    });
  });
});

