import { optimizePrecision, cache, throttle, debounce } from '../../src/number/performance';

describe('性能优化测试', () => {
  describe('optimizePrecision', () => {
    it('应该正确优化数值精度', () => {
      expect(optimizePrecision(3.14159)).toBe(3.14159);
      expect(optimizePrecision(0.1 + 0.2)).toBe(0.3);
      expect(optimizePrecision(1.0000000000000001)).toBe(1);
    });

    it('应该处理特殊值', () => {
      expect(optimizePrecision(Infinity)).toBe(Infinity);
      expect(optimizePrecision(-Infinity)).toBe(-Infinity);
      expect(optimizePrecision(NaN)).toBe(NaN);
    });

    it('应该处理整数', () => {
      expect(optimizePrecision(123)).toBe(123);
      expect(optimizePrecision(0)).toBe(0);
      expect(optimizePrecision(-123)).toBe(-123);
    });
  });

  describe('cache', () => {
    it('应该缓存函数结果', () => {
      let callCount = 0;
      const expensiveFn = (n: number) => {
        callCount++;
        return n * n;
      };
      const cachedFn = cache(expensiveFn);

      expect(cachedFn(5)).toBe(25);
      expect(cachedFn(5)).toBe(25);
      expect(callCount).toBe(1);
    });

    it('应该为不同参数缓存不同结果', () => {
      let callCount = 0;
      const expensiveFn = (n: number) => {
        callCount++;
        return n * n;
      };
      const cachedFn = cache(expensiveFn);

      expect(cachedFn(5)).toBe(25);
      expect(cachedFn(6)).toBe(36);
      expect(callCount).toBe(2);
    });

    it('应该处理异步函数', async () => {
      let callCount = 0;
      const asyncFn = async (n: number) => {
        callCount++;
        return n * n;
      };
      const cachedFn = cache(asyncFn);

      expect(await cachedFn(5)).toBe(25);
      expect(await cachedFn(5)).toBe(25);
      expect(callCount).toBe(1);
    });
  });

  describe('throttle', () => {
    it('应该限制函数执行频率', (done) => {
      let callCount = 0;
      const throttledFn = throttle(() => {
        callCount++;
      }, 100);

      // 快速调用多次
      throttledFn();
      throttledFn();
      throttledFn();
      throttledFn();
      throttledFn();

      // 第一次调用应该立即执行
      expect(callCount).toBe(1);

      // 等待一段时间后再次调用
      setTimeout(() => {
        throttledFn();
        throttledFn();
        throttledFn();
        expect(callCount).toBe(2);
        done();
      }, 150);
    });

    it('应该处理异步函数', async () => {
      let callCount = 0;
      const asyncFn = async () => {
        callCount++;
      };
      const throttledFn = throttle(asyncFn, 100);

      await throttledFn();
      await throttledFn();
      await throttledFn();
      expect(callCount).toBe(1);
    });
  });

  describe('debounce', () => {
    it('应该延迟函数执行', (done) => {
      let callCount = 0;
      const debouncedFn = debounce(() => {
        callCount++;
      }, 100);

      // 快速调用多次
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();

      // 立即检查，函数应该还未执行
      expect(callCount).toBe(0);

      // 等待一段时间后检查
      setTimeout(() => {
        expect(callCount).toBe(1);
        done();
      }, 150);
    });

    it('应该处理异步函数', async () => {
      let callCount = 0;
      const asyncFn = async () => {
        callCount++;
      };
      const debouncedFn = debounce(asyncFn, 100);

      await debouncedFn();
      await debouncedFn();
      await debouncedFn();
      expect(callCount).toBe(0);

      // 等待一段时间后检查
      await new Promise(resolve => setTimeout(resolve, 150));
      expect(callCount).toBe(1);
    });

    it('应该取消之前的延迟执行', (done) => {
      let result = '';
      const debouncedFn = debounce((value: string) => {
        result = value;
      }, 100);

      debouncedFn('first');
      debouncedFn('second');
      debouncedFn('third');

      setTimeout(() => {
        expect(result).toBe('third');
        done();
      }, 150);
    });
  });
}); 