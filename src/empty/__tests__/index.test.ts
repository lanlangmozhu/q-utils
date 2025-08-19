import {
  isNil,
  isEmpty,
  isEmptyString,
  isEmptyArray,
  isEmptyObject,
  isEmptyMap,
  isEmptySet,
  isEmptyWeakMap,
  isEmptyWeakSet,
  isEmptyDate,
  isEmptyRegExp,
  isEmptyError,
  isEmptyPromise,
  isEmptyIterator,
  isEmptyAsyncIterator,
  isEmptyOrFalsy,
  isEmptyOrFalsyStrict,
  isEmptyOrFalsyLoose,
  isEmptyOrFalsyStrictest
} from '@/empty';

describe('空值检测工具函数', () => {
  describe('isNil', () => {
    it('应该正确判断值是否为 null 或 undefined', () => {
      expect(isNil(null)).toBe(true);
      expect(isNil(undefined)).toBe(true);
      expect(isNil('')).toBe(false);
      expect(isNil(0)).toBe(false);
      expect(isNil(false)).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('应该正确判断值是否为空', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty('0')).toBe(false);
    });
  });

  describe('isEmptyString', () => {
    it('应该正确判断值是否为空字符串', () => {
      expect(isEmptyString('')).toBe(true);
      expect(isEmptyString(' ')).toBe(false);
      expect(isEmptyString('test')).toBe(false);
    });
  });

  describe('isEmptyArray', () => {
    it('应该正确判断值是否为空数组', () => {
      expect(isEmptyArray([])).toBe(true);
      expect(isEmptyArray([1, 2, 3])).toBe(false);
      expect(isEmptyArray({})).toBe(false);
    });
  });

  describe('isEmptyObject', () => {
    it('应该正确判断值是否为空对象', () => {
      expect(isEmptyObject({})).toBe(true);
      expect(isEmptyObject({ a: 1 })).toBe(false);
      expect(isEmptyObject([])).toBe(false);
    });
  });

  describe('isEmptyMap', () => {
    it('应该正确判断值是否为空 Map', () => {
      expect(isEmptyMap(new Map())).toBe(true);
      expect(isEmptyMap(new Map([['key', 'value']]))).toBe(false);
      expect(isEmptyMap({})).toBe(false);
    });
  });

  describe('isEmptySet', () => {
    it('应该正确判断值是否为空 Set', () => {
      expect(isEmptySet(new Set())).toBe(true);
      expect(isEmptySet(new Set([1, 2, 3]))).toBe(false);
      expect(isEmptySet([])).toBe(false);
    });
  });

  describe('isEmptyWeakMap', () => {
    it('应该正确判断值是否为空 WeakMap', () => {
      expect(isEmptyWeakMap(new WeakMap())).toBe(true);
      expect(isEmptyWeakMap(new Map())).toBe(false);
    });
  });

  describe('isEmptyWeakSet', () => {
    it('应该正确判断值是否为空 WeakSet', () => {
      expect(isEmptyWeakSet(new WeakSet())).toBe(true);
      expect(isEmptyWeakSet(new Set())).toBe(false);
    });
  });

  describe('isEmptyDate', () => {
    it('应该正确判断值是否为空 Date', () => {
      expect(isEmptyDate(new Date(''))).toBe(true);
      expect(isEmptyDate(new Date())).toBe(false);
    });
  });

  describe('isEmptyRegExp', () => {
    it('应该正确判断值是否为空正则表达式', () => {
      expect(isEmptyRegExp(new RegExp(''))).toBe(true);
      expect(isEmptyRegExp(/test/)).toBe(false);
    });
  });

  describe('isEmptyError', () => {
    it('应该正确判断值是否为空 Error', () => {
      expect(isEmptyError(new Error(''))).toBe(true);
      expect(isEmptyError(new Error('test'))).toBe(false);
    });
  });

  describe('isEmptyPromise', () => {
    it('应该正确判断值是否为空 Promise', async () => {
      expect(await isEmptyPromise(Promise.resolve())).toBe(true);
      expect(await isEmptyPromise(Promise.reject(new Error()))).toBe(false);
    });
  });

  describe('isEmptyIterator', () => {
    it('应该正确判断值是否为空迭代器', () => {
      expect(isEmptyIterator([][Symbol.iterator]())).toBe(true);
      expect(isEmptyIterator([1, 2, 3][Symbol.iterator]())).toBe(false);
    });
  });

  describe('isEmptyAsyncIterator', () => {
    it('应该正确判断值是否为空异步迭代器', async () => {
      const emptyAsyncIterator = {
        async *[Symbol.asyncIterator]() {}
      }[Symbol.asyncIterator]();
      const nonEmptyAsyncIterator = {
        async *[Symbol.asyncIterator]() {
          yield 1;
        }
      }[Symbol.asyncIterator]();
      expect(await isEmptyAsyncIterator(emptyAsyncIterator)).toBe(true);
      expect(await isEmptyAsyncIterator(nonEmptyAsyncIterator)).toBe(false);
    });
  });

  describe('isEmptyOrFalsy', () => {
    it('应该正确判断值是否为空或假值', () => {
      expect(isEmptyOrFalsy(null)).toBe(true);
      expect(isEmptyOrFalsy(undefined)).toBe(true);
      expect(isEmptyOrFalsy('')).toBe(true);
      expect(isEmptyOrFalsy(0)).toBe(true);
      expect(isEmptyOrFalsy(false)).toBe(true);
      expect(isEmptyOrFalsy('test')).toBe(false);
      expect(isEmptyOrFalsy(1)).toBe(false);
    });
  });

  describe('isEmptyOrFalsyStrict', () => {
    it('应该正确判断值是否为空或假值（不包括空数组和空对象）', () => {
      expect(isEmptyOrFalsyStrict(null)).toBe(true);
      expect(isEmptyOrFalsyStrict(undefined)).toBe(true);
      expect(isEmptyOrFalsyStrict('')).toBe(true);
      expect(isEmptyOrFalsyStrict(0)).toBe(true);
      expect(isEmptyOrFalsyStrict(false)).toBe(true);
      expect(isEmptyOrFalsyStrict([])).toBe(false);
      expect(isEmptyOrFalsyStrict({})).toBe(false);
      expect(isEmptyOrFalsyStrict('test')).toBe(false);
      expect(isEmptyOrFalsyStrict(1)).toBe(false);
    });
  });

  describe('isEmptyOrFalsyLoose', () => {
    it('应该正确判断值是否为空或假值（包括空数组和空对象）', () => {
      expect(isEmptyOrFalsyLoose(null)).toBe(true);
      expect(isEmptyOrFalsyLoose(undefined)).toBe(true);
      expect(isEmptyOrFalsyLoose('')).toBe(true);
      expect(isEmptyOrFalsyLoose(0)).toBe(true);
      expect(isEmptyOrFalsyLoose(false)).toBe(true);
      expect(isEmptyOrFalsyLoose([])).toBe(true);
      expect(isEmptyOrFalsyLoose({})).toBe(true);
      expect(isEmptyOrFalsyLoose('test')).toBe(false);
      expect(isEmptyOrFalsyLoose(1)).toBe(false);
    });
  });

  describe('isEmptyOrFalsyStrictest', () => {
    it('应该正确判断值是否为空或假值（包括空数组、空对象和空字符串）', () => {
      expect(isEmptyOrFalsyStrictest(null)).toBe(true);
      expect(isEmptyOrFalsyStrictest(undefined)).toBe(true);
      expect(isEmptyOrFalsyStrictest('')).toBe(true);
      expect(isEmptyOrFalsyStrictest(0)).toBe(true);
      expect(isEmptyOrFalsyStrictest(false)).toBe(true);
      expect(isEmptyOrFalsyStrictest([])).toBe(true);
      expect(isEmptyOrFalsyStrictest({})).toBe(true);
      expect(isEmptyOrFalsyStrictest('test')).toBe(false);
      expect(isEmptyOrFalsyStrictest(1)).toBe(false);
    });
  });
}); 