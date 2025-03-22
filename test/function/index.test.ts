import { debounce, throttle, once, memoize, curry, compose, pipe, sleep } from '../../src/function';

describe('函数操作工具函数', () => {
  describe('debounce', () => {
    it('应该正确防抖函数调用', async () => {
      const mockFn = jest.fn();
      const debounced = debounce(mockFn, 100);
      
      debounced();
      debounced();
      debounced();
      
      expect(mockFn).not.toBeCalled();
      
      await new Promise(resolve => setTimeout(resolve, 150));
      expect(mockFn).toBeCalledTimes(1);
    });
  });

  describe('throttle', () => {
    it('应该正确节流函数调用', async () => {
      const mockFn = jest.fn();
      const throttled = throttle(mockFn, 100);
      
      throttled();
      throttled();
      throttled();
      
      expect(mockFn).toBeCalledTimes(1);
      
      await new Promise(resolve => setTimeout(resolve, 150));
      throttled();
      expect(mockFn).toBeCalledTimes(2);
    });
  });

  describe('once', () => {
    it('应该只调用一次函数', () => {
      const mockFn = jest.fn();
      const onceFn = once(mockFn);
      
      onceFn();
      onceFn();
      onceFn();
      
      expect(mockFn).toBeCalledTimes(1);
    });
  });

  describe('memoize', () => {
    it('应该缓存函数结果', () => {
      const mockFn = jest.fn().mockImplementation(n => n * 2);
      const memoized = memoize(mockFn);
      
      expect(memoized(2)).toBe(4);
      expect(memoized(2)).toBe(4);
      
      expect(mockFn).toBeCalledTimes(1);
    });
  });

  describe('curry', () => {
    it('应该正确柯里化函数', () => {
      const add = (a: number, b: number, c: number) => a + b + c;
      const curried = curry(add);
      
      expect(curried(1)(2)(3)).toBe(6);
      expect(curried(1, 2)(3)).toBe(6);
    });
  });

  describe('compose', () => {
    it('应该从右到左组合函数', () => {
      const add1 = (n: number) => n + 1;
      const multiply2 = (n: number) => n * 2;
      const toString = (n: number) => n.toString();
      
      const composed = compose(toString, multiply2, add1);
      expect(composed(1)).toBe('4'); // (1 + 1) * 2 = 4
    });
  });

  describe('pipe', () => {
    it('应该从左到右管道函数', () => {
      const add1 = (n: number) => n + 1;
      const multiply2 = (n: number) => n * 2;
      const toString = (n: number) => n.toString();
      
      const piped = pipe(add1, multiply2, toString);
      expect(piped(1)).toBe('4'); // (1 + 1) * 2 = 4
    });
  });

  describe('sleep', () => {
    it('应该正确延迟执行', async () => {
      const start = Date.now();
      await sleep(100);
      const end = Date.now();
      
      expect(end - start).toBeGreaterThanOrEqual(100);
    });
  });
}); 